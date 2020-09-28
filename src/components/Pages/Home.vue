<script>
  import DefaultPage from "./Default.vue";
  import Card from '../Molecules/Card.vue';
  import ProgressionCard from '../Molecules/ProgressionCard.vue';

  export default {
    name: 'HomePage',
    mixins: [DefaultPage],
    components: {
      DefaultPage,
      Card,
      ProgressionCard,
    },

    data() {
      return {};
    },
  };
</script>

<style>
  .home {
    background-color: var(--baseColor);
  }
</style>

<template>
  <default-page class="home">
    <template v-slot:main>
      <Card />
    </template>
    <template v-slot:aside>
      <ProgressionCard />
    </template>
  </default-page>
</template>