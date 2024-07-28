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
                    <div
                    class="good"
                    v-for="good in arrayOfGoods"
                    :key="good.id"
                    >
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
                </section>
            </section>
        </main>
</template>

<script setup>
    import { arrayOfGoods } from "../constants/goods";
    const getUrl = (name) => new URL(`../assets/images/goods/${name}`, import.meta.url);
</script>

<style>

</style>