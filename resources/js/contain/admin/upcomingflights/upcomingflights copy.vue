<template>
  <div>
    <base-header class="pb-6">
      <b-row align-v="center" class="py-4">
        <b-col cols="7" lg="6">
          <h6 class="h2 text-white d-inline-block mb-0">Upcoming Flights Table</h6>
          <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
            <route-bread-crumb></route-bread-crumb>
          </nav>
        </b-col>
      </b-row>
    </base-header>
    <b-container fluid class="mt--6">
      <div>
        <card class="no-border-card" body-classes="px-0 pb-1" footer-classes="pb-2">
          <template slot="header">
            <div class="d-flex justify-content-between align-items-center">
              <h3 class="mb-0">Flights Table</h3>
              <base-button class="btn btn-neutral btn-sm" @click="showAddModal = true">
                <i class="fas fa-plus"></i>Add Reservation
              </base-button>
            </div>
          </template>
          <div>
            <b-col cols="12" class="d-flex justify-content-center justify-content-sm-between flex-wrap"
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
                <base-input v-model="searchQuery"
                            prepend-icon="fas fa-search"
                            placeholder="Search...">
                </base-input>
              </div>
            </b-col>
            <el-table :data="queriedData"
                      row-key="id"
                      header-row-class-name="thead-light"
                      @sort-change="sortChange">
              <el-table-column label="Flight No."
                             prop="airline"
                             min-width="120px"
                             sortable>
                <div slot-scope="{row}">
                  {{row.flight.airline_code + row.flight.flight_number}}
                </div>
              </el-table-column>
              <!-- <el-table-column label="Aircraft"
                             prop="aircraft"
                             min-width="120px"
                             sortable>
                <div slot-scope="{row}">
                  <span v-if="row.aircraft != null">{{row.aircraft.model}}</span>
                </div>
              </el-table-column>
              <el-table-column label="Registration"
                             prop="registration"
                             min-width="100px">
                <div slot-scope="{row}">
                  <span v-if="row.aircraft != null">{{row.aircraft.registration}}</span>
                </div>
              </el-table-column> -->
              <el-table-column label="Tailno"
                             prop="aircraft_tailno"
                             min-width="100px">
                <div slot-scope="{row}">
                  <span>{{row.aircraft_tailno}}</span>
                </div>
              </el-table-column>
              <el-table-column label="From"
                             prop="origin_airport_name"
                             min-width="120px"
                             sortable>
                <div slot-scope="{row}">
                  <span>{{row.flight.origin_airport_name}}</span>
                </div>
              </el-table-column>
              <el-table-column label="To"
                             prop="destination_airport_name"
                             min-width="120px"
                             sortable>
                <div slot-scope="{row}">
                  <span>{{row.flight.destination_airport_name}}</span>
                </div>
              </el-table-column>
              <el-table-column label="Departure"
                             prop="departure_time"
                             min-width="120px"
                             sortable>
              </el-table-column>
              <el-table-column label="Arrival"
                             prop="arrival_time"
                             min-width="120px"
                             sortable>
              </el-table-column>
              <!-- <el-table-column label="Duration"
                             prop="flight_time"
                             min-width="100px">
              </el-table-column> -->
              <el-table-column label="Type"
                             prop="type"
                             min-width="100px">
                <div slot-scope="{row}">
                  <span class="text-primary" v-if="row.flight.type == 'REGULAR'">REGULAR</span>
                  <span class="text-warning" v-else>CHARTER</span>
                </div>
              </el-table-column>
              
              <el-table-column prop="status" label="Status" min-width="100px">
                <div slot-scope="{row}">
                  <badge v-if="row.status == 'PLANNED'" type="primary">
                    <span>PLANNED</span>
                  </badge>
                  <badge v-else-if="row.status == 'SCHEDULED'" type="success">
                    <span>SCHEDULED</span>
                  </badge>
                  <badge v-else-if="row.status == 'DELAYED'" type="warning">
                    <span>DELAYED</span>
                  </badge>
                  <badge v-else-if="row.status == 'ARRIVED'" type="info">
                    <span>ARRIVED</span>
                  </badge>
                  <badge v-else type="danger">
                    <span>CANCELLED</span>
                  </badge>
                </div>
              </el-table-column>
              <el-table-column prop="phase" label="Phase" min-width="100px">
                <div slot-scope="{row}">
                  <span class="text-primary" v-if="row.status == 'OPEN'">OPEN</span>
                  <span class="text-orange" v-else-if="row.phase == 'BOARDING'">BOARDING</span>
                  <span class="text-success" v-else-if="row.phase == 'DEPARTED'">DEPARTED</span>
                  <span class="text-dark" v-else-if="row.status == 'ARRIVED'">COMPLETED</span>
                  <span class="text-danger" v-else>CLOSED</span>
                </div>
              </el-table-column>
              <el-table-column min-width="100px" align="right" label="Actions">
                <div slot-scope="{row}" class="d-flex justify-content-center">
                  <base-button
                    @click.native="handleEdit(row)"
                    class="edit"
                    type="info"
                    size="sm"
                    icon
                  >
                    <i class="text-white ni ni-ruler-pencil"></i>
                  </base-button>
                  <base-button
                    @click.native="goToSeatMap(row)"
                    type="primary"
                    size="sm"
                    icon
                  >
                    <i class="text-white ni ni-curved-next"></i>
                  </base-button>
                </div>
              </el-table-column>
            </el-table>
          </div>
          <div
            slot="footer"
            class="col-12 d-flex justify-content-center justify-content-sm-between flex-wrap"
          >
            <div class="">
              <p class="card-category" v-if="total != 0">
                Showing {{ from + 1 }} to {{ to }} of {{ total }} entries

                <span v-if="selectedRows.length">
                  &nbsp; &nbsp; {{selectedRows.length}} rows selected
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
    
    <modal :show.sync="showAddModal" modal-classes="modal-secondary">
      <base-alert v-if="isError" dismissible type="danger">
        <strong>Failed!</strong> {{error}}
      </base-alert>
      <validation-observer v-slot="{handleSubmit}" ref="formValidator">
        <b-form role="form" class="new-event--form row" @submit.prevent="handleSubmit(saveEvent)">
          <div class="col-12">
            <base-input label="Date"
                        v-model="current_date"
                        disabled
                        input-classes="form-control-alternative new-event--title">
            </base-input>
          </div>
          <div class="col-12">
            <base-input label="Type">
              <el-select v-model="model.type"
                          filterable
                          placeholder="Scheduled Type"
                          >
                <el-option v-for="option in typeOptions"
                            :key="option.label"
                            :label="option.label"
                            :value="option.value">
                </el-option>
              </el-select>
            </base-input>
          </div>
          <div class="col-12">
            <base-input label="Aircraft">
              <el-select v-model="model.aircraft"
                          filterable
                          placeholder="Aircraft Registration"
                          >
                <el-option v-for="option in aircrafts" v-if="option.status == 1"
                            :key="option.id"
                            :label="option.registration"
                            :value="option.id">
                </el-option>
              </el-select>
            </base-input>
          </div>
          <div class="col-12">
            <base-input label="Flight No.">
              <el-select v-model="model.flight"
                          filterable
                          placeholder="Flight"
                          @change="handleFlight()">
                <el-option v-for="option in aircraftFlights" 
                            v-if="option.flight.type == model.type"
                            :key="option.flight_id"
                            :label="option.flight.airline_code+option.flight.flight_number"
                            :value="option.flight_id">
                </el-option>
              </el-select>
            </base-input>
          </div>
          <div class="col-6">
            <base-input alternative
                        label="Origin"
                        placeholder="Origin Airport"
                        name="Origin"
                        disabled
                        v-model="model.origin">
            </base-input>
          </div>
          <div class="col-6">
            <base-input alternative
                        label="Destination"
                        placeholder="Destination Airport"
                        name="Destination"
                        disabled
                        v-model="model.destination">
            </base-input>
          </div>
          <div class="col-6">
            <base-input append-icon="fas fa-plane-departure" label="Departure" name="Departure" :rules="{required: true}">
              <flat-picker slot-scope="{focus, blur}"
                            @on-open="focus"
                            @on-close="blur"
                            :config="configs.timePicker"
                            class="form-control datepicker"
                            v-model="model.departure">
              </flat-picker>
            </base-input>
          </div>
          <div class="col-6">
            <base-input append-icon="fas fa-plane-arrival" label="Arrival" name="Arrival" :rules="{required: true}">
              <flat-picker slot-scope="{focus, blur}"
                            @on-open="focus"
                            @on-close="blur"
                            :config="configs.timePicker"
                            class="form-control datepicker"
                            v-model="model.arrival">
              </flat-picker>
            </base-input>
          </div>
          <div class="form-group col-12">
            <label class="form-control-label d-block mb-3">Status color</label>
            <div class="btn-group btn-group-toggle btn-group-colors event-tag">
              <label v-for="color in eventColors"
                    :key="color"
                    class="btn"
                    :class="[color, {'active focused': model.className === color}]">
                <input v-model="model.className" type="radio" name="event-tag" :value="color" autocomplete="off">
              </label>
            </div>
          </div>
          <div class="col-12 d-flex justify-content-between mt-4">
            <b-button type="submit" variant="primary" class="new-event--add">Add event</b-button>
            <b-button type="button" variant="link" class="ml-auto" @click="showAddModal = false">Close</b-button>
          </div>
        </b-form>
      </validation-observer>
    </modal>
  </div>
