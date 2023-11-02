import type from './type'

const mutations = {
  [type.SET_ALL_BAGAGGES] (state, data) {
    state.baggages = data.baggages;
  },
};
export default mutations;