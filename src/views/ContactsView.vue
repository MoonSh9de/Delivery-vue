<template>
  <main class="main">
    <div class="container">
      <h1 class="title">Контакты</h1>
      <section class="contacts">
        <RestContact
          v-for="contactOfRest in contactsOfRestaurants"
          :key="contactOfRest.name"
          :contactOfRest="contactOfRest"
        />
      </section>
    </div>
  </main>
</template>

<script>
import contactsData from '@/assets/jsons/contacts-of-rest.json';
import RestContact from '@/components/RestContact.vue';

export default {
  name: 'ContactsView',
  components: {
    RestContact,
  },
  data() {
    return {
      contactsOfRestaurants: [],
    };
  },
  methods: {
    handleContactsOfRestaurants() {
      this.contactsOfRestaurants = this.parsingJSONContactsOfRests();
    },
    parsingJSONContactsOfRests() {
      try {
        return JSON.parse(JSON.stringify(contactsData));
      } catch (error) {
        console.log('Ошибка при загрузке данных', error);
      }
    },
  },
  created() {
    this.parsingJSONContactsOfRests();
    this.handleContactsOfRestaurants();
  },
};
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
