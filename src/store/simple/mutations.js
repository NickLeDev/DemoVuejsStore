import { mutations } from './types';

export default {
 [mutations.MUTATE_STEP](state, payload) {
   state.currentStep = payload;
 },
};