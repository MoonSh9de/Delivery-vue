<template>
     <main class="main">
		<div class="container">
            <h1 class="title ">Контакты</h1>
            <section class="contacts">
                <div class="contact">
                    <!-- TODO! Links fo rests-->
                    <h3 class="contact__rest">Пицца плюс</h3>
                    <ul class="contact__info">
                        <address class="contact__address">г.Воронеж, Московский пр-кт, д. 22</address>
                        <a href="tel:+74873452211" class="contact__phone">+7(493)-395-28-51</a>
                    </ul>
                    <ul class="contact__info">
                        <address class="contact__address">г.Липецк, ул. Льва Толстого, д. 45</address>
                        <a href="tel:+74873452211" class="contact__phone">+7(904)-277-12-50</a>
                    </ul>
                    <ul class="contact__info">
                        <address class="contact__address">г.Тамбов, ул. Мичуринская, д. 122</address>
                        <a href="tel:+74873452211" class="contact__phone">+7(900)-111-78-20</a>
                    </ul>

                </div>
                <div class="contact">
                    <h3 class="contact__rest">Тануки</h3>
                    <ul class="contact__info">
                        <address class="contact__address">г.Белгород, ул. Мира, д. 9</address>
                        <a href="tel:+74873452211" class="contact__phone">+7(478)-519-45-10</a>
                    </ul>
                    <ul class="contact__info">
                        <address class="contact__address">г.Саратов, ул. Чижова, д. 45</address>
                        <a href="tel:+74873452211" class="contact__phone">+7(905)-119-67-40</a>
                    </ul>
                    <ul class="contact__info">
                        <address class="contact__address">г.Тамбов, ул. Механизаторов, д. 12</address>
                        <a href="tel:+74873452211" class="contact__phone">+7(413)-904-82-41</a>
                    </ul>
                    <ul class="contact__info">
                        <address class="contact__address">г.Рязань, ул. М. Горького, д. 67</address>
                        <a href="tel:+74873452211" class="contact__phone">+7(902)-992-92-67</a>
                    </ul>
                </div>
                <div class="contact">
                    <h3 class="contact__rest">FoodBand</h3>
                    <ul class="contact__info">
                        <address class="contact__address">г.Мичуринск, ул. Рязановский пр-кт, д. 88</address>
                        <a href="tel:+74873452211" class="contact__phone">+7(922)-169-92-49</a>
                    </ul>
                    <ul class="contact__info">
                        <address class="contact__address">г.Кирсанов, ул. Юбилейная, д. 47</address>
                        <a href="tel:+74873452211" class="contact__phone">+7(905)-133-41-15</a>
                    </ul>
                    <ul class="contact__info">
                        <address class="contact__address">г.Рязань, ул. М. Жукова, д. 2</address>
                        <a href="tel:+74873452211" class="contact__phone">+7(495)-962-02-94</a>
                    </ul>
                </div>
                <div class="contact">
                    <h3 class="contact__rest">Жадина-пицца</h3>
                    <ul class="contact__info">
                        <address class="contact__address">г.Воронеж, ул. Героев Сибяриков, д. 9</address>
                        <a href="tel:+74873452211" class="contact__phone">+7(990)-239-22-43</a>
                    </ul>
                    <ul class="contact__info">
                        <address class="contact__address">г.Белгород, ул. Валуева, д. 91</address>
                        <a href="tel:+74873452211" class="contact__phone">+7(988)-802-64-11</a>
                    </ul>
                    <ul class="contact__info">
                        <address class="contact__address">г.Тамбов, ул. Чичканова, д. 6</address>
                        <a href="tel:+74873452211" class="contact__phone">+7(902)-714-92-03</a>
                    </ul>
                </div>
                <div class="contact">
                    <h3 class="contact__rest">Точка еды</h3>
                    <ul class="contact__info">
                        <address class="contact__address">г.Воронеж, ул. Бульвар Победы, д. 53</address>
                        <a href="tel:+74873452211" class="contact__phone">+7(966)-107-13-48</a>
                    </ul>
                    <ul class="contact__info">
                        <address class="contact__address">г.Липецк, ул. Советская, д. 12</address>
                        <a href="tel:+74873452211" class="contact__phone">+7(905)-188-90-77</a>
                    </ul>
                </div>
                <div class="contact">
                    <h3 class="contact__rest">PizzaBurger</h3>
                    <ul class="contact__info">
                        <address class="contact__address">г.Воронеж, ул. Московский пр-кт, д. 129/1</address>
                        <a href="tel:+74873452211" class="contact__phone">+7(907)-702-79-35</a>
                    </ul>
                    <ul class="contact__info">
                        <address class="contact__address">г.Тамбов, ул. Карла Маркса, д. 55</address>
                        <a href="tel:+74873452211" class="contact__phone">+7(988)-310-11-03</a>
                    </ul>

                </div>
            </section>
        </div>
    </main>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      contactsOfRestaurants: [],
    };
  },
  created() {
    this.fetchContactsRests();
    this.printrests();
  },
  methods: {
    fetchContactsRests() {
      axios.get("../contacts-of-rests.json")
          .then((response) => {
            this.contactsOfRestaurants = JSON.parse(response.data);
          })
          .catch((error) => console.error("Ошибка при загрузке данных", error));
    },
    printrests() {
      console.log(this.contactsOfRestaurants);
    }
  }
};

      // contactsOfRestaurants: [
      //   {
      //     name: "Пицца Плюс",
      //
      //     Voronesh: {
      //       address: "г.Воронеж, Московский пр-кт, д. 22",
      //       phone: "+7(493)-395-28-51",
      //     },
      //
      //     Lipetsk: {
      //       address: "г.Липецк, ул. Льва Толстого, д. 45",
      //       phone: "+7(904)-277-12-50",
      //     },
      //
      //     Tambov: {
      //       address: "г.Тамбов, ул. Мичуринская, д. 122",
      //       phone: "+7(900)-111-78-20",
      //     }
      //   },
      //
      //   {
      //     name: "Тануки",
      //
      //     Belgorod: {
      //       address: "г.Белгород, ул. Мира, д. 9",
      //       phone: "+7(478)-519-45-10",
      //     },
      //
      //     Saratov: {
      //       address: "г.Саратов, ул. Чижова, д. 45",
      //       phone: "+7(905)-119-67-40",
      //     },
      //
      //     Tambov: {
      //       address: "г.Тамбов, ул. Механизаторов, д. 12",
      //       phone: "+7(413)-904-82-41",
      //     },
      //
      //     Ryazan: {
      //       address: "г.Рязань, ул. М. Горького, д. 67",
      //       phone: "+7(902)-992-92-67",
      //     }
      //   },
      //
      //   {
      //     name: "FoodBand",
      //     Michurinsk: {
      //       address: "г.Мичуринск, ул. Рязановский пр-кт, д. 88",
      //       phone: "+7(922)-169-92-49",
      //     },
      //
      //     Kirsanov: {
      //       address: "г.Кирсанов, ул. Юбилейная, д. 47",
      //       phone: "+7(905)-133-41-15",
      //     },
      //
      //     Ryazan: {
      //       address: "г.Рязань, ул. М. Жукова, д. 2",
      //       phone: "+7(495)-962-02-94",
      //     }
      //   },
      //
      //   {
      //     name: "Жадина-пицца",
      //     Voronesh: {
      //       address: "г.Воронеж, ул. Героев Сибяриков, д. 9",
      //       phone: "+7(990)-239-22-43",
      //     },
      //
      //     Belgorod: {
      //       address: "г.Белгород, ул. Валуева, д. 91",
      //       phone: "+7(988)-802-64-11",
      //     },
      //
      //     Tambov: {
      //       address: "г.Тамбов, ул. Чичканова, д. 6",
      //       phone: "+7(902)-714-92-03",
      //     }
      //   },
      //
      //   {
      //     name: "Точка еды",
      //     Voronesh: {
      //       address: "г.Воронеж, ул. Бульвар Победы, д. 53",
      //       phone: "+7(966)-107-13-48",
      //     },
      //
      //     Lipetsk: {
      //       address: "г.Липецк, ул. Советская, д. 12",
      //       phone: "+7(905)-188-90-77",
      //     },
      //   },
      //
      //   {
      //     name: "PizzaBurger",
      //     Voronesh: {
      //       address: "г.Воронеж, ул. Московский пр-кт, д. 129/1",
      //       phone: "+7(907)-702-79-35",
      //     },
      //
      //     Tambov: {
      //       address: "г.Тамбов, ул. Карла Маркса, д. 55",
      //       phone: "+7(988)-310-11-03",
      //     },
      //   },
      // ],

</script>

<style lang="scss">
.contacts {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    flex-wrap: wrap;

    margin-top: 2rem;
    padding: 2rem;

    border: 1px solid $gray-bg-color;
    border-bottom: none;

    .contact {
        width: 284px;

        .contact__rest {
            font-size: 2rem;
        }
        .contact__info {
            margin: 1.3rem 0;

            font-size: 1.3rem;
        }

        .contact__address {
            margin-bottom: 0.5rem;

            color: $blue-color;
            text-decoration: underline;
        }

        .contact__phone {
            color: $black-color;
            text-decoration: none;
            opacity: 0.7;
        }
    }

}


</style>