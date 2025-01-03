<template>
    <div class="good">
        <div>
            <img class="good__image" :src=getUrl(good.img) alt="">
        </div>
        <div class="good__info">
            <h3 class="good__title">{{good.title}}</h3>
            <p class="good__about">{{good.composition}}</p>
            <div class="good__buy">
                <p class="price--blue">{{good.price}} ₽</p>
                <button href="" class="btn btn__primary" @click="addToCart">В корзину <img src="../assets/images/other/shopping-cart-goods.svg" alt=""></button>
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

<style lang="scss">

.good {
	max-width: 384px;
	min-height: auto;
	border-radius: 0.7rem;
	box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.05);

	transition: all 0.2s linear;

    .good__image {
        width: 100%;
        height: 21.2rem;

        margin-bottom: 2.5rem;
    }

    .good__info {
        padding:  0 2.4rem 2.4rem;

        .good__title {
            margin-bottom: 1rem;

            font-size: 2.4rem;
            font-weight: 400;

            @include mobile {
                font-size: 2.1rem;
            }
        }

        .good__about {
            font-size: 1.8rem;
            font-weight: 400;
            color: #8c8c8c;

            @include mobile {
                font-size: 1.5rem;
            }
        }

        .good__buy {
            display: flex;
            align-items: center;
            justify-content: space-between;

            margin-top: 3rem;
        }
    }   
}
</style>