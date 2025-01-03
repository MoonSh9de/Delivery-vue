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
</script>

<style lang="scss">
header {
    margin-bottom: 4rem;
    padding: 3rem 0;

    background-color: $blue-color;

    position: sticky;
    top: 0;
    z-index: 2;

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
}
</style>