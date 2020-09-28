import { actions, mutations } from "./types";

export default {
  [actions.NEXT_STEP]({ commit, state }) {
    const payload = state.currentStep === 5
      ? state.currentStep
      : state.currentStep + 1;
    commit(mutations.MUTATE_STEP, payload);
  },

 [actions.PREVIOUS_STEP]({ commit, state }) {
   const payload = state.currentStep === 1
    ? state.currentStep
    : state.currentStep - 1;

   commit(mutations.MUTATE_STEP, payload);
 },
}