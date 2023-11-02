<template>
  <div>
    <base-header class="pb-6">
      <b-row class="align-items-center py-4">
        <b-col lg="6" cols="7">
          <h6 class="h2 text-white d-inline-block mb-0">Email to Passenger using Sendgrid</h6>
          <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
            <route-breadcrumb/>
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
              <h3 slot="header" class="mb-0">Edit Passenger</h3>
              <!-- Card body -->
              <base-alert v-if="isError" dismissible type="danger">
                <strong>Failed!</strong> {{error}}
              </base-alert>
              <validation-observer v-slot="{handleSubmit}" ref="formValidator">
                <b-form role="form" class="row mr-0 ml-0" @submit.prevent="handleSubmit(onSubmit)">
                  <div class="col-md-6 col-sm-12">
                    <base-input alternative
                                class="mb-3"
                                prepend-icon="ni ni-hat-3"
                                label="First Name"
                                placeholder="First Name"
                                name="FirstName"
                                :rules="{required: true}"
                                v-model="model.first_name" disabled>
                    </base-input>

                    <base-input alternative
                                class="mb-3"
                                prepend-icon="ni ni-hat-3"
                                label="Last Name"
                                placeholder="Last Name"
                                name="LastName"
                                :rules="{required: true}"
                                v-model="model.last_name" disabled>
                    </base-input>

                    <base-input prepend-icon="fas fa-phone"
                                placeholder="Phone"
                                label="Phone Number"
                                name="Phone"
                                type="tel"
                                :rules="{required: true}"
                                v-model="model.phone" disabled>
                    </base-input>

                    <base-input prepend-icon="fas fa-calendar" label="Birthday" name="Birthday" v-model="model.birthday" disabled>
                    </base-input>

                    <base-input alternative
                                class="mb-3"
                                prepend-icon="fas fa-globe-americas"
                                label="Company"
                                placeholder="Company"
                                name="Company"
                                v-model="model.company" disabled>
                    </base-input>
                  </div>

                  <div class="col-md-6 col-sm-12">

                    <base-input alternative
                                class="mb-3"
                                prepend-icon="ni ni-email-83"
                                label="Email"
                                placeholder="Email"
                                name="Email"
                                :rules="{email: true}"
                                v-model="model.email" disabled>
                    </base-input>

                    <base-input alternative
                                class="mb-3"
                                prepend-icon="fas fa-clone"
                                label="Roster"
                                placeholder="e.g x-x-x-x"
                                name="Roster"
                                v-model="model.roster"
                                v-mask="'#-#-#-#'" disabled>
                    </base-input>

                    <base-input prepend-icon="fas fa-calendar" label="Start Date" name="StartDate" v-model="model.start_date" disabled>
                    </base-input>

                    <div class="d-flex justify-content-between">
                      <base-input label="Departed Flight"  v-model="model.departed_flight" disabled>
                      </base-input>
                        
                      <base-input label="Landed Flight"  v-model="model.landed_flight" disabled>        
                      </base-input>
                    </div>

                    <base-input label="Status" v-model="model.status" disabled>
                    </base-input>
                  </div>
                  <div class="row">
                      <!-- <div class="email_title col-md-6 offset-md-3">
                          <base-input alternative label="Email Title" v-model="model.email_title"></base-input>
                      </div> -->
                      <div class="email_content col-md-6 offset-md-3">
                        <form>
                        <base-input label="Email Content" >
                            <textarea class="form-control" id="exampleFormControlTextarea2" rows="10" resize="none" v-model="model.email_content"></textarea>
                        </base-input>
                        </form>
                      </div>
                  </div>
                  <div class="d-flex justify-content-between col-12 mt-4">
                    <router-link :to="{name: 'Passengers'}" class="btn btn-secondary">Cancel</router-link>
                    <b-button type="submit" variant="primary" :disabled="isSubmitting">
                      <i class="fa fa-spinner fa-spin" v-if="isSubmitting"></i> Email / SMS
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
  import { Select, Option } from 'element-ui'
  import flatPicker from "vue-flatpickr-component";
  import "flatpickr/dist/flatpickr.css";

  import {mapActions, mapGetters} from 'vuex'

  export default {
    page: {
      title: "Edit Passenger",
      meta: [{ name: "description", content: "" }]
    },
    components: {
      [Select.name]: Select,
      [Option.name]: Option,
      flatPicker,
    },
    data() {
      return {
        statusOptions: [
          {
            label: 'Active',
            value: 1
          },
          {
            label: 'Deactive',
            value: 0
          },
        ],
        model: {
          first_name: '',
          last_name: '',
          phone: '',
          company: '',
          roster: '',
          birthday: '',
          email: '',
          status: 0,
          departed_flight: '',
          landed_flight: '',
          start_date: '',
          email_title: '',
          email_content: '',
        },
        error: null,
        isError: false,
        isSubmitting: false,
      }
    },
    mounted() {
      this.getPassengerById(this.$route.params.passengerId);
      this.initFlights();
    },
    watch: {
      passenger: function () {
        this.model.first_name = this.passenger.first_name;
        this.model.last_name = this.passenger.last_name;
        this.model.phone = this.passenger.phone;
        this.model.company = this.passenger.company;
        this.model.roster = this.passenger.roster;
        this.model.departed_flight = this.passenger.departed_flight;
        this.model.landed_flight = this.passenger.landed_flight;
        this.model.start_date = this.passenger.start_date;
        this.model.birthday = this.passenger.birthday;
        this.model.email = this.passenger.email;
        this.model.status = this.passenger.status;
      },
    },
    computed: {
      ...mapGetters([
        'passenger',
        'flights',
      ]),
    },
    methods: {
      ...mapActions([
        'initFlights',
        'getPassengerById',
        'updatePassenger',
        'sendEmail',
      ]),

      onSubmit() {
        // this will be called only after form is valid. You can do an api call here to register passengers
        // Reset the error if it existed.
        this.error = null;
        this.isSubmitting = true;
        if ((this.model.roster != '') && (this.model.roster != null)) {
          console.log(this.model.roster)
          let roster = this.model.roster.split("-");
          let index = roster.findIndex(e => e == "")
          var roster_error = false;
          // console.log(index)
          if ((roster.length < 4) || (index > -1)) {
            this.$notify({
                message: 'Roster is not valid',
                timeout: 5000,
                icon: 'ni ni-bell-55',
                type: 'warning'
              });
            roster_error = true;
          }
          if ((roster_error) || (this.model.departed_flight == '') || (this.model.departed_flight == null) || (this.model.landed_flight == '') || (this.model.landed_flight == null)) {
            this.isSubmitting = false;
            return ;
          }
        }
        
        return (
        this.sendEmail({
              id: this.$route.params.passengerId,
              phone: this.model.phone,
              first_name: this.model.first_name,
              last_name: this.model.last_name,
              email: this.model.email,
              email_title: this.model.email_title,
              email_content: this.model.email_content,
            })
            .then((res) => {
              console.log("response:", res);
              this.isError = false;
              this.isSubmitting = false;
              this.$notify({
                message: 'Successfully sent email',
                timeout: 5000,
                icon: 'ni ni-bell-55',
                type: 'success'
              });
              this.$router.push(
                { name: "Sendgrid" }
              );
            })
            .catch((error) => {
              this.error = error ? error.data : "";
              this.isError = true;
              this.isSubmitting = false;
            })
        );
      }
    }
  }
</script>
