<script>
  import DefaultPage from "./Default.vue";
  import Card from '../Molecules/Card.vue';
  import ProgressionBar from '../Molecules/ProgressionBar.vue';

  export default {
    name: 'HomePage',
    mixins: [DefaultPage],
    components: {
      DefaultPage,
      Card,
      ProgressionBar,
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
      <Card>
        <template v-slot:content>
          <ProgressionBar />
        </template>
      </Card>
    </template>
  </default-page>
</template>