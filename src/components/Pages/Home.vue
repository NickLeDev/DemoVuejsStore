<script>
import { mapState } from 'vuex';
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

    computed: {
      ...mapState('simple', {
        storeCurrentStep: state => state.currentStep,
      }),
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
      <Card
          v-if="storeCurrentStep === 2"
      >
        <template v-slot:content>
          Deuxième étape
        </template>
      </Card>
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