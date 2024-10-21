<template>
  <div class="cart-modal__overlay" :class="{open: isOpen}" @click.self="closeModal()">
       <div class="cart-modal">
           <div class="cart-modal__header">
               <h2 class="cart-modal__title">Корзина</h2>
               <span class="cart-modal__close" @click="closeModal()"><img src="../assets/images/other/close.svg" alt=""></span>
           </div>
           <div class="cart-modal__body">
            <CartItem
                v-for="(item) in cart"
                :key="item.id"
                :item="item"
                @decrement="() => decrementItem(item)"
                @increment="() => incrementItem(item)"
            />
           </div>

           <div class="cart-modal__footer">
               <p class="cart-modal__footer--price info-black">0 ₽</p>
               <div class="cart-modal__footer--controls">
                   <button class="btn btn__primary ">Оформить заказ</button>
                   <button class="btn btn__outline " @click="clearCart()">Отмена</button>
               </div>
           </div>

       </div>
   </div>
</template>

<script setup>
    import CartItem from './CartItem.vue';
    const props = defineProps({
        isOpen: Boolean,
        cart: Array
    });
    const emit = defineEmits(['toggleModal', 'clearCart']);
    
    
    const closeModal = () => emit("toggleModal");
    const clearCart = () => emit('clearCart');
    // addToCart() {
    //             this.$emit('addToCart', this.good);
    //         }

    const decrementItem = (item) => {
        if(item.count > 1) {
            item.count--;
        }
        else {
            cart.splice(index,1);
        }
    };

    const incrementItem = (item) => {
        item.count++;
    };

    // const totalPrice = computed(() => {
    //     return cart.reduce((acc, item) => acc + item.price * item.count, 0);
    // });

</script>

<style>
    .cart-modal__overlay {
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

    .cart-modal__overlay.open {
    display: flex;
    }
    .cart-modal__close {
    cursor: pointer;
    }
    .cart-modal {
    width: 100%;
    max-width: 60rem;

    padding: 4rem 4.5rem;

    border-radius: 0.5rem;

    background-color: #fff;

    }
    .cart-modal__header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 4.8rem;
    }

    .cart-modal__title {
    font-size: 3.6rem;
    }


    .cart-modal__body {
    margin-bottom: 5.3rem;
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

    .cart-modal__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
    }

    .cart-modal__footer--controls {
    display: flex;
    gap: 1rem;
    }

    .cart-modal__footer--price {
    text-align: center;
    font-size: 2rem;
    font-weight: 400;

    padding: 1rem 2rem;

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
</style>