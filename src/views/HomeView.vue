
<template>
     <!--Main-->
        <main class="main">
            <div class="container">
                <section class="main__promo">
                    <div class="promo__about">
                        <h1 class="main__header">Онлайн-сервис<br> доставки еды на дом</h1>
                        <p class="main__text">Блюда из любимого ресторана привезет курьер в перчатках, маске и с антисептиком</p>
                    </div>
                </section>

                <section class="delivery">
                    <div class="delivery__about">
                        <h2 class="delivery__title">Рестораны</h2>
                        <form class="search__form" action="">
                            <a class="search__link" href=""><img src="../assets/images/other/search.svg" alt=""></a>
                            <input class="search__input" type="text" placeholder="Поиск блюд и ресторанов">
                        </form>
                    </div>

                    <div class="delivery__restaraunts" id="rests">
                        <!-- restaraunt -->
                        <router-link
                        class="restaraunt"
                        v-for="rest in store.rests"
                        :key="rest.id"
                        :to= "`/rest?id=${rest.id}`"
                        >
                            <div>
                                <img class="restaraunt__image" :src="getUrl(rest.img)" alt="">
                            </div>
                            <div class="restaraunt__about">
                                <div class="restaraunt__info">
                                    <h3 class="restaraunt__title">{{rest.title}}</h3>
                                    <p class="info-black time">{{rest.time}} мин</p>
                                </div>
                                <div class="raiting">
                                    <img class="star_img" src="../assets/images/other/star.svg" alt="">
                                    <p class="rank">{{rest.rank}}</p>
                                    <p class="price">От<span class="cost">{{rest.cost}}</span>₽<img class="dot" src="../assets/images/other/dot.svg" alt=""><span class="dish">{{rest.dish}}</span></p>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </section>
            </div>

        </main>
</template>

<script setup>
import { store } from '../store/index';
const getUrl = (name) => new URL(`../assets/images/rests/${name}`, import.meta.url);

</script>
