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
