<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'ProgressionBar',
  data() {
    return {

    };
  },
  computed: {
    ...mapState('simple', {
      storeCurrentStep: state => state.currentStep,
    }),

    ...mapGetters('simple', ['getNumberOfSteps']),

    progress() {
      return ((this.storeCurrentStep / this.getNumberOfSteps) * 100) + '%';
    }
  },
}
</script>

<style>
.progression {
  width: 100%;
}

.progression__bar {
  border: 1px solid grey;
  height: 50px;
  position: relative;
  overflow: hidden;
  width: 100%;
}

.progression__bar__content {
  background-color: grey;
  height: 100%;
  left: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: width 1s;
  width: 0%;
}

.progression__steps {
  margin-top: 10px;
  text-align: right;
}
</style>

<template>
  <div class="progression">
    <div class="progression__bar">
      <div
          class="progression__bar__content"
          :style="{ width: [progress] }"
      ></div>
    </div>
    <div class="progression__steps">
      {{ storeCurrentStep }}/{{ getNumberOfSteps }} steps
    </div>
  </div>
</template>