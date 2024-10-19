<script setup>
  import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import ModalWindow from "./components/ModalWindow.vue";
import { store } from "./store/store";

</script>

<template>
  <Header @toggleModal="store.toggleModal(true)"/>

  <ModalWindow :isOpen="store.isOpen" @toggleModal="store.toggleModal(false)"/>

  <router-view></router-view>
  
  <Footer />
</template>

