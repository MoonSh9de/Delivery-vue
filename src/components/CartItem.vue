<template>
    <div class="cart-item">
        <h3 class="cart_item__title">{{item.title}}</h3>
        <p class="cart-item__price">{{item.price}} ₽</p>
        <div class="cart-item__controls">
            <button @click="decrementItem(item)">-</button>
            <p class="cart-item__control--count">{{item.count}}</p>
            <button @click="incrementItem(item)">+</button>
        </div>
    </div>
</template>


<script>
export default {
    name: 'CartItem',
    props: {
        item: {
            type: Object,
            required: true
        },
        index: Number
    },
    emits: ['decrement', 'increment'],
    methods: {
        decrement() {
            this.$emit('decrement', this.index);
        },
        increment() {
            this.$emit('increment', this.index);
        }
    }
}
</script>
