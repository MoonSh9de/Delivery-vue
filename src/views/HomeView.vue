
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
                        <h2 class="title delivery__title">Рестораны</h2>
                        <form class="search__form" action="">
                            <img class="search__img" src="../assets/images/other/search.svg" alt="">
                            <input class="search__input" type="text" placeholder="Поиск блюд и ресторанов">
                        </form>
                    </div>

                    <div class="delivery__restaraunts" id="rests">
                       <RestCard
                        v-for="rest in arrayOfRests"
                        :rest ="rest"
                        :key="rest.id"
                       />
                    </div>
                </section>
            </div>

        </main>
</template>

<script setup>
import RestCard from '@/components/RestCard.vue';
import { arrayOfRests } from '@/constants/rests';

</script>

<style>
.main__promo {
    width: 100%;
    height: 100%;
    padding:  6.8rem 7.1rem;
    margin-bottom: 5.6rem;

    background-image: url("../assets/images/other/promo.jpeg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    color: #302C34;
    font-weight: 400;
}
.promo__about {
    max-width: 53rem;
}
.main__header {
    margin-bottom: 1.5rem;  

    font-size: 3.9rem;
    font-weight: 700;
    line-height: 4.6rem;
    text-align: left;
}
.main__text {
    font-size: 2.4rem;
    line-height: 2.8rem;
}

.delivery__about {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;

    margin-bottom: 4.4rem;
}

.search__form {
    position: relative;
}

.search__input {
    width: 30rem;
    padding: 0.5rem 1.2rem 0.5rem 3.2rem;

    border: 1px solid rgb(217, 217, 217);
    border-radius: 2px;
    font-size: 1.6rem;

    outline: none;
}

.search__input::placeholder {
    color: #bfbfbf;
}

.search__img {
    position: absolute;
    top: 0.7rem;
    left: 1rem;
    z-index: 1;
}

/*restaraunt*/
.delivery__restaraunts {
    display: flex;
    justify-content: center;
    gap: 1.3rem;
    flex-wrap: wrap;
    padding-bottom: 6rem;
    text-decoration: none;
}

.restaraunt {
    max-width: 38.4rem;
    height: 38rem;

    border-radius: 0.7rem;
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.05);

    text-decoration: none;
    color: #000000;

    cursor: pointer;
    transition: all 0.2s linear;
}
.restaraunt:hover {
    transform: scale(1.05);
}

.restaraunt__image {
    width: 100%;
    height: 25rem;

    margin-bottom: 2rem;
}
.restaraunt__about {
    padding: 0 2.4rem 3.5rem;
}
.restaraunt__info {
    display: flex;
    justify-content: space-between;

    margin-bottom: 1rem;
}
.restaraunt__title {
    font-size: 2.4rem;
    font-weight: 700;

}
.info-black {
    display: flex;
    align-items: center;
    padding: 0.1rem 0.8rem;

    background-color: #000;
    border-radius: 0.2rem;


    color: #fff;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 400;
}
.raiting {
    display: flex;
 
}

.rank {
    margin: 0 2.6rem 0 0.75rem;
    font-size: 1.8rem;
    color: #FFC107;
}
.price {
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    color: #8C8C8C;
}
.dot {
    margin: 0 1rem;
}

.cost {
    margin-left: 0.5rem;
}
.star_img {
    margin-bottom: 0.3rem;
}
</style>
