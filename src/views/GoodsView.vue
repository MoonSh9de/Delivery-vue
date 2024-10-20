<template>
    <main class="main">
        <section class="container">
            <div class="restaraunt__info restaraunt__info--goods" id="goodsTitle">
                <h1 class="restaraunt__title restaraunt__title--goods">{{ rest.title }}</h1>
                <div class="raiting">
                    <img class="star_img" src="../assets/images/other/star.svg" alt="">
                    <p class="rank">{{ rest.rank }}</p>
                    <p class="price">От<span class="cost">{{ rest.cost }}</span>₽<img class="dot" src="../assets/images/other/dot.svg" alt=""><span class="dish">{{ rest.dish }}</span></p>
                </div>
            </div>

            <section class="goods" id="goods">
                <!-- Good -->
                <GoodCard
                    v-for="good in arrayOfGoods"
                    :good="good"
                    :key="good.id"
                    @addToCart="addToCart"
                />
            </section>
        </section>
        <CartModal :cart="cart" :isOpen="isCartOpen" @toggleModal="toggleCart" />
    </main>
</template>

  
  <script setup>
import CartModal from "@/components/CartModal.vue";
import GoodCard from "@/components/GoodCard.vue";
import { arrayOfRests } from '@/constants/rests';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { arrayOfGoods } from "../constants/goods";

const router = useRouter();
const rest = ref({});
const cart = ref([]); // Массив для хранения товаров в корзине
const isCartOpen = ref(false);


const toggleCart = () => {
  isCartOpen.value = !isCartOpen.value;
};


onMounted(() => {
    const id = router.currentRoute.value.query.id;
    const currentRest = arrayOfRests.find((rest) => rest.id === parseInt(id));
    rest.value = currentRest;
});

const addToCart = (good) => {
    const existingItem = cart.value.find(item => item.id === good.id);
    if (existingItem) {
        existingItem.count++;
    } else {
        cart.value.push({ ...good, count: 1 });
    }
    toggleCart(); // Добавьте эту строку
    console.log(cart);
    
};



</script>

  
  <style>
  
  </style>