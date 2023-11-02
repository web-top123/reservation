<template>
  <div>
    <notifications></notifications>
    <base-nav type="light" :transparent="true" class="">
      <section id="books" class="th-bg-color">
        <div class="book-slider container-fluid">
          <div class="d-flex">
            <div class="book">
              <h5>Step 1</h5>
              <span>Main info</span>
            </div>
            <div class="book">
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
            <div class="book book-active">
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
    <section id="check-in" class="section-gray-bg">
      <div class="container seat-section-wrapper">
        <div class="row">
          <div class="col mobile-view seat-content-5">
            <H1 class="fah">Select your seat</H1>
            <div class="d-flex justify-content-between">
              <div class="d-flex align-items-center">
                <i class="available"></i>
                <div>
                  <span class="sm-title">Available</span>
                  <p class="count mb-0">{{ this.emptySeat }}</p>
                </div>
              </div>
              <div class="d-flex align-items-center">
                <i class="not-available"></i>
                <div>
                  <span class="sm-title">Not available</span>
                  <p class="count mb-0">{{ this.notEmptySeat }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 seat-content-5 desk-view">
            <H1>Select your seat</H1>
            <div class="seat-sum">
              <div class="d-flex justify-content-between">
                <div class="d-flex align-items-center">
                  <i class="available"></i
                  ><span class="sm-title">Available</span>
                </div>
                <span class="count">{{ this.emptySeat }}</span>
              </div>
              <div class="d-flex justify-content-between">
                <div class="d-flex align-items-center">
                  <i class="not-available"></i
                  ><span class="sm-title">Not available</span>
                </div>
                <span class="count">{{ this.notEmptySeat }}</span>
              </div>
              <div class="d-flex justify-content-between">
                <div class="d-flex align-items-center">
                  <i class="sum-seat"></i
                  ><span class="sm-title">Your seat:</span>
                </div>
                <span class="some-count th-color">{{
                  this.passengerSeat
                }}</span>
              </div>
            </div>
            <div class="check-content-btns" style="margin-top: 190px">
              <div class="d-flex flex-sm-row flex-column">
                <router-link
                  to="/dangerous"
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
          <div
            class="col-md-6 seat-img-wrapper-5 d-flex justify-content-center"
          >
            <div class="plan-content">
              <img src="img/theme/plane.png" />
              <div class="seat-form-img d-flex">
                <div class="img-plane-content plane">
                  <div
                    class="
                      lines
                      d-flex
                      justify-content-around
                      align-items-center
                    "
                    v-for="i in 20"
                    :key="i"
                  >
                    <li class="seat">
                      <input
                        type="checkbox"
                        v-model="seats[i + 'A']"
                        :id="i + 'A'"
                        @change="handleSeat(i + 'A')"
                      />
                      <label :for="i + 'A'">A</label>
                    </li>
                    <li class="seat">
                      <input
                        type="checkbox"
                        v-model="seats[i + 'B']"
                        :id="i + 'B'"
                        @change="handleSeat(i + 'B')"
                      />
                      <label :for="i + 'B'">B</label>
                    </li>
                    <i>
                      <label :for="i" style="padding: 10px 15px">{{
                        toDefaultNumber(i)
                      }}</label>
                    </i>
                    <li class="seat">
                      <input
                        type="checkbox"
                        v-model="seats[i + 'C']"
                        :id="i + 'C'"
                        @change="handleSeat(i + 'C')"
                      />
                      <label :for="i + 'C'">C</label>
                    </li>
                    <li class="seat">
                      <input
                        type="checkbox"
                        v-model="seats[i + 'D']"
                        :id="i + 'D'"
                        @change="handleSeat(i + 'D')"
                      />
                      <label :for="i + 'D'">D</label>
                    </li>
                    <li class="seat">
                      <input
                        type="checkbox"
                        v-model="seats[i + 'E']"
                        :id="i + 'E'"
                        @change="handleSeat(i + 'E')"
                      />
                      <label :for="i + 'E'">E</label>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col mobile-view mt-4 seat-content-5">
            <div class="d-flex justify-content-between">
              <div class="d-flex align-items-center">
                <i class="sum-seat"></i><span class="sm-title">Your seat:</span>
              </div>
              <span class="some-count th-color">{{ this.passengerSeat }}</span>
            </div>
            <div class="check-content-btns" style="margin-top: 70px">
              <div class="d-flex flex-sm-row flex-column">
                <router-link
                  to="/dangerous"
                  class="section-gray-bg hbtn"
                  style="margin-right: 30px"
                  >BACK</router-link
                >
                <button class="th-bg-color" @click="continuePage()">
                  CONFIRM
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import BaseTable from "@/components/BaseTable";
import BaseButton from "@/components/BaseButton.vue";

import { mapActions, mapGetters } from "vuex";

export default {
  page: {
    title: "Select Seat",
    meta: [{ name: "description", content: "" }],
  },
  components: {
    BaseTable,
    BaseButton,
  },
  data() {
    return {
      flightTableData: [],
      seats: [],
      emptySeat: 100,
      notEmptySeat: 0,
      passengerSeat: 0,
    };
  },
  watch: {
    passengerInfo: function () {
      this.flightTableData.push(this.passengerInfo);
      this.getFlightPassengers(this.passengerInfo.aircraft_flight_id);
      this.passengerSeat = this.passengerInfo.seat;
    },
    flightPassengers: function () {
      this.seats = [];
      var that = this;
      let notEmptySeat = 0;
      let yourSeat = 0;
      this.flightPassengers.forEach(function (item, index) {
        if (item.seat != null && item.seat != "") {
          if (item.id == that.passengerInfo.id) {
            that.seats[item.seat] = true;
            yourSeat += 1;
          } else {
            console.log("item diabled", item.seat);
            notEmptySeat += 1;
            document.getElementById(item.seat).disabled = true;
          }
        }
      });
      console.log("not empty", notEmptySeat);
      this.emptySeat = 100 - notEmptySeat - yourSeat;
      this.notEmptySeat = notEmptySeat;
      console.log("fight", this.seats);
    },
  },
  computed: {
    ...mapGetters(["passengerInfo", "currentPassenger", "flightPassengers"]),
  },
  mounted() {
    this.initCheckin(this.currentPassenger.book_reference);
  },
  methods: {
    ...mapActions(["initCheckin", "getFlightPassengers", "passengerSeatSave"]),

    handleSeat(seatID) {
      /* console.log('handle click') */
      let notEmptySeat = 0;

      this.passengerSeat = seatID;

      if (this.seats[seatID] == true) {
        for (const [key, value] of Object.entries(this.seats)) {
          this.seats[key] = false;
        }
        this.seats[seatID] = true;
        notEmptySeat += 1;
      } else {
        for (const [key, value] of Object.entries(this.seats)) {
          this.seats[key] = false;
        }
        notEmptySeat = 0;
        this.passengerSeat = "Not Assigned";
      }

      // //this.notEmptySeat += notEmptySeat;
      // console.log('notEmpty', notEmptySeat);
      this.emptySeat = 100 - this.notEmptySeat - notEmptySeat;
    },
    toDefaultNumber(i) {
      // console.log(this.passengerInfo);
      if (i < 10) return "0" + i;
      else return i;
    },
    continuePage() {
      let passenger_seats = [];
      for (const [key, value] of Object.entries(this.seats)) {
        if (value == true) {
          passenger_seats.push(key);
        }
      }
      if (passenger_seats.length == 1) {
        this.passengerSeatSave({
          passengerId: this.passengerInfo.passenger_id,
          flightId: this.passengerInfo.aircraft_flight_id,
          seat: passenger_seats[0],
          statusFlag: true,
        })
          .then((res) => {
            this.$notify({
              message: "Successfully Saved",
              timeout: 5000,
              icon: "ni ni-bell-55",
              type: "success",
            });
            this.$router.push({ name: "Confirm" });
          })
          .catch((error) => {});
      } else {
        // console.log(passenger_seats)
        this.$notify({
          message: "You can select only one seat.",
          timeout: 5000,
          icon: "ni ni-bell-55",
          type: "warning",
        });
      }
    },
  },
};
</script>
<style lang="scss">
@media (max-width: 1008px) {
  .step1 {
    display: none;
  }
  .step2 {
    display: none;
  }
  .step3 {
    display: none;
  }
  .step4 {
    display: block;
  }
  .step5 {
    display: block;
  }
  .step6 {
    display: block;
  }
}
// .mb-5 {
//   margin-bottom: 7rem !important;
// }
// .mt-5 {
//   margin-top: 10rem !important;
// }

.seat-config {
  list-style: none;
  padding: 0;
  margin: 0;
}
.seat-config li {
  display: flex;
  align-items: center;
}
.seat-config .seat {
  display: block;
  position: relative;
  width: 30px;
  height: 30px;
  padding: 4px 0;
  border-radius: 5px;
}
.seat-config .seat.available-seat {
  background: #fff0f0;
}
.seat-config .seat.reserved-seat {
  background: rgb(239, 164, 7);
}
.seat-config .seat.disabled-seat {
  background: #e7eef3;
}

.seat-config .description {
  padding-left: 15px;
  padding-right: 15px;
}
.plane .seat input[type="checkbox"]:checked + label {
  background: #00a4f2;
  color: white;
  -webkit-animation-name: rubberBand;
  animation-name: rubberBand;
  -webkit-animation-duration: 300ms;
  animation-duration: 300ms;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.plane .seat input[type="checkbox"]:disabled + label {
  background: #f6f6f6;
  overflow: hidden;
}
.plane .seat label {
  position: relative;
  font-size: 16px;
  font-weight: normal;
  padding: 5px 0;
  background: #fff0f0;
  border-radius: 0px;
  width: 46px;
  height: 46px;
  text-align: center;
  line-height: 1;
  vertical-align: middle;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e1e5e7;
  color: #44697d;
}
.plane i {
  font-style: normal;
  font-family: "Aktiv Grotesk Corp";
}
.plane .fuselage {
  margin-top: -40px;
  margin-bottom: -50px;
  padding: 10px;
  border-right: none !important;
  border-left: none !important;
}
.plane .row {
  margin-right: 0px;
  margin-left: 0px;
  padding: 4px;
}
</style>
