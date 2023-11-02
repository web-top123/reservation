<template>
  <div>
    <base-header class="pb-6">
      <b-row class="align-items-center py-4">
        <b-col lg="6" cols="7">
          <h6 class="h2 text-white d-inline-block mb-0">Edit Upcoming Flights</h6>
          <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
            <route-breadcrumb />
          </nav>
        </b-col>
      </b-row>
    </base-header>

    <b-container fluid class="mt--6">
      <b-row>
        <b-col lg="12">
          <div class="card-wrapper">
            <!-- Input groups -->
            <card>
              <!-- Card header -->
              <h3 slot="header" class="mb-0">Edit Upcoming Flights</h3>
              <!-- Card body -->
              <base-alert v-if="isError" dismissible type="danger">
                <strong>Failed!</strong> {{ error }}
              </base-alert>
              <validation-observer
                v-slot="{ handleSubmit }"
                ref="formValidator"
              >
                <b-form
                  role="form"
                  class="new-event--form row"
                  @submit.prevent="handleSubmit(onSubmit)"
                >
                  <div class="col-6">
                    <base-input
                      label="Date"
                      v-model="current_date"
                      disabled
                      input-classes="form-control-alternative new-event--title"
                    >
                    </base-input>
                  </div>
                  <div class="col-6">
                    <base-input label="Type">
                      <el-select
                        v-model="model.type"
                        filterable
                        placeholder="Scheduled Type"
                        @change="flightNoExist()"
                      >
                        <el-option
                          v-for="option in typeOptions"
                          :key="option.label"
                          :label="option.label"
                          :value="option.value"
                        >
                        </el-option>
                      </el-select>
                    </base-input>
                  </div>
                  <div class="col-6">
                    <base-input label="Aircraft">
                      <el-select
                        v-model="model.aircraft"
                        filterable
                        placeholder="Aircraft Registration"
                      >
                        <el-option
                          v-for="option in aircrafts"
                          v-if="option.status == 1"
                          :key="option.id"
                          :label="option.registration"
                          :value="option.id"
                        >
                        </el-option>
                      </el-select>
                    </base-input>
                  </div>
                  <div class="col-6">
                    <base-input label="Flight No.">
                      <el-select
                        v-model="model.flight"
                        filterable
                        placeholder="Flight"
                      >
                        <el-option
                          v-for="option in aircraftFlights"
                          v-if="option.flight.type == model.type"
                          :key="option.id"
                          :label="
                            option.flight.airline_code +
                            option.flight.flight_number
                          "
                          :value="option.flight_id"
                        >
                        </el-option>
                      </el-select>
                    </base-input>
                  </div>
                  <div class="col-6">
                    <base-input
                      alternative
                      label="Origin"
                      placeholder="Origin Airport"
                      name="Origin"
                      disabled
                      v-model="model.origin"
                    >
                    </base-input>
                  </div>
                  <div class="col-6">
                    <base-input
                      alternative
                      label="Destination"
                      placeholder="Destination Airport"
                      name="Destination"
                      disabled
                      v-model="model.destination"
                    >
                    </base-input>
                  </div>
                  <div class="col-6">
                    <base-input
                      append-icon="fas fa-plane-departure"
                      label="Departure"
                      name="Departure"
                      :rules="{ required: true }"
                    >
                      <flat-picker
                        slot-scope="{ focus, blur }"
                        @on-open="focus"
                        @on-close="blur"
                        :config="configs.timePicker"
                        class="form-control datepicker"
                        v-model="model.departure"
                      >
                      </flat-picker>
                    </base-input>
                  </div>
                  <div class="col-6">
                    <base-input
                      append-icon="fas fa-plane-arrival"
                      label="Arrival"
                      name="Arrival"
                      :rules="{ required: true }"
                    >
                      <flat-picker
                        slot-scope="{ focus, blur }"
                        @on-open="focus"
                        @on-close="blur"
                        :config="configs.timePicker"
                        class="form-control datepicker"
                        v-model="model.arrival"
                      >
                      </flat-picker>
                    </base-input>
                    
                  </div>
                  <div class="col-6">
                      <base-input label="Status">
                        <el-select
                          v-model="model.status"
                          filterable
                          placeholder="Status"
                        >
                          <el-option 
                            v-for="status in statusGroup"
                            :key="status"
                            :label="status"
                            :value="status"
                          >
                          </el-option>
                        </el-select>
                      </base-input>
                  </div>
                  <div class="col-6">
                    <base-input label="Phase">
                      <el-select
                        v-model="model.phase"
                        filterable
                        placeholder="Phase"
                      >
                        <el-option 
                            v-for="phase in phaseGroup"
                            :key="phase"
                            :label="phase"
                            :value="phase"
                          >
                        </el-option>
                      </el-select>
                    </base-input>
                  </div>
                  <div class="d-flex justify-content-between col-12 mt-4">
                    <router-link :to="{name: 'UpcomingFlights'}" class="btn btn-secondary">Cancel</router-link>
                    <b-button type="submit" :disabled="isSubmitting" variant="primary">
                      <i class="fa fa-spinner fa-spin" v-if="isSubmitting"></i> Update
                    </b-button>
                  </div>
                </b-form>
              </validation-observer>
            </card>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { Select, Option } from "element-ui";
