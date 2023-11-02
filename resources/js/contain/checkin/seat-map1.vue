<template>
<div>
  <base-nav
      v-model="showMenu"
      type="light"
      :transparent="true"
      class="navbar-horizontal navbar-main tabs-nav d-flex" expand="lg">
        <b-navbar-nav class="bg-white text-center" style="overflow: hidden;">
            <b-nav-item class="nav-tab step1 ">
              <span class="nav-link-inner--text text-dark"><h4>Step 1</h4>Main Info</span>
            </b-nav-item>
            <b-nav-item class="nav-tab step2 ">
              <span class="nav-link-inner--text text-dark"><h4>Step 2</h4> Booking Info</span>
            </b-nav-item>
            <b-nav-item class="nav-tab step3 ">
              <span class="nav-link-inner--text text-dark"><h4>Step 3</h4>Declaration</span>
            </b-nav-item>
            <b-nav-item class="nav-tab step4 ">
              <span class="nav-link-inner--text text-dark"><h4>Step 4</h4>Dangerous goods</span>
            </b-nav-item>
            <b-nav-item class="nav-tab step5 active">
              <span class="nav-link-inner--text text-dark"><h4>Step 5</h4>Seat map</span>
            </b-nav-item>
            <b-nav-item class="nav-tab step6 ">
              <span class="nav-link-inner--text text-dark"><h4>Step 6</h4>Confirmation</span>
            </b-nav-item>
         </b-navbar-nav>
     </base-nav>
    <div class="container" style="max-width:80%; padding:40px;">
      <div class="row"> 
          <div class="col-md-7 col-xs-12" style="padding-top: 7%;">
                <span>Step 5</span><br />
                <span class="title-text">Select your seat</span>
              <div class="mr-5" style="margin-top: 100px;">
                 <ul class="seat-config d-flex flex-column">
                    <li style="padding-bottom: 20px; padding-top:20px; border-bottom: solid 1px #dfdfdf">
                        <span class="seat available-seat"></span>
                        <span class="description">Available</span>
                        <span style="margin-left: 150px; font-size: 17px; color:black; ">{{this.emptySeat}}</span>
                    </li>
                    <li style="padding-bottom:20px; padding-top:20px; border-bottom: solid 1px #dfdfdf">
                        <span class="seat disabled-seat"></span>
                        <span class="description">Not Available</span>
                        <span style="margin-left: 150px; font-size: 17px; color:black; ">{{this.notEmptySeat}}</span>
                    </li>
                    <li style="padding-bottom:20px; padding-top:20px;">
                        <span class="seat reserved-seat"></span>
                        <span class="description">Your Seat:</span>
                        <span style="margin-left: 140px; font-size: 28px; color: rgb(255, 167, 4); ">{{this.passengerInfo.seat}}</span>
                    </li>
                 </ul>
              </div>
            <div class="pull-left mt-5 mb-5" style="width:90%;">
              <router-link to="/dangerous" class="btn base-button btn-secondary btn-md custom-btn" style="width:28%; border:solid 1px #000000;">BACK</router-link>
              <base-button size="md" class="bg-yellow custom-btn" style="width:32%; border:solid 1px #efa407;" @click="continuePage()">CONFIRM</base-button>
            </div>
        </div>
        <div class="col-md-5 col-xs-12 pull-right" style=" padding-right: 14%; padding-top: 7%;">
          <div style="border: 1px solid #bdbdbdbf; height:600px; width: 500px; overflow-y: scroll"> 
             <b-card-group>
               <card body-classes="px-md-4 px-lg-5"
                    class="border-0" style="background-color:#eaeaea6e">
                 <div class="plane" style= "border-top-left-radius: 2em 10em;border-top-right-radius: 2em 10em;">
                   <ol class="cabin fuselage">
                     <div style= " margin-top: 120px; ">
                       <li class="row" v-for="i in 20" :key="i" >
                         <ol class="seats" type="A">
                              <li class="seat">
                                <input type="checkbox" v-model="seats[i+'A']" :id="i+'A'" v-on:click="handleSeat" />
                                <label :for="i+'A'">A</label>
                              </li>
                              <li class="seat">
                                <input type="checkbox" v-model="seats[i+'B']" :id="i+'B'" v-on:click="handleSeat" />
                                <label :for="i+'B'">B</label>
                              </li>
                              <li>
                                <label :for="i" style="padding: 10px 15px;">{{toDefaultNumber(i)}}</label>
                              </li>
                              <li class="seat">
                                <input type="checkbox" v-model="seats[i+'C']" :id="i+'C'" v-on:click="handleSeat" />
                                <label :for="i+'C'">C</label>
                              </li>
                              <li class="seat">
                                <input type="checkbox" v-model="seats[i+'D']" :id="i+'D'" v-on:click="handleSeat" />
                                <label :for="i+'D'">D</label>
                              </li>
                              <li class="seat">
                                <input type="checkbox" v-model="seats[i+'E']" :id="i+'E'" v-on:click="handleSeat" />
                                <label :for="i+'E'">E</label>
                              </li>
                          </ol>
                       </li>
                     </div>
                   </ol>
                </div>
              </card>
            </b-card-group>
         </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
  import BaseTable from '@/components/BaseTable';
  import BaseButton from '@/components/BaseButton.vue';

  import {mapActions, mapGetters} from 'vuex'

  export default {
    page: {
      title: "Select Seat",
      meta: [{ name: "description", content: "" }]
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
        notEmptySeat: 0
      }
    },
    watch: {
      passengerInfo: function() {
        this.flightTableData.push(this.passengerInfo);
        this.getFlightPassengers(this.passengerInfo.aircraft_flight_id);
      },
      flightPassengers: function() {
        this.seats = [];
        var that = this;
        let notEmptySeat = 0
        this.flightPassengers.forEach(function(item, index) {
          if ((item.seat != null) && (item.seat != '')) {
            if (item.id == that.passengerInfo.id) {
              that.seats[item.seat] = true
              notEmptySeat += 1
            } else {
              document.getElementById(item.seat).disabled = true
            }
          }
        });
        console.log('not empty', notEmptySeat)
        this.emptySeat = 100 - notEmptySeat
        this.notEmptySeat = notEmptySeat
      },
    },
    computed: {
      ...mapGetters([
        'passengerInfo',
        'currentPassenger',
        'flightPassengers',
      ]),
    },
    mounted() {
      this.initCheckin(this.currentPassenger.book_reference);
    },
    methods: {
      ...mapActions([
        'initCheckin',
        'getFlightPassengers',
        'passengerSeatSave',
      ]),

      handleSeat() {
        /* console.log('handle click') */
        let notEmptySeat = 0
        for (const [key, value] of Object.entries(this.seats)) {
          if (value == true) {
            notEmptySeat += 1
          }
        }
        this.notEmptySeat = notEmptySeat
        this.emptySeat = 100 - notEmptySeat
      },
      toDefaultNumber(i){
        // console.log(this.passengerInfo);
        if(i < 10)
          return "0" + i;
        else return i;
      },
      continuePage() {
        let passenger_seats = [];
        for (const [key, value] of Object.entries(this.seats)) {
          if (value == true) {
            passenger_seats.push(key)
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
                   message: 'Successfully Saved',
                   timeout: 5000,
                   icon: 'ni ni-bell-55',
                   type: 'success'
                 });
              this.$router.push({name: "Confirm"});
            })
            .catch((error) => {
            })
        } else {
          // console.log(passenger_seats)
          this.$notify({
              message: 'You can select only one seat.',
              timeout: 5000,
              icon: 'ni ni-bell-55',
              type: 'warning'
            });
        }
      },
    },
  };
