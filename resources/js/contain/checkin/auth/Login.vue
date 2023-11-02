<template>
  <div>
    <base-nav type="light" :transparent="true" class="">
      <section id="books" class="th-bg-color">
        <div class="book-slider container-fluid">
          <div class="d-flex">
            <div class="book book-active">
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
    <section id="check-in" class="section-gray-bg pr-0">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-4 check-form-content">
            <H1 class="fah">Ready to check in?</H1>
            <p class="check-form-detail">
              Check in and get your boarding pass from 24 hours before your
              flight.
            </p>
            <base-alert v-if="isAuthError" dismissible type="danger">
              <strong>Failed!</strong> {{ authError }}
            </base-alert>
            <validation-observer v-slot="{ handleSubmit }" ref="formValidator">
              <div class="check-form-field">
                <form
                  action=""
                  class="check-form form-field"
                  @submit.prevent="handleSubmit(onSubmit)"
                >
                  <div class="form-group">
                    <div class="check-form-label">Booking reference</div>
                    <input
                      type="text"
                      name="book_reference"
                      id="book_reference"
                      class="form-control"
                      v-model="model.reference"
                    />
                  </div>
                  <div class="form-group">
                    <div class="check-form-label">Family name</div>
                    <input
                      type="text"
                      name="family_name"
                      id="family_name"
                      class="form-control"
                      v-model="model.last_name"
                    />
                  </div>
                  <button
                    class="th-bg-color btn-update-primary"
                    type="submit"
                    :disabled="isSubmitting"
                  >
                    CONFIRM
                  </button>
                  <i class="fa fa-spinner fa-spin" v-if="isSubmitting"></i>
                </form>
              </div>
            </validation-observer>
          </div>
          <div class="col-md-8 check-form-img-over">
            <div class="check-form-img-wrapper">
              <img class="check-form-img" src="img/theme/check_in.webp" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  page: {
    title: "Login",
    meta: [{ name: "description", content: "" }],
  },
  data() {
    return {
      model: {
        last_name: "",
        reference: "",
      },
      authError: null,
      isAuthError: false,
      isSubmitting: false,
    };
  },
  computed: {
    ...mapGetters(["currentPassenger"]),
  },
  methods: {
    onSubmit() {
      // this will be called only after form is valid. You can do api call here to login
      // Reset the authError if it existed.
      this.authError = null;
      this.isSubmitting = true;
      return this.$store
        .dispatch("login", {
          last_name: this.model.last_name,
          reference: this.model.reference,
        })
        .then((res) => {
          // console.log(this.currentPassenger)
          if (this.currentPassenger.role == "Passenger") {
            //this.$router.push({ name: "Login" });
            this.$router.push({ name: "Booking" });
          } else {
            this.$router.push({ name: "Login" });
          }
          this.isAuthError = false;
          this.isSubmitting = false;
        })
        .catch((error) => {
          // console.log(error)
          this.authError = error ? error : "";
          this.isAuthError = true;
          this.isSubmitting = false;
        });
    },
  },
  created: function () {
    this.model.reference = this.$route.query.ref;
  }
};
</script>

<style>
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