</template>
<script>
  import { Table, TableColumn, Select, Option } from 'element-ui';
  import RouteBreadCrumb from '@/components/Breadcrumb/RouteBreadcrumb'
  import { BasePagination } from '@/components';
  import clientPaginationMixin from '@/common/PaginatedTables/clientPaginationMixin'
  import swal from 'sweetalert2';
  import Modal from '@/components/Modal'
  import FullCalendar from '@fullcalendar/vue'
  // import interactionPlugin from '@fullcalendar/interaction';
  import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
  import BaseButton from '../../../components/BaseButton.vue';
  import flatPicker from "vue-flatpickr-component";
  import "flatpickr/dist/flatpickr.css";

  import {mapActions, mapGetters} from 'vuex'

  const date = new Date();
  const today = date.toDateString()
  export default {
    page: {
      title: "Schedule",
      meta: [{ name: "description", content: "" }]
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
        propsToSearch: ['airline'],
        tableData: [],
        selectedRows: [],
        current_date: today,
        calendarOptions: {
          eventClick: function(info) {
            console.log(info)
          },
          timeZone: 'local',
          height: 500,
          plugins: [ resourceTimelinePlugin ],
          headerToolbar: false,
          initialView: 'resourceTimelineDay',
          scrollTime: '07:00',
          aspectRatio: 1.5,
          slotDuration: '00:15',
          editable: true,
          resourceAreaWidth: "15%",
          resourceAreaColumns: [
            {
              field: 'title',
              headerContent: 'Resource'
            }
          ],
          resources: [],
          events: [],
        },
        typeOptions: [
          {
            label: 'REGULAR',
            value: 'REGULAR'
          },
          {
            label: 'CHARTER',
            value: 'CHARTER'
          },
        ],
        configs: {
          dateTimePicker: {
            enableTime: true,
            dateFormat: 'Y-m-d H:i'
          },
          timePicker: {
            enableTime: true,
            noCalendar: true,
            dateFormat: "H:i",
            time_24hr: true
          }
        },
        showAddModal: false,
        model: {
          type: '',
          aircraft: '',
          flight: '',
          origin: '',
          destination: '',
          departure: '',
          arrival: '',
          className: 'bg-default',
        },
        eventColors: ['bg-info', 'bg-orange', 'bg-red', 'bg-green', 'bg-default', 'bg-blue', 'bg-purple', 'bg-yellow'],
        error: null,
        isError: false,
      };
    },
    watch: {
      aircrafts: function () {
        var that = this;
        this.aircrafts.forEach(function(item, index) {
          let temp = {}
          temp.id = item.id
          temp.title = item.registration + "\n" + item.model
          that.calendarOptions.resources.push(temp)
        })
        this.getAircraftFlightsByDate({date: this.current_date});
      },
      aircraftFlights: function() {
        this.tableData = this.aircraftFlights;
        console.log("table data", this.tableData);

        this.calendarOptions.events = [];
        var that = this;
        this.aircraftFlights.forEach(function(item, index) {
          if (item.aircraft_id != null) {
            let temp = {}
            temp.resourceId = item.aircraft_id
            temp.title = item.flight.airline_code + item.flight.flight_number +", "+ item.flight.origin_airport_code +"-"+ item.flight.destination_airport_code
            temp.start = item.date +"T"+ item.departure_time
            temp.end = item.date +"T"+ item.arrival_time
            temp.className = that.eventColors[index%8]
            that.calendarOptions.events.push(temp)
          }
        })
      },
    },
    computed: {
      ...mapGetters([
        'aircrafts',
        'aircraftFlights',
      ]),
    },
    mounted() {
      this.initAircrafts();
    },
    methods: {
      ...mapActions([
        'initAircrafts',
        'getAircraftFlightsByDate',
        'saveAircraftFlight',
      ]),

      paginationChanged(page) {
        this.pagination.currentPage = page
      },
      goToToday() {
        let calendarApi = this.$refs.fullCalendar.getApi()
        calendarApi.today()
        this.current_date = calendarApi.getDate().toDateString();
        this.getAircraftFlightsByDate({date: this.current_date});
      },
      next() {
        let calendarApi = this.$refs.fullCalendar.getApi()
        calendarApi.next()
        this.current_date = calendarApi.getDate().toDateString();
        this.getAircraftFlightsByDate({date: this.current_date});
      },
      prev() {
        let calendarApi = this.$refs.fullCalendar.getApi()
        calendarApi.prev()
        this.current_date = calendarApi.getDate().toDateString();
        this.getAircraftFlightsByDate({date: this.current_date});
      },
      handleEdit(row) {
        this.$router.push({ name: 'UpcomingFlightsEdit', params: { aircraftFlightsId: row.id }})
      },
      goToSeatMap(row) {
        this.$router.push({ name: 'FlightSeatMap', params: { flightId: row.id }})
      },
      handleFlight() {
        let index = this.aircraftFlights.findIndex(e => e.flight_id === this.model.flight)
        if (index !== -1) {
          this.model.origin = this.aircraftFlights[index].flight.origin_airport_name
          this.model.destination = this.aircraftFlights[index].flight.destination_airport_name
          this.model.departure = this.aircraftFlights[index].departure_time
          this.model.arrival = this.aircraftFlights[index].arrival_time
        }
      },
      saveEvent() {
        this.error = null;
        if ((this.model.aircraft == '') || (this.model.flight == '')) {
          return ;
        }
        return (
          this.saveAircraftFlight({
              date: this.current_date,
              aircraft: this.model.aircraft,
              flight: this.model.flight,
              departure_time: this.model.departure,
              arrival_time: this.model.arrival,
            })
            .then((res) => {
              this.isError = false;
              this.showAddModal = false;
              this.$store.commit('SET_ALL_AIRCRAFT_FLIGHTS', res.data)
            })
            .catch((error) => {
              this.error = error ? error : "";
              this.isError = true;
            })
        );
      },
      deleteEvent() {
        swal.fire({
          title: `Are you sure?`,
          text: "You won't be able to revert this!",
          type: 'warning',
          showCancelButton: true,
          buttonsStyling: false,
          confirmButtonClass: 'btn btn-warning',
          cancelButtonClass: 'btn btn-secondary btn-fill',
          icon: 'warning'
        }).then(result => {
          if (result.value) {
            this.$notify({
              message: 'Successfully Deleted',
              timeout: 5000,
              icon: 'ni ni-bell-55',
              type: 'success'
            });
          }
        });
      },
    }
  };
</script>
<style lang="scss">
  @import '~@fullcalendar/daygrid/main.css';
  @import '~@fullcalendar/timegrid/main.css';
  @import "~@/assets/sass/core/vendors/fullcalendar";
</style>