</script>
<style lang="scss">

@media (min-width: 1008px) {
    .step1{
      display: block;
    }
    .step2{
      display: block;
    }
    .step3{
      display: block;
    }
  }
  @media (max-width: 1008px) {
   .step1 {
      display: none;
    }
     .step2 {
      display: none;
    }
     .step3{
      display: none;
    }
 }
  .mb-5 {
    margin-bottom: 7rem !important;
  }
 .mt-5 {
    margin-top:10rem !important;
  }

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
  .plane{
     background-color: white;
   }
  .plane .seat input[type=checkbox]:checked + label {
    background: rgb(239, 164, 7);
    color:white;
    -webkit-animation-name: rubberBand;
    animation-name: rubberBand;
    -webkit-animation-duration: 300ms;
    animation-duration: 300ms;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  .plane .seat input[type=checkbox]:disabled + label {
      background:#e7eef3;
      overflow: hidden;
  }
  .plane .seat label {
    display: block;
      position: relative;
      width: 100%;
      height: 100%;
      text-align: center;
      font-size: 16px;
      font-weight: normal;
      line-height: 1.5rem;
      padding: 5px 0;
      background: #fff0f0;
      color: rgb(255, 167, 4);
      border-radius: 0px;
  }
  .plane .fuselage {
      margin-top: -40px;
      margin-bottom: -50px;
      padding: 10px;
      border-right: none;
      border-left: none;
  }
  .plane .row {
      margin-right: 0px;
      margin-left: 0px;
      padding: 4px;
  }
</style>
