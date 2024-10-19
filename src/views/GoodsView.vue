<template>
          <main class="main">
            <section class="container">
                <div class="restaraunt__info restaraunt__info--goods" id = "goodsTitle">
                    <h1 class="restaraunt__title restaraunt__title--goods">Тануки</h1>
                    <div class="raiting">
                        <img class="star_img" src="../assets/images/other/star.svg" alt="">
                        <p class="rank">4.5</p>
                        <p class="price">От<span class="cost">900</span>₽<img class="dot" src="../assets/images/other/dot.svg" alt=""><span class="dish">Пицца</span></p>
                    </div>
                </div>

                <section class="goods" id="goods">
                    <!-- Good -->
                    <template>
                        <div
                        v-for="good in arrayOfGoods"
                        :key="good.id"
                        >
                            <GoodCard :good = "good" />
                        </div>
                    </template>
                </section>
            </section>
        </main>
</template>

<script setup>
    import GoodCard from "@/components/GoodCard.vue";
import { arrayOfGoods } from "../constants/goods";

</script>

<style>

</style>