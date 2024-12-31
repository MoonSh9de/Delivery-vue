<template>
    <div class="cart-item">
        <h3 class="cart_item__title">{{item.title}}</h3>
        <p class="cart-item__price">{{itemPrice}} ₽</p>
        <div class="cart-item__controls">
            <button @click="decrementItem(item)">-</button>
            <p class="cart-item__control--count">{{item.count}}</p>
            <button @click="incrementItem(item)">+</button>
        </div>
    </div>
</template>


<script>
import { store } from '@/store/store';
export default {
    name: 'CartItem',
    props: {
        item: {
            type: Object,
            required: true
        },
    },
    
    data() {
        return {
            itemPrice: 0
        }
    },

    watch: {

        'item.count': {
            handler() {
                this.itemPrice = this.item.price * this.item.count;

            }, immediate: true}
    },
    methods: {
        decrementItem (item) {
        if(item.count > 1) {
            item.count--;
        }
        else {
            const index = store.cart.findIndex(cartItem => cartItem.id === item.id);
            if(index !== -1) {
                store.cart.splice(index,1);
            }
        }
    },

    incrementItem (item) {
        item.count++;
    },
    }
}

</script>

<style lang="scss">
.cart-item {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;

    margin-bottom: 1.7rem;
    padding-bottom:  0.9rem;

    border-bottom: 1px solid $gray-underline;

    .cart_item__title {
        font-size: 1.8rem;
        font-size: 400;
    }

    .cart-item__controls {
        display: flex;
        align-items: center;
    }

    .cart-item__control--count {
        width: 40px;

        text-align: center;
        font-size: 1.6rem;
        font-weight: 400;
    }
    .cart-item__controls button {
        padding: 5px 16px;

        background-color: $white-color;
        border: 1px solid $blue-color;
        border-radius: 2px;

        text-align: center;
        font-size: 1.4rem;
        font-weight: 400;
        color: $blue-color;

        transition: all 0.2s linear;

        cursor: pointer;
    }

    .cart-item__controls button:hover {
        background-color: $dark-blue-color;

        color: #fff;
    }
// Повтор
    .cart-item__price {
        margin-right: 2rem;
        margin-left: auto;

        font-size: 2rem;
        font-weight: 700;
        color: $black-color;
    }
}


</style>