<template>
    <div class="cart-item">
        <h3 class="cart_item__title">Ролл угорь стандарт</h3>
        <p class="cart-item__price">250 ₽</p>
        <div class="cart-item__controls">
            <button>-</button>
            <p class="cart-item__control--count">1</p>
            <button>+</button>
        </div>
    </div>
</template>


<script>
export default {
    name: 'CartItem',
    props: {
        item: {
            
        }
    }
}

</script>