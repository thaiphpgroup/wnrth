import crudmix from "../mixins/CrudMixin.js";
import Tableitem from "./Tableitem.js";
import Fieldinsert from "./FieldInsert.js";
import Fieldedit from "./Fieldedit.js";
import Viewitem from "./ViewItem.js";
import Printa4table from "./Printa4table.js";

export default {
    template: `<div>
        <div class="page-header clearfix">
            <div class="pull-right">
                <button v-if="info.v_insert"  v-show="!viewstate.v_insert" @click="insert" class="btn btn-primary"><i class="fa fa-plus-circle"></i> Insert</button>
                <button v-if="info.v_import"  class="btn btn-primary" @click="changeview('v_import')"><i class="fa fa-download"></i> Import</button>
                <button v-if="info.v_export"  class="btn btn-primary" @click="changeview('v_export')"><i class="fa fa-upload"></i> Export</button>
                <button v-if="info.v_print"  class="btn btn-primary" @click="printv"><i class="fa fa-print"></i> Print</button>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading">
                <h4 class="panel-title">
                    <i class="material-icons">
                        archive</i> {{title}}
                </h4>
                <span class="pull-right">
                     <i class="fa fa-fw fa-chevron-up clickable">
                     </i>
                     </span>
            </div>
            <div class="panel-body" style="display:block;">
                <div id="data_wrapper" class="dataTables_wrapper form-inline dt-bootstrap no-footer">
                    <div class="row">
                    </div>
                    <div class="row">
                        <div class="col-sm-12">
                            <div id="data_wrapper" class="dataTables_wrapper form-inline dt-bootstrap no-footer">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div id="data_wrapper" class="dataTables_wrapper form-inline dt-bootstrap no-footer">
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <div class="dataTables_length" id="data_length">
                                                        <label>
                                                                Show
                                                                <select v-model="perpage" @change="changeperpage" name="data_length" aria-controls="data" class="form-control input-sm">
                                                                    <option value="10">10</option>
                                                                    <option value="25">25</option>
                                                                    <option value="50">50</option>
                                                                    <option value="100">100</option>
                                                                </select>
                                                                entries
                                                            </label>
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div id="data_filter" class="dataTables_filter">
                                                        <label>
                                                                Search:
                                                                <div class="input-group">
                                                                    <input v-model="filtertxt" type="search" class="form-control"/>
                                                                    <span v-show="ajax" class="input-group-addon" style="cursor:pointer" @click="search">
                                                                        <i class="fa fa-search"></i>
                                                                    </span>
                                                                </div>
                                                            </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-12" style="overflow-x:auto;">
                                                    <table id="data" class="table table-striped table-bordered dataTable no-footer" role="grid" aria-describedby="data_info" style="width: 737px;">
                                                        <thead>
                                                            <tr role="row">
                                                                <th width="60px;">
                                                                    <input type="checkbox" v-model="checked_all" @click="checkeall"> &nbsp;# </th>
                                                                <th v-for="(col,idx) in columns" v-if="col.gridview" :tabindex="idx" :key="idx" :class="{ active: sortKey == col.key }" :style="{ cursor: col.orderable ? 'pointer' : '' }" @click="sortBy(col)" >
                                                                    <div style="display:inline-flex;align-items:center;flex-wrap: nowrap;">
                                                                        <span style="white-space: nowrap;">{{col.label}}</span>
                                                                        <i v-show="col.orderable && sortKey != col.key " class="fa fa-sort pull-right" style="color: #ddd;" aria-hidden="true"></i>
                                                                        <i v-show="col.orderable && sortKey==col.key && sortOrders[col.key]==1" style="display:none" class="fa fa-sort-asc pull-right" aria-hidden="true"></i>
                                                                        <i v-show="col.orderable && sortKey==col.key && sortOrders[col.key]==-1" style="display:none" class="fa fa-sort-desc pull-right" aria-hidden="true"></i>
                                                                    </div>
                                                                </th>
                                                                <th>Option</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr v-for="(row,index) in lists" role="row" class="">
                                                                <td style="display:flex" ><input type="checkbox" v-model="row.checked">&nbsp; {{index+1}}</td>
                                                                <td v-for="(col,idx) in columns" :key="idx" v-if="col.gridview">
                                                                    <tableitem  :col="col" :item="row" />
                                                                </td>
                                                                <td style="cursor: pointer;display:inline-flex;align-items:center;flex-wrap: nowrap;">
                                                                    <i v-if="info.v_view" @click="view(row)" class="fa fa-fw fa-eye text-primary"></i> 
                                                                    <i v-if="info.v_update" @click="edit(row)" alt="edit" aria-hidden="true" class="fa fa-pencil"></i>
                                                                    <!-- <i v-if="info.v_update" @click="updatedtablerow(row)" alt="save" aria-hidden="true" class="fa fa-save"></i> -->
                                                                    <!-- <i v-if="info.v_import" @click="changeview('v_import')" alt="reset password" aria-hidden="true" class="fa fa-key"></i>   -->
                                                                    <!-- <i v-if="info.v_export" @click="changeview('v_export')" alt="reset password" aria-hidden="true" class="fa fa-key"></i>   -->
                                                                    <i v-if="info.v_delete" @click="deleterow(row)" alt="delete" aria-hidden="true" class="fa fa-times-circle " style="color: red;"></i>
                                                                    <i v-if="info.v_print" @click="printv(row)" alt="print" aria-hidden="true" class="fa fa-print"></i> 
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                        <thead>
                                                            <tr role="row">
                                                                <th width="60px;">
                                                                    <input type="checkbox" v-model="checked_all" @click="checkeall"> &nbsp;# </th>
                                                                <th v-for="(col,idx) in columns" v-if="col.gridview" :tabindex="idx" :key="idx" :class="{ active: sortKey == col.key }" :style="{ cursor: col.orderable ? 'pointer' : '' }" @click="sortBy(col)" >
                                                                    <div style="display:inline-flex;align-items:center;flex-wrap: nowrap;">
                                                                        <span style="white-space: nowrap;">{{col.label}}</span>
                                                                        <i v-show="col.orderable && sortKey != col.key " class="fa fa-sort pull-right" style="color: #ddd;" aria-hidden="true"></i>
                                                                        <i v-show="col.orderable && sortKey==col.key && sortOrders[col.key]==1" style="display:none" class="fa fa-sort-asc pull-right" aria-hidden="true"></i>
                                                                        <i v-show="col.orderable && sortKey==col.key && sortOrders[col.key]==-1" style="display:none" class="fa fa-sort-desc pull-right" aria-hidden="true"></i>
                                                                    </div>
                                                                </th>
                                                                <th>Option</th>
                                                            </tr>
                                                        </thead>
                                                    </table>
                                                    <div id="data_processing" class="dataTables_processing panel panel-default" style="display: none;">
                                                        Processing...
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-5">
                                                    <div class="dataTables_info" id="data_info" role="status" aria-live="polite">
                                                    </div>
                                                </div>
                                                <div class="col-sm-7">
                                                    <div class="dataTables_paginate paging_simple_numbers" id="data_paginate">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-5">
                                        <div class="dataTables_info" id="data_info" role="status" aria-live="polite">
                                        </div>
                                    </div>
                                    <div class="col-sm-7">
                                        <div class="dataTables_paginate paging_simple_numbers" id="data_paginate">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-5">
                            <div class="dataTables_info" id="data_info" role="status" aria-live="polite">
                                Showing {{itempagestart}} to {{itempageend}} of {{total}} entries
                            </div>
                        </div>
                        <div class="col-sm-7">
                            <paginate ref="paginate" :page-count="totalpage" :prev-text="'Prev'" :next-text="'Next'" :click-handler="changepage" :container-class="'pagination'">
                            </paginate>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`,
    name: "vlist",
    mixins: [],
    data() {
        return {
            theme: "AdminLte"
        };
    },
    created() {
        window.vc = this;
        console.log("vc computer is created");
    },
    mounted() {},
    methods: {},
    computed: {},
    components: {
        tableitem: Tableitem,
        fieldinsert: Fieldinsert,
        fieldedit: Fieldedit,
        viewitem: Viewitem,
        printa4table: Printa4table
    }
};