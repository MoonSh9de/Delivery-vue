<template>
    <div class="good">
        <div>
            <img class="good__image" :src=getUrl(good.img) alt="">
        </div>
        <div class="good__info">
            <h3 class="good__title">{{good.title}}</h3>
            <p class="good__about">{{good.composition}}</p>
            <div class="good__buy">
                <button href="" class="btn btn__cart--goods" @click="addToCart">В корзину <img src="../assets/images/other/shopping-cart-goods.svg" alt=""></button>
                <p class="cart-item__price">{{good.price}} ₽</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'GoodCard',
        props: {
            good: {
                type: Object,
                required: true
            },
        },
        methods: {
            getUrl(img) {
                return new URL(`../assets/images/goods/${img}`, import.meta.url).href;
            },
            addToCart() {
                this.$emit('addToCart', this.good);
            }
        }
    }
</script>

<style>
</style>