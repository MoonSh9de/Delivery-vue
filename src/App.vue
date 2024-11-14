<script setup>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import CartModal from "./components/CartModal.vue";
import LoginModal from "./components/LoginModal.vue";
import { store } from "./store/store";

</script>

<template>
   <Header @toggleModal="(value, modalType) => store.toggleModal(value, modalType)" />

  <CartModal :cart="store.cart" :isOpen="store.isOpen && store.modalType === 'cart'" @toggleModal="() => store.toggleModal(false, 'cart')" @clearCart = "store.clearCart()"/>
  <LoginModal :isOpen="store.isOpen && store.modalType === 'login'" @toggleModal="() => store.toggleModal(false, 'login')"/>
  <router-view></router-view>
  
  <Footer />
</template>

