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
    </main>
</template>

  
  <script setup>
import { store } from '@/store/store.js';
import GoodCard from "@/components/GoodCard.vue";
import { arrayOfRests } from '@/constants/rests';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { arrayOfGoods } from "../constants/goods";

const router = useRouter();
const rest = ref({});
const cart = store.cart; // Массив для хранения товаров в корзине


// const toggleCart = () => {
//   isCartOpen.value = !isCartOpen.value;
// };


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


    // toggleCart(); // Добавьте эту строку
    // console.log(cart);




</script>

  
<style>
    .restaraunt__info--goods {
    justify-content: flex-start;
    align-items: center;
    gap: 3rem;

    margin-bottom: 4rem;

}

.restaraunt__title--goods {
    font-size: 3.6rem;
}

.goods {
    display: flex;
    justify-content: center;
    gap: 1.4rem;

    flex-wrap: wrap;

    padding-bottom: 11.2rem;
}

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
</style>