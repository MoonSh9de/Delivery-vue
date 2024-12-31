<template>
    <main class="main">
        <section class="container">
            <div class="goods__restaraunt">
                <h1 class="goods__restaraunt--title">{{ rest.title }}</h1>
                <div class="goods__raiting">
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
    </main>
</template>

  
  <script setup>
import GoodCard from "@/components/GoodCard.vue";
import { arrayOfRests } from '@/constants/rests';
import { store } from '@/store/store.js';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { arrayOfGoods } from "../constants/goods";

const router = useRouter();
const rest = ref({});
const cart = store.cart; // Массив для хранения товаров в корзине


onMounted(() => {
    const id = router.currentRoute.value.query.id;
    const currentRest = arrayOfRests.find((rest) => rest.id === parseInt(id));
    rest.value = currentRest;
});

const addToCart = (good) => {
    const existingItem = cart.find(item => item.id === good.id);
    if (existingItem) {
        existingItem.count++;
    } else {
        cart.push({ ...good, count: 1 });
    }
    store.updateCart(cart);
};
</script>

  
<style lang="scss">
.goods__restaraunt {
    display: flex;
    justify-content: space-between;
    justify-content: flex-start;
    align-items: center;
    gap: 3rem;

    margin-bottom: 4rem;

    .goods__restaraunt--title {
        font-size: 3.6rem;
    }
    
    .goods__raiting {
        display: flex;
        margin-top: 0.5rem;
    }
}
.goods {
    display: flex;
    justify-content: center;
    gap: 1.4rem;

    flex-wrap: wrap;

    padding-bottom: 11.2rem;
}

</style>