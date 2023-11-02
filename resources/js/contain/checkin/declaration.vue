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
            <div class="book book-active">
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
    <section id="welcome-3" class="section-p-100 section-gray-bg">
      <div class="container">
        <div class="title-section">
          <h1 class="fah">Covid Declaration</h1>
        </div>
        <div class="check-content">
          <template v-for="(item, index) in items">
            <label class="checkbox-line" :key="index">
              {{ item.subtitle }}
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
          </template>
        </div>
        <div class="check-content-btns" style="margin-top: 70px">
          <div class="d-flex flex-sm-row flex-column">
            <router-link
              to="/booking"
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
import BaseButton from "@/components/BaseButton.vue";
export default {
  page: {
    title: "Declaration",
    meta: [{ name: "description", content: "" }],
  },
  data: () => ({
    ex4: [
      "red",
      "indigo",
      "orange",
      "primary",
      "secondary",
      "success",
      "info",
      "warning",
      "error",
      "red darken-3",
      "indigo darken-3",
      "orange darken-3",
    ],
    items: [
      {
        title: "1",
        subtitle:
          "I have not presented with any symptoms of covid-19 such as fever, cought, sore throat, shortness of breath in the past 14 days.",
      },
      {
        title: "2",
        subtitle:
          "I am not currently suspected (being tested) or have been confirmed as a COVID-19 case in the past 14 days?",
      },
      {
        title: "3",
        subtitle:
          "I have not been in contact with someone that is a suspected (being tested) or confirmed as a COVID-19 case in the past 14 days",
      },
      {
        title: "4",
        subtitle:
          "I am aware of the current Australian Government regulations to wear a mask within airports and on board the aircraft and am willing to follow this directive.",
      },
    ],
  }),
  componenets: {
    BaseButton,
  },
  methods: {
    continuePage() {
      this.$router.push({ name: "Dangerous" });
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
    display: block;
  }
  .step3 {
    display: block;
  }
  .step4 {
    display: block;
  }
  .step5 {
    display: none;
  }
  .step6 {
    display: none;
  }
}
</style>
