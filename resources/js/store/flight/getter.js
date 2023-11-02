const getters = {
    flights(state) {
        return state.flights;
    },
    flight(state) {
        return state.flight;
    },
    aircraftCheckFlight(state) {
        return state.aircraft_check_flight
    },
  };
  
  export default getters;