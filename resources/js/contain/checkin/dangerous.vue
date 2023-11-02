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
            <div class="book book-active">
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
    <section id="welcome-4" class="section-p-100 section-gray-bg">
      <div class="container">
        <div class="row">
          <div class="col-md-10">
            <div class="title-section">
              <h1 class="fah">Dangerous goods not to be taken on board</h1>
            </div>
            <p>
              It is against the law to bring restricted items - as defined by the Civil Aviation Safety Authority - onto an aircraft in carry-on baggage or checked baggage. Company, Airport or Government officials may inspect and/or search your baggage with or without your presence.
            </p>
            <div class="dangerous-table" style="padding-bottom: 70px">
              <div class="row">
                <div
                  class="col-md-4"
                  v-for="(item, index) in dangerous"
                  :key="index"
                >
                  <div class="table-block">
                    <img :src="item.image" />
                    <h5>{{ item.title }}</h5>
                    <p>{{ item.description }}</p>
                  </div>
                </div>
              </div>
            </div>
            <p>
              If you have any doubt about what may be carried onboard the
              aircraft, please request more information from the company before
              travel.
            </p>
            <p style="padding-bottom: 70px">
              The guest is not permitted to carry sharp objects such as nail files, scissors, letter openers, pocket knives, etc in his/her carry-on baggage or on his/her person. Such items must be placed in checked baggage only. The company may destroy, abandon and/or retain as evidence any such goods.
            </p>
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
                  to="/declaration"
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
          <div class="col-md-2"></div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import BaseButton from "@/components/BaseButton.vue";
export default {
  page: {
    title: "Dangerous goods",
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
        subtitle:
          "I confirm that i am not carrying any dangerous goods onboard.",
      },
      {
        subtitle:
          "I confrim that i will not have any sharp objects, firearms and weapons on my person/s or in my/our carry-on baggage while in the aircraft.",
      },
      {
        subtitle:
          "I confirm that i have read and understood the Conditions of Carriage for my/our ticket/s",
      },
      {
        subtitle:
          "I confirm that the itinerry and seating arrangement are correnct for check-in",
      },
    ],
    dangerous: [
      {
          image: 'img/icons/dangerous/table-check-1.png',
          title: 'Explosives',
          description: 'Fireworks, flares, toy gun caps'
        },
        {
          image: 'img/icons/dangerous/table-check-2.png',
          title: 'Poisons',
          description: 'Arsenic, cyanide, weedkillers'
        },
        {
          image: 'img/icons/dangerous/table-check-3.png',
          title: 'Compressed substance',
          description: 'Gas cylinders, Aerosols (other than medicines/toiletries)'
        },
        {
          image: 'img/icons/dangerous/table-check-4.png',
          title: 'Irritating Substances',
          description: 'Tear gas devices such as mace, pepeer sprays.'
        },
        {
          image: 'img/icons/dangerous/table-check-5.png',
          title: 'Flammable substance',
          description: 'Lighter fluid, paints, thinners, firelighters, cigarette lighters containing unabsorbed lighter fuel'
        },
        {
          image: 'img/icons/dangerous/table-check-6.png',
          title: 'Infecticous Substances',
          description: 'Biological products and/or diagnostic specimens containing pathoens.'
        },
        {
          image: 'img/icons/dangerous/table-check-7.png',
          title: 'Oxidizers',
          description: 'Some bleaching powders, acids, chemicals.'
        },
        {
          image: 'img/icons/dangerous/table-check-8.png',
          title: 'Corrosives',
          description: 'Acides, alkalis, wet cell batteries, caustic soda, mercury.'
        },
        {
          image: 'img/icons/dangerous/table-check-9.png',
          title: 'Organic peroxides',
          description: 'Hair or textile dues, fibreglass repair kits, certain adhesives.'
        },
        {
          image: 'img/icons/dangerous/table-check-10.png',
          title: 'Radioactic Materials',
          description: 'Medical or research samples which contain radioactive sources'
        },
        {
          image: 'img/icons/dangerous/table-check-11.png',
          title: 'Magnetised Materials',
          description: 'Magnetrons and anything containing strong magne'
        }
    ],
  }),
  componenets: {
    BaseButton,
  },
  methods: {
    continuePage() {
      this.$router.push({ name: "SelectSeat" });
    },
  },
};
</script>
<style>
@media (max-width: 1008px) {
  .step1 {
    display: none;
  }
  .step2 {
    display: none;
  }
  .step3 {
    display: block;
  }
  .step4 {
    display: block;
  }
  .step5 {
    display: block;
  }
  .step6 {
    display: none;
  }
}
</style>