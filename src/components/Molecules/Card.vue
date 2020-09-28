<script>
import { mapState, mapActions } from 'vuex';
import { actions } from '../../store/simple/types';

export default {
  name: 'Card',
  data() {
    return {
      count: 3,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in rutrum risus. In ut mattis turpis. Cras porttitor quis magna sit amet pretium. In maximus at justo sit amet commodo. Morbi vitae lacinia sem, id suscipit justo.',
    };
  },

  computed: {
    ...mapState('simple', {
      storeCurrentStep: state => state.currentStep,
    }),
  },

  methods: {
    ...mapActions('simple', {
      storeNextStep: actions.NEXT_STEP,
      storePreviousStep: actions.PREVIOUS_STEP,
    }),
  },
}
</script>

<style lang="scss">
  .card {
    --size: 300px;
    --radius: 50px;

    align-items: center;
    background: linear-gradient(var(--angle),var(--firstGradientColor),var(--secondGradientColor));
    border-radius: var(--radius);
    box-shadow: var(--positionX) var(--positionY) var(--blur) var(--darkColor),var(--positionXOpposite) var(--positionYOpposite) var(--blur) var(--lightColor);
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    text-align: center;
    width: var(--size);
    height: var(--size);
    transition: background 0.2s;
  }

  .card__count {
    font-size: 4rem;
    font-weight: bold;
  }

  .card__title {
    font-size: 3rem;
    font-weight: 500;
  }

  .card__button {
    margin-top: 20px;
    padding: 10px;
    width: 100%;
  }
</style>

<template>
  <div class="card">
    <slot name="content">
      <div class="card__count">
        {{ storeCurrentStep }}
      </div>
      <div class="card__text">
        {{ text }}
      </div>

      <button
          class="card__button"
          @click="storeNextStep">
        Prochain step
      </button>
      <button
          class="card__button"
          @click="storePreviousStep">
        Step précédent
      </button>
    </slot>
  </div>
</template>
