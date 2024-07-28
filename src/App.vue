<script setup>
  import Header from "./components/Header.vue"
  import Footer from "./components/Footer.vue"
  import ModalWindow from "./components/ModalWindow.vue"
  import { store } from "./store/index";

</script>

<template>
  <Header @toggleModal="store.toggleModal(true)"/>

  <ModalWindow :isOpen="store.isOpen" @toggleModal="store.toggleModal(false)"/>

  <router-view></router-view>
  
  <Footer />
</template>

