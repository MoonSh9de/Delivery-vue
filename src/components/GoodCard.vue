<template>
    <div class="good">
        <div>
            <img class="good__image" :src=getUrl(good.img) alt="">
        </div>
        <div class="good__info">
            <h3 class="good__title">{{good.title}}</h3>
            <p class="good__about">{{good.composition}}</p>
            <div class="good__buy">
                <a href="#" class="btn btn__cart--goods">В корзину <img src="../assets/images/other/shopping-cart-goods.svg" alt=""></a>
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
                return require(`../assets/images/goods/${img}`)
            }
        }
    }
</script>

<style>
    .good {
        max-width: 38.4rem;
        height: 41.4rem;
        border-radius: 0.7rem;
        box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.05);

        transition: all 0.2s linear;
    }

    .good__about {
        margin-bottom: 2.5rem;
    }

    .good__info {
        padding:  0 2.4rem;
    }
    .good__image {
        width: 100%;
        height: 21.2rem;

        margin-bottom: 2.5rem;
    }

    .good__buy {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .good__title {
    margin-bottom: 1rem;

    font-size: 2.4rem;
    font-weight: 400;

    }

    .good__about {
    font-size: 1.8rem;
    font-weight: 400;
    color: #8c8c8c;
    }
    .cart-item__price {
    font-size: 2rem;
    font-weight: 700;
    color: #000;
    }
</style>