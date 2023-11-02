import type from './type'

const mutations = {
  [type.SET_ALL_FLIGHTS] (state, data) {
    state.flights = data.flights;
  },
  [type.SET_FLIGHT] (state, data) {
    state.flight = data.flight;
  },
  [type.SET_AIRCRAFT_CHECK_FLIGHT] (state, data) {
    state.aircraft_check_flight = data.aircraft_check_flight;
  },
};
export default mutations;