import flatPicker from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import { mapActions, mapGetters } from "vuex";

const date = new Date();
const today = date.toDateString()

export default {
  page: {
    title: "Edit Flight",
    meta: [{ name: "description", content: "" }],
  },
  components: {
    [Select.name]: Select,
    [Option.name]: Option,
    flatPicker,
  },
  data() {
    return {
      current_date: today,
      typeOptions: [
        {
          label: "REGULAR",
          value: "REGULAR",
        },
        {
          label: "CHARTER",
          value: "CHARTER",
        },
      ],
      configs: {
        dateTimePicker: {
          enableTime: true,
          dateFormat: "Y-m-d H:i",
        },
        timePicker: {
          enableTime: true,
          noCalendar: true,
          dateFormat: "H:i",
          time_24hr: true,
        },
      },
      statusGroup: [
        'CONFIRMED', 'PLANNED'
      ],
      phaseGroup: [
        'OPEN', 'CLOSED'
      ],
      model: {
        type: '',
        aircraft: '',
        flight: '',
        origin: '',
        destination: '',
        departure: '',
        arrival: '',
        status: '',
        phase: ''
      },
      error: null,
      isError: false,
      isSubmitting: false,
    };
  },
  mounted() {
    this.getAircraftFlightsById(this.$route.params.aircraftFlightsId);
  },
  watch: {
    aircraftCheckFlight: function () {
      console.log(this.aircraftCheckFlight);
      this.model.type = this.aircraftCheckFlight.flight.type;
      this.model.aircraft = this.aircraftCheckFlight.aircraft == null?"": this.aircraftCheckFlight.aircraft.id;
      this.model.flight = this.aircraftCheckFlight.flight.id;
      this.model.origin = this.aircraftCheckFlight.flight.origin_airport_name;
      this.model.destination = this.aircraftCheckFlight.flight.destination_airport_name;
      this.model.departure = this.aircraftCheckFlight.departure_time;
      this.model.arrival = this.aircraftCheckFlight.arrival_time;
      this.model.status = this.aircraftCheckFlight.status;
      this.model.phase = this.aircraftCheckFlight.phase;
    },
  },
  computed: {
    ...mapGetters([
      "aircraftCheckFlight", 
      "aircrafts",
      'aircraftFlights',
      ]),
  },
  methods: {
    ...mapActions([
      "getAircraftFlightsById", 
      "getFlightById",
      "updateCheckInFlight"
      ]),
    flightNoExist() {
      if(!this.aircraftFlights.some(element => {element.flight.type == this.model.type})){
          this.model.flight="";
      };
    },
    onSubmit() {
      // this will be called only after form is valid. You can do an api call here to register flights
      // Reset the error if it existed.
      this.error = null;
      this.isSubmitting = true;
      return this.updateCheckInFlight({
        id: this.$route.params.aircraftFlightsId,
        type: this.model.type,
        aircraft: this.model.aircraft,
        flight: this.model.flight,
        origin_airport_name: this.model.origin,
        destination_airport_name: this.model.destination,
        departure_time: this.model.departure,
        arrival_time: this.model.arrival,
        status: this.model.status,
        phase: this.model.phase
      })
        .then((res) => {
          this.isError = false;
          this.isSubmitting = false;
          this.$notify({
            message: "Successfully Updated",
            timeout: 5000,
            icon: "ni ni-bell-55",
            type: "success",
          });
          this.$router.push({ name: "UpcomingFlights" });
        })
        .catch((error) => {
          this.error = error ? error : "";
          this.isError = true;
          this.isSubmitting = false;
        });
    },
  },
};
</script>
