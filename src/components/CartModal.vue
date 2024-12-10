<template>
  <div class="modal__overlay" :class="{open: isOpen}" @click.self="closeModal()">
       <div class="modal">
           <div class="modal__header">
               <h2 class="modal__title">Корзина</h2>
               <span class="modal__close" @click="closeModal()"><img src="../assets/images/other/close.svg" alt=""></span>
           </div>
           <div v-if="cart.length > 0">
            <div class="modal__body">
                    <CartItem
                        v-for="(item) in cart"
                        :key="item.id"
                        :item="item"
                    />
                </div>

                    <div class="modal__footer">
                        <p class="modal__footer--price">{{ animatedTotalPrice }} ₽</p>
                        <div class="modal__footer--controls">
                            <button class="btn btn__primary ">Оформить заказ</button>
                            <button class="btn btn__outline " @click="clearCart()">Отмена</button>
                        </div>
                    </div>
            </div>

            <div class="modal__similar-body" v-else>
                <p class="modal__similar-subtitle">Хмм... здесь пусто 😞</p>
                <p class="modal__similar-text">Загляните на главную, чтобы выбрать ресторан и заказать Ваше любимое блюдо! 😋</p>
                <router-link to='/' class="btn__primary modal__link" @click="closeModal()">Перейти на главную</router-link>
            </div>
        </div>
   </div>
</template>

<script setup>
    import { store } from '@/store/store';
    import { computed, ref, watch } from 'vue';
    import CartItem from './CartItem.vue';
    const props = defineProps({
        isOpen: Boolean,
        cart: Array
    });
    const emit = defineEmits(['toggleModal', 'clearCart']);
    
    
    const closeModal = () => emit("toggleModal");
    const clearCart = () => emit('clearCart');

    const totalPrice = computed(() => {
        return store.cart.reduce((acc, item) => acc + item.price * item.count, 0);
    });

    const animatedTotalPrice = ref(0);

    function animateTotalPrice() {
    const animationSpeed = 20;
    const animationStep = (totalPrice.value - animatedTotalPrice.value) / animationSpeed;

    const intervalID = setInterval(() => {
        if (Math.abs(animatedTotalPrice.value - totalPrice.value) < Math.abs(animationStep)) {
            animatedTotalPrice.value = totalPrice.value;
            clearInterval(intervalID);
            return;
        }
        
        animatedTotalPrice.value = Math.round(animatedTotalPrice.value + animationStep);
    }, 10); 
}

    watch(totalPrice, () => {
    animateTotalPrice();}, { immediate: true });

</script>

<style>
    body:has(.modal__overlay.open) { 
        overflow: hidden; 
    }
    .modal__overlay {
    display: none;
    align-items: center;
    justify-content: center;
    
    background: rgba(0, 0, 0, 0.4);

    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    }

    .modal__overlay.open {
    display: flex;
    }
    .modal__close {
    cursor: pointer;
    }
    .modal {
    display: flex;
    flex-direction: column;
    width: 600px;
    height: 435px;

    padding: 3.5rem;

    border-radius: 0.5rem;

    background-color: #fff;
    
    }

    .modal__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4.8rem;
    }

    .modal__title {
    font-size: 3.6rem;
    }

    .modal__body {
    height: 200px;
    overflow: auto;
    padding: 0 1.5rem 0 0;
    margin-bottom: 3rem;

    scrollbar-color: var(--black-color) var(--gray-bg-color);
    }

    .cart-item {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;

    margin-bottom: 1.7rem;
    padding-bottom:  0.9rem;
    border-bottom: 1px solid #D9D9D9;
    }

    .cart_item__title {
    font-size: 1.8rem;
    font-size: 400;
    }

    .modal__footer {
    display: flex;
    width: auto;
    height: 45px;
    margin-top: auto;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
    }

    .modal__footer--controls {
    display: flex;
    gap: 1rem;
    }

    .modal__footer--price {
    padding: 1rem 2rem;

    background-color: var(--black-color);
    text-align: center;
    font-size: 2rem;
    font-weight: 400;
    color: var(--white-color);
    }

    .cart-item__controls {
    display: flex;
    align-items: center;
    }

    .cart-item__control--count {
    margin: 0 1.6rem;

    font-size: 1.6rem;
    font-weight: 400;
    }
    .cart-item__controls button {
    text-align: center;
    padding: 5px 16px;
    
    background-color: #fff;
    border: 1px solid rgb(64, 169, 255);
    border-radius: 2px;

    font-size: 1.4rem;
    font-weight: 400;
    color: #40A9FF;
    transition: all 0.2s linear;

    cursor: pointer;

    }

    .cart-item__controls button:hover {
    background-color: #0e65b7;
    color: #fff;
    }

    .cart-item__price {
    margin-right: 2rem;
    margin-left: auto;
    font-size: 2rem;
    font-weight: 700;
    color: #000;
    }

    .modal__similar-body {
       display: flex;
       flex-direction: column;
       align-items: center; 
       text-align: center; 
    }

    .modal__similar-subtitle {
        font-size: 3rem;
    }

    .modal__similar-text {
        margin-top: 5rem;
        margin-bottom: 3rem;
        padding: 0 4rem;

        font-size: 2rem;
    }
    .modal__link {
        width: 250px;

        padding: 0.75rem;
        text-decoration: none;
        font-size: 1.5rem;

        transition: background 0.2s linear;
    }
</style>