<template>
  <div class="cart-modal__overlay" :class="{open: isOpen}" @click.self="closeModal()">
       <div class="cart-modal">
           <div class="cart-modal__header">
               <h2 class="cart-modal__title">Корзина</h2>
               <span class="cart-modal__close" @click="closeModal()"><img src="../assets/images/other/close.svg" alt=""></span>
           </div>
           <div class="cart-modal__body">
               <div class="cart-item">
                   <h3 class="cart_item__title">Ролл угорь стандарт</h3>
                   <p class="cart-item__price">250 ₽</p>
                   <div class="cart-item__controls">
                       <button>-</button>
                       <p class="cart-item__control--count">1</p>
                       <button>+</button>
                   </div>
               </div>

               <div class="cart-item">
                   <h3 class="cart_item__title">Ролл угорь стандарт</h3>
                   <p class="cart-item__price">250 ₽</p>
                   <div class="cart-item__controls">
                       <button>-</button>
                       <p class="cart-item__control--count">1</p>
                       <button>+</button>
                   </div>
               </div>
           </div>
           <div class="cart-modal__footer">
               <p class="cart-modal__footer--price info-black">1250 ₽</p>
               <div class="cart-modal__footer--controls">
                   <button class="btn btn__primary ">Оформить заказ</button>
                   <button class="btn btn__outline ">Отмена</button>
               </div>
           </div>

       </div>
   </div>
</template>

<script setup>
    const props = defineProps({isOpen: Boolean})
    const emit = defineEmits(['toggleModal']);
    const closeModal = () => emit("toggleModal");
</script>

<style scoped>
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
    justify-content: space-between;
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
</style>