<template>
    <div class="cart-modal__overlay" :class="{open: isOpen}" @click.self="closeModal()">
         <div class="cart-modal">
             <div class="cart-modal__header">
                 <h2 class="cart-modal__title">Войти</h2>
                 <span class="cart-modal__close" @click="closeModal()"><img src="../assets/images/other/close.svg" alt=""></span>
             </div>
            </div>
        </div>
  </template>

<script setup>

const props = defineProps({
    isOpen: Boolean,
    cart: Array
});
const emit = defineEmits(['toggleModal']);

const closeModal = () => emit("toggleModal");


</script>