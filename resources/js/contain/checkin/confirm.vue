<template>
  <div>
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
            <div class="book">
              <h5>Step 5</h5>
              <span>Seat map</span>
            </div>
            <div class="book book-active">
              <h5>Step 6</h5>
              <span>Confirmation</span>
            </div>
          </div>
        </div>
      </section>
    </base-nav>
    <section id="confirm-step-6" class="section-p-100 section-gray-bg">
      <div class="container">
        <div class="row title-section">
          <div class="col">
            <h1 class="fah">Confirmation</h1>
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
                          this.passengerInfo.aircraft_flight.flight.arrival_time
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
                <div
                  class="
                    d-flex
                    justify-content-between
                    flex-column flex-md-row
                    confirm-bottom-field
                    last-plan-section
                    row
                  "
                >
                  <div class="plan-boarding col-sm-12 col-md-6">
                    <div class="row">
                      <div
                        class="field-block col-sm-6"
                        v-if="this.passengerInfo.aircraft_flight"
                      >
                        <p>Boarding time</p>
                        <span>{{
                          getBoardingTime(
                            this.passengerInfo.aircraft_flight.flight
                              .departure_time
                          )
                        }}</span>
                      </div>
                      <div class="field-block col-sm-6">
                        <p>Booking Ref</p>
                        <span>{{ this.currentPassenger.book_reference }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="plan-seat-num col-sm-12 col-md-6">
                    <div class="row">
                      <div class="field-block col-sm-6">
                        <p>Seat number:</p>
                        <span class="th-color">{{
                          this.passengerInfo.seat
                        }}</span>
                      </div>
                      <div class="field-block col-sm-6">
                        <p class="th-gray-color">Checked Baggage:</p>
                        <span>1 x 20 kg</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="exclamation">
              <i class="fa fa-exclamation-circle th-color"></i
              ><span
                >Anyone passing through a security checkpoint will be required
                to have a photo ID and a Boarding Pass</span
              >
            </div>
          </div>
        </div>
        <h3 class="mt-5 mb-5 th-active-color">
          Please enter your email address to receive your boarding pass or
          download as PDF-file
        </h3>
        <div class="row">
          <div class="col-md-8 mb-3">
            <form action="" class="pdf-form form-field">
              <div
                class="
                  form-group
                  d-flex
                  flex-column flex-md-row
                  justify-content-center
                "
              >
                <input
                  type="text"
                  name="pdf_send_email"
                  id="pdf_send_email"
                  class="form-control"
                />
                <i class="fa fa-spinner fa-spin" v-if="isSubmitting"></i>
                <button
                  class="hbtn th-bg-color"
                  type="submit"
                  :disabled="isSubmitting"
                >
                  SEND
                </button>
              </div>
            </form>
          </div>
          <div
            class="
              col-md-4
              email-submit-block
              mb-5
              d-flex
              flex-column flex-md-row
              justify-content-md-start justify-content-center
            "
          >
            <button class="hbtn pdf-down-btn">
              <img
                src="img/theme/downloadpdf.png"
                @click="printBoardingPass()"
              />DOWNLOAD PDF
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-3">
            <h5 class="mb-4 th-active-color">Boarding time</h5>
            <p>
              Failure to present at the boarding gate 30 minutes before the
              scheduled time of daparture will result in boardnig being denied.
              If this occurs, please advise your travel administrator.
            </p>
          </div>
          <div class="col-md-6 mb-3">
            <h5 class="mb-4 th-active-color">Carry-On Baggage:</h5>
            <p>
              Must fit within the test unit and weght 7kgs or less. If not,
              please check it or charges will aplly at the gate.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="boarding_pass" class="pdf-container" style="display: none;">
      <nav class="navbar navbar-expand-md" style="background-color: #0f0f0f">
        <div class="container">
          <!-- Brand -->
          <a class="navbar-brand" href="/"
            ><img src="img/theme/logo.png" /><span
              class="logo-first th-white-color"
              >Aviation Services</span
            ></a
          >
        </div>
      </nav>
      <div class="container">
        <!-- PDF Print Section -->
        <div class="row">
          <div class="col-12 title-section mt-7">
            <h1 class="fah">Booking info</h1>
          </div>
          <div class="col-12">
            <div class="row">
              <div class="col-7">
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
                      class="title-header header-1 th-active-bg col"
                      v-if="this.passengerInfo.aircraft_flight"
                    >
                      <div>
                        {{
                          this.passengerInfo.aircraft_flight.flight.origin_airport_name.toUpperCase()
                        }}
                        <i class="pdf-code">
                          ({{
                            this.passengerInfo.aircraft_flight.flight
                              .origin_airport_code
                          }})
                        </i>
                        <p>
                          <span class="pdf-time">
                            {{
                              this.passengerInfo.aircraft_flight.flight
                                .departure_time
                            }}
                          </span>
                        </p>
                      </div>

                      <div><img src="img/theme/plan-pdf.png" /></div>
                      <div>
                        {{
                          this.passengerInfo.aircraft_flight.flight.destination_airport_name.toUpperCase()
                        }}
                        <i class="pdf-code">
                          ({{
                            this.passengerInfo.aircraft_flight.flight
                              .destination_airport_code
                          }})
                        </i>
                        <p>
                          <span class="pdf-time">
                            {{
                              this.passengerInfo.aircraft_flight.flight
                                .arrival_time
                            }}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="">
                    <div
                      class="
                        d-flex
                        justify-content-md-between
                        flex-column flex-md-row
                        row
                      "
                    >
                      <div
                        class="
                          welcome-check-content
                          d-flex
                          align-items-start
                          col-12
                          pl-6
                        "
                        v-if="this.passengerInfo.passenger"
                      >
                        <div class="row">
                          <div class="plan-adult col-sm-12 col-md-8">
                            <p class="th-gray-color">Adult</p>
                            <h4>
                              {{ this.passengerInfo.passenger.first_name }}
                              {{ this.passengerInfo.passenger.last_name }}
                            </h4>
                          </div>
                          <div class="plan-status col-sm-12 col-md-4">
                            <p class="th-gray-color">Status</p>
                            <button class="sm-btn btn-bg-green">
                              {{ this.passengerInfo.status }} in
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="
                        d-flex
                        justify-content-between
                        flex-column flex-md-row
                        confirm-bottom-field
                        last-plan-section
                        row
                      "
                      style="background: white"
                    >
                      <div class="col-sm-12 col-md-8">
                        <div class="row">
                          <div
                            class="field-block col-sm-6"
                            v-if="this.passengerInfo.aircraft_flight"
                          >
                            <p>Date</p>
                            <span>
                              {{
                                formatDate(passengerInfo.aircraft_flight.date)
                              }}
                            </span>
                          </div>
                          <div class="field-block col-sm-6">
                            <p>Seat number:</p>
                            <span>
                              {{ this.passengerInfo.seat }}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-12 col-md-4">
                        <div class="row">
                          <div class="field-block col-12">
                            <p>Boarding time</p>
                            <span class="">
                              {{
                                getBoardingTime(
                                  this.passengerInfo.aircraft_flight.flight
                                    .departure_time
                                )
                              }}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-12 col-md-8">
                        <div class="row">
                          <div
                            class="field-block col-sm-6"
                            v-if="this.passengerInfo.aircraft_flight"
                          >
                            <p>Checked Baggage</p>
                            <span> 1 x 20 kg </span>
                          </div>
                          <div class="field-block col-sm-6">
                            <p>Flight number</p>
                            <span>
                              {{
                                this.passengerInfo.aircraft_flight.flight
                                  .flight_number
                              }}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-12 col-md-4">
                        <div class="row">
                          <div class="field-block col-12">
                            <p>Booking Ref</p>
                            <span class="">
                              {{ this.currentPassenger.book_reference }}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-5">
                <div>
                  <img id="CaptchaImg" />
                </div>
                <div class="exclamation">
                  <img src="img/theme/blue-care.png" />
                  <span
                    >Anyone passing through a security checkpoint will be
                    required to have a photo ID and a Boarding Pass</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="row boarding-carry">
            <div class="col-6 mb-3">
              <h5 class="mb-4 th-active-color">Boarding time</h5>
              <p>
                Failure to present at the boarding gate 30 minutes before the
                scheduled time of daparture will result in boardnig being
                denied. If this occurs, please advise your travel administrator.
              </p>
            </div>
            <div class="col-6 mb-3">
              <h5 class="mb-4 th-active-color">Carry-On Baggage:</h5>
              <p>
                Must fit within the test unit and weght 7kgs or less. If not,
                please check it or charges will aplly at the gate.
              </p>
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
import InlineSvg from "vue-inline-svg";
import { Select, Option } from "element-ui";
import jsPDF from "jspdf";
import { mapActions, mapGetters } from "vuex";

export default {
  page: {
    title: "Your Flight",
    meta: [{ name: "description", content: "" }],
  },
  components: {
    BaseTable,
    BaseButton,
    InlineSvg,
    [Select.name]: Select,
    [Option.name]: Option,
  },
  data() {
    return {
      email: "",
      error: null,
      isError: false,
      isSubmitting: false,
      qrcode: null,
    };
  },
  watch: {
    passengerInfo: function () {
      this.getQrCode(this.passengerInfo.id).then((res) => {
        console.log(res);
        const imagData = "data:image/png;base64," + res;
        var img = document.getElementById("CaptchaImg");
        img.src = imagData;
        console.log(img.src);
        console.log("complete", res);
      });
    },
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
    getBoardingTime(departureTime) {
      var minute =
        parseInt(departureTime.split(":")[0]) * 60 +
        parseInt(departureTime.split(":")[1]) -
        30;
      var hour = Math.floor(minute / 60);
      var min = minute - hour * 60;
      var hourString = hour > 9 ? hour : "0" + hour;
      var minString = min > 9 ? min : "0" + min;
      return hourString + ":" + minString;
    },
    printBoardingPass() {
      console.log(document.getElementsByClassName("pdf-container"));
      document.getElementsByClassName("pdf-container")[0].style.display =
        "block";
      var pdf = new jsPDF("p", "mm", "a4");
      pdf.addFont("/fonts/Gilroy-Regular.ttf", "Gilroy", "normal");
      pdf.setFont("Gilroy");
      pdf.addFont("/fonts/Gilroy-Bold.ttf", "Gilroybold", "normal");
      pdf.setFont("Gilroybold");
      pdf.addFont("/fonts/Fahkwang-Regular.ttf", "Fahkwang", "normal");
      pdf.setFont("Fahkwang");
      pdf.addFont(
        "/fonts/AktivGroteskCorp-Regular.ttf",
        "Aktiv Grotesk Corp",
        "normal"
      );
      pdf.setFont("Aktiv Grotesk Corp");
      console.log(pdf.getFontList());
      var element = document.getElementById("boarding_pass");
      const e_width = element.offsetWidth;
      const pdfWidth = pdf.internal.pageSize.getWidth();
      pdf.html(element, {
        html2canvas: {
          scale: pdfWidth / e_width,
        },
        x: 0,
        y: 0,
        callback: function (pdf) {
          window.open(pdf.output("bloburl"));
          document.getElementsByClassName("pdf-container")[0].style.display =
            "none";
        },
      });
    },
    onSubmit() {
      // this will be called only after form is valid. You can do an api call here to register passengers
      // Reset the error if it existed.
      this.error = null;
      this.isSubmitting = true;

      return this.emailBoardingPass({
        id: this.passengerInfo.id,
        email: this.email,
      })
        .then((res) => {
          this.isError = false;
          this.isSubmitting = false;
          this.$notify({
            message: "Successfully Emailed",
            timeout: 5000,
            icon: "ni ni-bell-55",
            type: "success",
          });
        })
        .catch((error) => {
          this.error = error ? error.data : "";
          this.isError = true;
          this.isSubmitting = false;
        });
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
.form-group {
  margin-bottom: 0px;
}
.first {
  min-width: 40%;
}
.second {
  min-width: 20%;
}
.third {
  min-width: 20%;
}
.bg-black {
  background-color: black !important;
}
.description {
  width: 48%;
  margin-bottom: 30px;
}
.four {
  width: 19.0999999%;
}

@media (max-width: 350px) {
  .image-arrow {
    display: none;
  }
  .note-arrow {
    display: block;
  }
}
@media (min-width: 350px) {
  .image-arrow {
    display: block;
  }
  .note-arrow {
    display: none;
  }
}
</style>
