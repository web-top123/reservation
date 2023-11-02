<template>
  <div>
    <base-nav
      v-model="showMenu"
      type="light"
      :transparent="true"
      class=""
      expand="lg"
    >
      <section id="books" class="th-bg-color">
        <div class="book-slider container-fluid">
          <div class="d-flex">
            <div class="book">
              <h5>Step 1</h5>
              <span>Main info</span>
            </div>
            <div class="book book-active">
              <h5>Step 2</h5>
              <span>Booking info</span>
            </div>
            <div class="book">
              <h5>Step 3</h5>
              <span>Declaration</span>
            </div>
            <div class="book">
              <h5>Step 4</h5>
              <span>Dangerous goods</span>
            </div>
            <div class="book">
              <h5>Step 5</h5>
              <span>Seat map</span>
            </div>
            <div class="book">
              <h5>Step 6</h5>
              <span>Confirmation</span>
            </div>
          </div>
        </div>
      </section>
    </base-nav>
    <section id="welcome" class="section-p-100 section-gray-bg">
      <div class="container">
        <div class="row title-section">
          <div class="col">
            <h1 v-if="this.passengerInfo.passenger" class="fah">
              Welcome, {{ this.passengerInfo.passenger.first_name }}
            </h1>
            <h4>Please confirm your booking information</h4>
          </div>
        </div>
        <div class="row" style="background: white">
          <div class="col-md-12" style="padding-top: 0px">
            <div class="open-check-header">
              <div
                class="
                  d-flex
                  justify-content-md-between
                  flex-column flex-md-row
                  row
                "
              >
                <div
                  class="title-header header-1 th-active-bg col-sm-12 col-md-6"
                  v-if="this.passengerInfo.aircraft_flight"
                >
                  {{
                    this.passengerInfo.aircraft_flight.flight.origin_airport_name.toUpperCase()
                  }}
                  <i
                    >({{
                      this.passengerInfo.aircraft_flight.flight
                        .origin_airport_code
                    }})</i
                  >
                  —
                  {{
                    this.passengerInfo.aircraft_flight.flight.destination_airport_name.toUpperCase()
                  }}
                  <i
                    >({{
                      this.passengerInfo.aircraft_flight.flight
                        .destination_airport_code
                    }})</i
                  >
                </div>
                <div
                  class="
                    title-header
                    header-2
                    th-active-bg
                    d-flex
                    col-12 col-md-6
                  "
                >
                  <div class="row">
                    <div
                      v-if="this.passengerInfo.aircraft_flight"
                      class="col-6 ptb-0"
                    >
                      <span class="sm-title th-gray-color">Date</span>
                      <span class="sm-content">{{
                        formatDate(passengerInfo.aircraft_flight.date)
                      }}</span>
                    </div>
                    <div
                      v-if="this.passengerInfo.aircraft_flight"
                      class="col-6 ptb-0"
                    >
                      <span class="sm-title th-gray-color">Flight number</span>
                      <span class="sm-content">{{
                        this.passengerInfo.aircraft_flight.flight.airline_code
                      }}{{
                        this.passengerInfo.aircraft_flight.flight.flight_number
                      }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="plan-wrapper">
                <div
                  class="
                    d-flex
                    justify-content-md-between
                    flex-column flex-md-row
                    row
                  "
                >
                  <div
                    class="welcome-check-content first-field col-sm-12 col-md-6"
                  >
                    <div class="plan-first-field">
                      <div
                        class="d-flex align-items-center mt-5"
                        v-if="this.passengerInfo.aircraft_flight"
                      >
                        <span class="time-set">{{
                          this.passengerInfo.aircraft_flight.flight
                            .departure_time
                        }}</span
                        ><span class="time-unit">{{
                          this.passengerInfo.aircraft_flight.flight
                            .origin_airport_code
                        }}</span>
                        <div style="position: relative">
                          <p class="delay-time th-gray-color">
                            {{
                              this.passengerInfo.aircraft_flight.flight
                                .flight_time | fomartHours | formatMinutes
                            }}
                          </p>
                          <div>
                            <span class="time-dash"
                              ><i class="fa fa-circle th-color"></i
                            ></span>
                          </div>
                        </div>
                        <img src="img/theme/plan.png" />
                        <span class="time-set">{{
                          this.passengerInfo.aircraft_flight.flight
                            .departure_time
                        }}</span
                        ><span class="time-unit">{{
                          this.passengerInfo.aircraft_flight.flight
                            .destination_airport_code
                        }}</span>
                      </div>
                    </div>
                  </div>
                  <div
                    class="
                      welcome-check-content
                      d-flex
                      align-items-start
                      col-sm-12 col-md-6
                    "
                    v-if="this.passengerInfo.passenger"
                  >
                    <div class="row">
                      <div class="plan-adult col-sm-12 col-md-6">
                        <p class="th-gray-color">Adult</p>
                        <h4>
                          {{ this.passengerInfo.passenger.first_name }}
                          {{ this.passengerInfo.passenger.last_name }}
                        </h4>
                      </div>
                      <div class="plan-status col-sm-12 col-md-6">
                        <p class="th-gray-color">Status</p>
                        <button class="sm-btn btn-bg-green">
                          {{ this.passengerInfo.status }} in
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="check-content-btns" style="margin-top: 70px">
          <div class="d-flex flex-sm-row flex-column">
            <router-link
              to="/login"
              class="section-gray-bg hbtn"
              style="margin-right: 30px"
              >BACK</router-link
            >
            <button class="hbtn th-bg-color" @click="continuePage()">
              CONFIRM
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { Select, Option } from "element-ui";
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  page: {
    title: "Booking Info",
    meta: [{ name: "description", content: "" }],
  },
  components: {
    [Select.name]: Select,
    [Option.name]: Option,
  },
  data() {
    return {
      routines: [],
      selected: true,
      selectedData: null,
    };
  },
  computed: {
    ...mapGetters(["passengerInfo", "currentPassenger"]),
  },
  mounted() {
    this.initCheckin(this.currentPassenger.book_reference);
  },
  methods: {
    ...mapActions(["initCheckin", "emailBoardingPass", "getQrCode"]),
    formatDate(d) {
      var date = new Date(d);
      var monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      var day = date.getDate();
      var monthIndex = date.getMonth();
      var year = date.getFullYear();

      return day + " " + monthNames[monthIndex] + " " + year;
    },
    continuePage() {
      this.$router.push({ name: "Declaration" });
    },
  },
  filters: {
    fomartHours: function(value) {
      return value.replace(" hours", "h");
    },
    formatMinutes: function(value) {
      return value.replace(" minutes", "m");
    }
  }
};
</script>
<style lang="scss">
@media (max-width: 1008px) {
  .step1 {
    display: block;
  }
  .step2 {
    display: block;
  }
  .step3 {
    display: block;
  }
  .step4 {
    display: none;
  }
  .step5 {
    display: none;
  }
  .step6 {
    display: none;
  }
}
</style>
