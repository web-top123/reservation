<template>
  <div>
    <base-header class="pb-6">
      <b-row align-v="center" class="py-4">
        <b-col cols="7" lg="6">
          <h6 class="h2 text-white d-inline-block mb-0">Dashboard</h6>
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
          <b-row>
            <b-col xl="12" md="6" class="text-center">
              <h4>Passenger metrics</h4>
            </b-col>
            <b-col xl="3" md="6">
              <stats-card
                title="Scheduled passengers"
                type="gradient-red"
                sub-title="350,897"
                icon="ni ni-active-40"
              >
                <template slot="footer">
                  <div>
                    <span class="text-success mr-2"
                      ><i class="fa"></i> 100</span
                    >
                    <span class="text-nowrap">Day</span>
                  </div>
                  <div>
                    <span class="text-success mr-2"
                      ><i class="fa"></i> 200</span
                    >
                    <span class="text-nowrap">Week</span>
                  </div>
                  <div>
                    <span class="text-success mr-2"
                      ><i class="fa"></i> 300</span
                    >
                    <span class="text-nowrap">Month</span>
                  </div>
                  <div>
                    <span class="text-success mr-2"
                      ><i class="fa"></i> 400</span
                    >
                    <span class="text-nowrap">Year</span>
                  </div>
                  <div>
                    <span class="text-success mr-2"
                      ><i class="fa"></i> 500</span
                    >
                    <span class="text-nowrap">All time</span>
                  </div>
                </template>
              </stats-card>
            </b-col>
            <b-col xl="3" md="6">
              <stats-card
                title="In transit passengers"
                type="gradient-orange"
                sub-title="2,356"
                icon="ni ni-chart-pie-35"
              >
                <template slot="footer">
                  <div>
                    <span class="text-success mr-2"
                      ><i class="fa"></i> 100</span
                    >
                    <span class="text-nowrap">Day</span>
                  </div>
                  <div>
                    <span class="text-success mr-2"
                      ><i class="fa"></i> 200</span
                    >
                    <span class="text-nowrap">Week</span>
                  </div>
                  <div>
                    <span class="text-success mr-2"
                      ><i class="fa"></i> 300</span
                    >
                    <span class="text-nowrap">Month</span>
                  </div>
                  <div>
                    <span class="text-success mr-2"
                      ><i class="fa"></i> 400</span
                    >
                    <span class="text-nowrap">Year</span>
                  </div>
                  <div>
                    <span class="text-success mr-2"
                      ><i class="fa"></i> 500</span
                    >
                    <span class="text-nowrap">All time</span>
                  </div>
                </template>
              </stats-card>
            </b-col>
            <b-col xl="3" md="6">
              <stats-card
                title="Transported passengers"
                type="gradient-green"
                sub-title="924"
                icon="ni ni-money-coins"
              >
                <template slot="footer">
                  <div>
                    <span class="text-success mr-2"
                      ><i class="fa"></i> 100</span
                    >
                    <span class="text-nowrap">Day</span>
                  </div>
                  <div>
                    <span class="text-success mr-2"
                      ><i class="fa"></i> 200</span
                    >
                    <span class="text-nowrap">Week</span>
                  </div>
                  <div>
                    <span class="text-success mr-2"
                      ><i class="fa"></i> 300</span
                    >
                    <span class="text-nowrap">Month</span>
                  </div>
                  <div>
                    <span class="text-success mr-2"
                      ><i class="fa"></i> 400</span
                    >
                    <span class="text-nowrap">Year</span>
                  </div>
                  <div>
                    <span class="text-success mr-2"
                      ><i class="fa"></i> 500</span
                    >
                    <span class="text-nowrap">All time</span>
                  </div>
                </template>
              </stats-card>
            </b-col>
            <b-col xl="3" md="6">
              <stats-card
                title="Disrupted passengers"
                type="gradient-info"
                sub-title="49,65%"
                icon="ni ni-chart-bar-32"
              >
                <template slot="footer">
                  <div>
                    <span class="text-success mr-2"
                      ><i class="fa"></i> 100</span
                    >
                    <span class="text-nowrap">Day</span>
                  </div>
                  <div>
                    <span class="text-success mr-2"
                      ><i class="fa"></i> 200</span
                    >
                    <span class="text-nowrap">Week</span>
                  </div>
                  <div>
                    <span class="text-success mr-2"
                      ><i class="fa"></i> 300</span
                    >
                    <span class="text-nowrap">Month</span>
                  </div>
                  <div>
                    <span class="text-success mr-2"
                      ><i class="fa"></i> 400</span
                    >
                    <span class="text-nowrap">Year</span>
                  </div>
                  <div>
                    <span class="text-success mr-2"
                      ><i class="fa"></i> 500</span
                    >
                    <span class="text-nowrap">All time</span>
                  </div>
                </template>
              </stats-card>
            </b-col>
          </b-row>
          <b-row>
            <b-col xl="12" md="6" class="text-center">
              <h4>Operation metrics</h4>
            </b-col>
            <b-col xl="3" md="6">
              <stats-card
                title="Aircraft changes"
                type="gradient-red"
                sub-title="350,897"
                icon="ni ni-active-40"
              >
                <template slot="footer">
                  <div>
                    <span class="text-success mr-2"
                      ><i class="fa"></i> 100</span
                    >
                    <span class="text-nowrap">Day</span>
                  </div>
                  <div>
                    <span class="text-success mr-2"
                      ><i class="fa"></i> 200</span
                    >
                    <span class="text-nowrap">Week</span>
                  </div>
                  <div>
                    <span class="text-success mr-2"
                      ><i class="fa"></i> 300</span
                    >
                    <span class="text-nowrap">Month</span>
                  </div>
                  <div>
                    <span class="text-success mr-2"
                      ><i class="fa"></i> 400</span
                    >
                    <span class="text-nowrap">Year</span>
                  </div>
                  <div>
                    <span class="text-success mr-2"
                      ><i class="fa"></i> 500</span
                    >
                    <span class="text-nowrap">All time</span>
                  </div>
                </template>
              </stats-card>
            </b-col>
            <b-col xl="3" md="6">
              <stats-card
                title="Irregularties"
                type="gradient-orange"
                sub-title="2,356"
                icon="ni ni-chart-pie-35"
              >
                <template slot="footer">
                  <div>
                    <span class="text-success mr-2"
                      ><i class="fa"></i> 100</span
                    >
                    <span class="text-nowrap">Day</span>
                  </div>
                  <div>
                    <span class="text-success mr-2"
                      ><i class="fa"></i> 200</span
                    >
                    <span class="text-nowrap">Week</span>
                  </div>
                  <div>
                    <span class="text-success mr-2"
                      ><i class="fa"></i> 300</span
                    >
                    <span class="text-nowrap">Month</span>
                  </div>
                  <div>
                    <span class="text-success mr-2"
                      ><i class="fa"></i> 400</span
                    >
                    <span class="text-nowrap">Year</span>
                  </div>
                  <div>
                    <span class="text-success mr-2"
                      ><i class="fa"></i> 500</span
                    >
                    <span class="text-nowrap">All time</span>
                  </div>
                </template>
              </stats-card>
            </b-col>
            <b-col xl="3" md="6">
              <stats-card
                title="Ad hoc changes"
                type="gradient-green"
                sub-title="924"
                icon="ni ni-money-coins"
              >
                <template slot="footer">
                  <div>
                    <span class="text-success mr-2"
                      ><i class="fa"></i> 100</span
                    >
                    <span class="text-nowrap">Day</span>
                  </div>
                  <div>
                    <span class="text-success mr-2"
                      ><i class="fa"></i> 200</span
                    >
                    <span class="text-nowrap">Week</span>
                  </div>
                  <div>
                    <span class="text-success mr-2"
                      ><i class="fa"></i> 300</span
                    >
                    <span class="text-nowrap">Month</span>
                  </div>
                  <div>
                    <span class="text-success mr-2"
                      ><i class="fa"></i> 400</span
                    >
                    <span class="text-nowrap">Year</span>
                  </div>
                  <div>
                    <span class="text-success mr-2"
                      ><i class="fa"></i> 500</span
                    >
                    <span class="text-nowrap">All time</span>
                  </div>
                </template>
              </stats-card>
            </b-col>
            <b-col xl="3" md="6">
              <stats-card
                title="Schedule stability"
                type="gradient-info"
                sub-title="49,65%"
                icon="ni ni-chart-bar-32"
              >
                <template slot="footer">
                  <div>
                    <span class="text-success mr-2"
                      ><i class="fa"></i> 100</span
                    >
                    <span class="text-nowrap">Day</span>
                  </div>
                  <div>
                    <span class="text-success mr-2"
                      ><i class="fa"></i> 200</span
                    >
                    <span class="text-nowrap">Week</span>
                  </div>
                  <div>
                    <span class="text-success mr-2"
                      ><i class="fa"></i> 300</span
                    >
                    <span class="text-nowrap">Month</span>
                  </div>
                  <div>
                    <span class="text-success mr-2"
                      ><i class="fa"></i> 400</span
                    >
                    <span class="text-nowrap">Year</span>
                  </div>
                  <div>
                    <span class="text-success mr-2"
                      ><i class="fa"></i> 500</span
                    >
                    <span class="text-nowrap">All time</span>
                  </div>
                </template>
              </stats-card>
            </b-col>
          </b-row>
        </card>
      </div>
      <b-row>
        <b-col cols="6">
          <h4>Upcoming flights</h4>
          <div>
            <el-table
              :data="queriedData"
              row-key="id"
              header-row-class-name="thead-light"
              @sort-change="sortChange"
            >
              <el-table-column label="flight" prop="name" min-width="160px">
                <div slot-scope=""></div>
              </el-table-column>
              <el-table-column label="day" prop="name" min-width="160px">
                <div slot-scope=""></div>
              </el-table-column>
            </el-table>
          </div>
        </b-col>
        <b-col cols="6">
          <h4>Completed flights</h4>
          <div>
            <el-table
              :data="queriedData"
              row-key="id"
              header-row-class-name="thead-light"
              @sort-change="sortChange"
            >
              <el-table-column label="flight" prop="name" min-width="160px">
                <div slot-scope=""></div>
              </el-table-column>
              <el-table-column label="day" prop="name" min-width="160px">
                <div slot-scope=""></div>
              </el-table-column>
            </el-table>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { Table, TableColumn, Select, Option } from "element-ui";
import RouteBreadCrumb from "@/components/Breadcrumb/RouteBreadcrumb";
import { BasePagination } from "@/components";
import clientPaginationMixin from "@/common/PaginatedTables/clientPaginationMixin";
import swal from "sweetalert2";
import BaseButton from "../../../components/BaseButton.vue";
import { mapActions, mapGetters } from "vuex";

const date = new Date();
const today = date.toDateString();
export default {
  page: {
    title: "Schedule",
    meta: [{ name: "description", content: "" }],
  },
  mixins: [clientPaginationMixin],
  components: {
    BasePagination,
    RouteBreadCrumb,
    [Select.name]: Select,
    [Option.name]: Option,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    BaseButton,
  },
  data() {
    return {
      propsToSearch: [],
      tableData: [],
      selectedRows: [],
    };
  },
  watch: {},
  computed: {},
  mounted() {},
  methods: {},
};
</script>
