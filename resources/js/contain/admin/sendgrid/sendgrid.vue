<template>    
  <div class="content">
    <base-header class="pb-6">
      <b-row align-v="center" class="py-4">
        <b-col cols="7" lg="6">
          <h6 class="h2 text-white d-inline-block mb-0">Passengers Comms via Sendgrid</h6>
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
            <h3 class="mb-0">Passengers</h3>
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
              <el-table-column label="First Name"
                             prop="first_name"
                             min-width="140px"
                             sortable>
              </el-table-column>
              <el-table-column label="Last Name"
                             prop="last_name"
                             min-width="140px"
                             sortable>
              </el-table-column>
              <el-table-column label="Phone"
                             prop="phone"
                             min-width="120px">
              </el-table-column>
              <el-table-column label="Email"
                             prop="email"
                             min-width="120px"
                             sortable>
              </el-table-column>
              <el-table-column label="Company"
                             prop="company"
                             min-width="120px">
              </el-table-column>
              <el-table-column label="Roster"
                             prop="roster"
                             min-width="120px">
              </el-table-column>
              <el-table-column prop="status" label="Status" min-width="100px">
                <div slot-scope="{row}">
                  <badge class="" v-if="row.status == 1" type="success">
                    <span>Active</span>
                  </badge>
                  <badge class="" v-else type="warning">
                    <span>Deactive</span>
                  </badge>
                </div>
              </el-table-column>
              <el-table-column min-width="160px" align="right" label="Actions">
                <div slot-scope="{row}" class="d-flex justify-content-center">
                  <base-button
                    @click.native="handleEmail(row)"
                    class="email"
                    type="info"
                    size="sm"
                    icon
                  >
                    <i class="text-white ni ni-email-83"></i>
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
    </div>
</template>
<script>
import { Table, TableColumn, Select, Option } from 'element-ui';
import RouteBreadCrumb from '@/components/Breadcrumb/RouteBreadcrumb'
import { BasePagination } from '@/components';
import clientPaginationMixin from '@/common/PaginatedTables/clientPaginationMixin'
import swal from 'sweetalert2';

import {mapActions, mapGetters} from 'vuex'

export default {
  page: {
    title: "Passengers",
    meta: [{ name: "description", content: "" }]
  },
  mixins: [clientPaginationMixin],
  components: {
    BasePagination,
    RouteBreadCrumb,
    [Select.name]: Select,
    [Option.name]: Option,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn
  },
  data() {
    return {
      propsToSearch: ['name', 'email'],
      tableData: [],
      selectedRows: []
    };
  },
  watch: {
    passengers: function () {
      this.tableData = this.passengers;
    },
  },
  computed: {
    ...mapGetters([
      'passengers',
    ]),
  },
  mounted() {
    this.initPassengers();
  },
  methods: {
    ...mapActions([
      'initPassengers',
      'deletePassenger',
    ]),

    paginationChanged(page) {
      this.pagination.currentPage = page
    },
    handleEmail(row) {
      this.$router.push({ name: 'SendgridPassenger', params: { passengerId: row.id }})
    },
    handleDelete(index, row) {
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
          this.deletePassenger(row.id);
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
<style>
  .no-border-card .card-footer{
    border-top: 0;
  }
</style>
