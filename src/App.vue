<script setup>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import CartModal from "./components/CartModal.vue";
import { store } from "./store/store";

</script>

<template>
  <Header @toggleModal="store.toggleModal(true)"/>

  <CartModal :cart="store.cart" :isOpen="store.isOpen" @toggleModal="store.toggleModal(false)" @clearCart = "store.clearCart()"/>

  <router-view></router-view>
  
  <Footer />
</template>

