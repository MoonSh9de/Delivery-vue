<template>
  <div class="modal__overlay" :class="{open: isOpen}" @click.self="closeModal()">
       <div class="modal">
           <div class="modal__header">
               <h2 class="modal__title">Корзина</h2>
               <span @click="closeModal()"><img class="modal__close" src="../assets/images/other/close.svg" alt=""></span>
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
                        <p class="price--blue">Итог: {{ animatedTotalPrice}} ₽</p>
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
        animateTotalPrice(totalPrice);}, { immediate: true });


</script>

<style lang="scss">
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

    @include mobile {
        width: 24px;
        height: 24px;
    }
}
.modal {
    display: flex;
    flex-direction: column;
    width: 600px;
    min-height: 445px;
    padding: 3.5rem;

    border-radius: 0.5rem;
    background-color: $white-color;

    @include mobile{
        margin:0 1rem;
        padding: 2.8rem;
    }


    .modal__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        margin-bottom: 4.8rem;
    }

    .modal__title {
        font-size: 3.6rem;

        @include mobile {
            font-size: 3rem;
        }
    }

    .modal__body {
        height: 200px;

        margin-bottom: 3rem;
        padding: 0 1.5rem 0 0;
        
        overflow: auto;

        scrollbar-color: $black-color $gray-bg-color;
    }

    .modal__footer {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 2rem;

        width: auto;
        height: 45px;

        margin-top: auto;
        align-items: center;

        .modal__footer--controls {
            display: flex;
            gap: 1rem;

        }

        .modal__footer--price {
            padding: 1rem 2rem;

            background-color: $black-color;

            text-align: center;
            font-size: 2rem;
            font-weight: 400;
            color: $white-color;
        }
    }

    .modal__similar-body {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 530px;
        min-height: 300px;

        text-align: center; 

        .modal__similar-subtitle {
            font-size: 3rem;

            @include mobile {
                font-size: 2.4rem;
            }
        }

        .modal__similar-text {
            margin-top: 5rem;
            padding: 0 4rem;

            font-size: 2rem;

            @include mobile {
                padding: 0;

                font-size: 1.5rem;
            }
        }

        .modal__link {
            width: 250px;

            margin-top: auto;
            padding: 0.75rem;

            text-decoration: none;
            font-size: 1.5rem;

            transition: background 0.2s linear;
        }
    }
}

</style>