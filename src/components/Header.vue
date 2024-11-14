<template>
  <header class="header">
            <div class="container container--header">
                <router-link to="/" class="logo">
                    <img src="../assets/images/other/logo.svg" alt="#logo">
                </router-link>
                <div class="header__btns">
                    <button class="btn btn__primary" @click = "$emit('toggleModal', true, 'login')"><img src="../assets/images/other/user.svg" alt="">Войти</button>
                    <button class="btn btn__outline" @click = "$emit('toggleModal', true, 'cart')"><img src="../assets/images/other/shopping-cart-header.svg" alt="">Корзина</button>
                </div>
            </div>  
        </header>
</template>

<script setup>
    const emit = defineEmits(['toggleModal']);
    const openModal = () => emit("toggleModal");
</script>

<style>
    header {
    padding: 4.4rem 0 0;
    margin-bottom: 4rem;

    background-color: #fff;
    }
    .container--header {
    display: flex;
    justify-content: space-between;
    }
    .logo {
    display: inline-block;
    cursor: pointer;
    }

    .header__btns {
    display: flex;
    gap: 0.8rem;
    }
</style>