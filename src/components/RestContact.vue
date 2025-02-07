<template>
  <div class="contact">
    <h3 class="contact__rest">{{ contactOfRest.name }}</h3>

    <ul class="contact__info">
      <li v-for="(location, index) in contactOfRest.locations" :key="index">
        <address class="contact__address">
          {{ location.address }}
        </address>
        <a :href="'tel:' + location.phone" class="contact__phone">
          {{ location.phone }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  contactOfRest: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss"></style>
