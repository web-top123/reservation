<template>
  <div>
    <base-header class="pb-6">
      <b-row align-v="center" class="py-4">
        <b-col cols="7" lg="6">
          <h6 class="h2 text-white d-inline-block mb-0">CheckIn Table</h6>
          <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
            <route-bread-crumb></route-bread-crumb>
          </nav>
        </b-col>
      </b-row>
    </base-header>
    <b-container fluid class="mt--6">
      <div>
        <card
          class="no-border-card"
          body-classes="px-0 pb-1"
          footer-classes="pb-2"
        >
          <template slot="header">
            <div class="d-flex justify-content-between align-items-center">
              <h3 class="mb-0">
                CheckIn Table</h3>
            </div>
          </template>
          <div>
            <b-row>
                <b-col sm="12" md="6">
                  <base-input placeholder="First Name" v-model="searchQuery"></base-input>
                  <base-input placeholder="Booking"></base-input>
                </b-col>
                <b-col sm="12" md="6">
                  <base-input placeholder="Last Name"></base-input>
                  <base-input placeholder="Destination"></base-input>
                </b-col>
            </b-row>
            <b-col
              cols="12"
              class="
                d-flex
                justify-content-center justify-content-sm-between
                flex-wrap
              "
            >
              <el-select
                class="select-primary pagination-select"
                v-model="pagination.perPage"
                placeholder="Per page"
              >
                <el-option
                  class="select-primary"
                  v-for="item in pagination.perPageOptions"
                  :key="item"
                  :label="item"
                  :value="item"
                >
                </el-option>
              </el-select>

              <div>
                <base-input
                  v-model="searchQuery"
                  prepend-icon="fas fa-search"
                  placeholder="Search..."
                >
                </base-input>
              </div>
            </b-col>
            <el-table
              :data="queriedData"
              row-key="id"
              header-row-class-name="thead-light"
              @sort-change="sortChange"
            >
              <el-table-column label="Booking Reference"
                                prop="book_reference"
                             min-width="120px"
                             sortable>
                <div slot-scope="{row}">
                  {{row.flight_passenger.book_reference}}
                </div>
              </el-table-column>
              <el-table-column label="First Name"
                                prop="first_name"
                             min-width="120px"
                             sortable>
                <div slot-scope="{row}">
                  {{row.passenger.first_name}}
                </div>
              </el-table-column>
              <el-table-column label="Last Name"
                                prop="last_name"
                             min-width="120px"
                             sortable>
                <div slot-scope="{row}">
                  {{row.passenger.last_name}}
                </div>
              </el-table-column>
              <el-table-column label="Flight Number"
                                prop="flight_number"
                             min-width="120px"
                             sortable>
                <div slot-scope="{row}">
                  {{row.flight.flight_number}}
                </div>
              </el-table-column>
              <el-table-column label="Origin Airport"
                                prop="origin_airport_name"
                             min-width="120px"
                             sortable>
                <div slot-scope="{row}">
                  {{row.flight.origin_airport_name}}
                </div>
              </el-table-column>
              <el-table-column label="Destination Airport"
                                prop="destination_airport_name"
                             min-width="120px"
                             sortable>
                <div slot-scope="{row}">
                  {{row.flight.destination_airport_name}}
                </div>
              </el-table-column>
              <el-table-column label="Date of Flight"
                                prop="date"
                             min-width="120px"
                             sortable>
                <div slot-scope="{row}">
                  {{row.aircraft_flight.date}}
                </div>
              </el-table-column>
              <el-table-column label="Baggage Reference"
                                prop="bag_reference"
                             min-width="120px"
                             sortable>
                <div slot-scope="{row}">
                  {{row.bag_reference}}
                </div>
              </el-table-column>
              <el-table-column label=" Quantity of Bags"
                                prop="bag_quantity"
                             min-width="120px"
                             sortable>
                <div slot-scope="{row}">
                  {{row.bag_quantity}}
                </div>
              </el-table-column>
              <el-table-column label="Weight of Bags"
                                prop="bag_weight"
                             min-width="120px"
                             sortable>
                <div slot-scope="{row}">
                  {{row.bag_weight}}
                </div>
              </el-table-column>
              <el-table-column label="Dangerous Goods Confirmed"
                                prop="dangerous_confirmed"
                             min-width="120px"
                             sortable>
                <div slot-scope="{row}">
                  {{row.flight_passenger.dangerous_confirmed}}
                </div>
              </el-table-column>
              <el-table-column label="Seat Number"
                                prop="seat"
                             min-width="120px"
                             sortable>
                <div slot-scope="{row}">
                  {{row.flight_passenger.seat}}
                </div>
              </el-table-column>
            </el-table>
          </div>
          <div
            slot="footer"
            class="
              col-12
              d-flex
              justify-content-center justify-content-sm-between
              flex-wrap
            "
          >
            <div class="">
              <p class="card-category" v-if="total != 0">
                Showing {{ from + 1 }} to {{ to }} of {{ total }} entries

                <span v-if="selectedRows.length">
                  &nbsp; &nbsp; {{ selectedRows.length }} rows selected
                </span>
              </p>
            </div>
            <base-pagination
              class="pagination-no-border"
              :current="pagination.currentPage"
              :per-page="pagination.perPage"
              :total="total"
              @change="paginationChanged($event)"
            >
            </base-pagination>
          </div>
        </card>
      </div>
    </b-container>
  </div>
</template>
<script>
import { Table, TableColumn, Select, Option } from "element-ui";
import RouteBreadCrumb from "@/components/Breadcrumb/RouteBreadcrumb";
import { BasePagination } from "@/components";
import clientPaginationMixin from "@/common/PaginatedTables/clientPaginationMixin";
import swal from "sweetalert2";
import Modal from "@/components/Modal";
import FullCalendar from "@fullcalendar/vue";
import BaseButton from "../../../components/BaseButton.vue";
import flatPicker from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

import { mapActions, mapGetters } from "vuex";

const date = new Date();
const today = date.toDateString();
export default {
  page: {
    title: "Baggage",
    meta: [{ name: "Passenger Baggage", content: "" }],
  },
  mixins: [clientPaginationMixin],
  components: {
    BasePagination,
    RouteBreadCrumb,
    [Select.name]: Select,
    [Option.name]: Option,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    Modal,
    FullCalendar,
    BaseButton,
    flatPicker,
  },
  data() {
    return {
      propsToSearch: [],
      tableData: [],
      selectedRows: [],
      error: null,
      isError: false,
    };
  },
  watch: {
    baggages: function() {
      this.tableData = this.baggages;
      console.log("baggage", this.baggages);
    }
  },
  computed: {
    ...mapGetters([
      'baggages',
    ]),
  },
  mounted() {
    this.initBaggages();
  },
  methods: {
    ...mapActions([
      'initBaggages',
    ]),
    
    paginationChanged(page) {
      this.pagination.currentPage = page
    },
  },
};
</script>
<style lang="scss">
@import "~@fullcalendar/daygrid/main.css";
@import "~@fullcalendar/timegrid/main.css";
@import "~@/assets/sass/core/vendors/fullcalendar";
</style>
