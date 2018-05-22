export default {
    template: `
    <div>
    <h1>{{$parent.title}}</h1>
    <div v-show="$parent.viewstate.v_lists" ref="v_lists" >
        <slot name="vlist">
            <div class="page-header clearfix">
                <div class="pull-right"> 
                
                    <button v-if="$parent.info.v_insert"  class="btn btn-primary" @click="$parentinsert" v-show="!$parent.viewstate.v_insert" ><i class="fa fa-plus-circle"></i> Insert</button>
                    <button v-if="$parent.info.v_import"  class="btn btn-primary" @click="$parentchangeview('v_import')"><i class="fa fa-download"></i> Import</button>
                    <button v-if="$parent.info.v_export"  class="btn btn-primary" @click="$parentchangeview('v_export')"><i class="fa fa-upload"></i> Export</button>
                    <button v-if="$parent.info.v_print"   class="btn btn-primary" @click="$parent.printv"><i class="fa fa-print"></i> Print</button>
                </div>
            </div>
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h4 class="panel-title">
                        <i class="material-icons">
                            archive</i> {{$parent.title}}
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
                                                                    <select v-model="$parent.perpage" @change="$parent.changeperpage" name="data_length" aria-controls="data" class="form-control input-sm">
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
                                                                        <input v-model="$parent.filtertxt" type="search" class="form-control"/>
                                                                        <span v-show="$parent.ajax" class="input-group-addon" style="cursor:pointer" @click="$parent.search">
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
                                                                        <input type="checkbox" v-model="$parent.checked_all" @click="$parent.checkeall"> &nbsp;# </th>
                                                                    <th v-for="(col,idx) in $parent.columns" v-if="$parent.col.gridview" :tabindex="idx" :key="idx" :class="{ active: sortKey == col.key }" :style="{ cursor: col.orderable ? 'pointer' : '' }" @click="$parent.sortBy(col)" >
                                                                        <div style="display:inline-flex;align-items:center;flex-wrap: nowrap;">
                                                                            <span style="white-space: nowrap;">{{col.label}}</span>
                                                                            <i v-show="col.orderable && $parent.sortKey != col.key " class="fa fa-sort pull-right" style="color: #ddd;" aria-hidden="true"></i>
                                                                            <i v-show="col.orderable && $parent.sortKey==col.key && $parent.sortOrders[col.key]==1" style="display:none" class="fa fa-sort-asc pull-right" aria-hidden="true"></i>
                                                                            <i v-show="col.orderable && $parent.sortKey==col.key && $parent.sortOrders[col.key]==-1" style="display:none" class="fa fa-sort-desc pull-right" aria-hidden="true"></i>
                                                                        </div>
                                                                    </th>
                                                                    <th>Option</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr v-for="(row,index) in $parent.lists" role="row" class="">
                                                                    <td style="display:flex" ><input type="checkbox" v-model="row.checked">&nbsp; {{index+1}}</td>
                                                                    <td v-for="(col,idx) in $parent.columns" :key="idx" v-if="col.gridview">
                                                                        <tableitem  :col="col" :item="row" />
                                                                    </td>
                                                                    <td style="cursor: pointer;display:inline-flex;align-items:center;flex-wrap: nowrap;">
                                                                        <i v-if="$parent.info.v_view" @click="view(row)" class="fa fa-fw fa-eye text-primary"></i> 
                                                                        <i v-if="$parent.info.v_update" @click="edit(row)" alt="edit" aria-hidden="true" class="fa fa-pencil"></i>
                                                                        <!-- <i v-if="$parent.info.v_update" @click="updatedtablerow(row)" alt="save" aria-hidden="true" class="fa fa-save"></i> -->
                                                                        <!-- <i v-if="$parent.info.v_import" @click="changeview('v_import')" alt="reset password" aria-hidden="true" class="fa fa-key"></i>   -->
                                                                        <!-- <i v-if="$parent.info.v_export" @click="changeview('v_export')" alt="reset password" aria-hidden="true" class="fa fa-key"></i>   -->
                                                                        <i v-if="$parent.info.v_delete" @click="$parent.deleterow(row)" alt="delete" aria-hidden="true" class="fa fa-times-circle " style="color: red;"></i>
                                                                        <i v-if="$parent.info.v_print" @click="$parent.printv(row)" alt="print" aria-hidden="true" class="fa fa-print"></i> 
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                            <thead>
                                                                <tr role="row">
                                                                    <th width="60px;">
                                                                        <input type="checkbox" v-model="$parent.checked_all" @click="$parent.checkeall"> &nbsp;# </th>
                                                                    <th v-for="(col,idx) in $parent.columns" v-if="col.gridview" :tabindex="idx" :key="idx" :class="{ active: $parent.sortKey == col.key }" :style="{ cursor: col.orderable ? 'pointer' : '' }" @click="$parent.sortBy(col)" >
                                                                        <div style="display:inline-flex;align-items:center;flex-wrap: nowrap;">
                                                                            <span style="white-space: nowrap;">{{col.label}}</span>
                                                                            <i v-show="col.orderable && $parent.sortKey != col.key " class="fa fa-sort pull-right" style="color: #ddd;" aria-hidden="true"></i>
                                                                            <i v-show="col.orderable && $parent.sortKey==col.key && $parent.sortOrders[col.key]==1" style="display:none" class="fa fa-sort-asc pull-right" aria-hidden="true"></i>
                                                                            <i v-show="col.orderable && $parent.sortKey==col.key && $parent.sortOrders[col.key]==-1" style="display:none" class="fa fa-sort-desc pull-right" aria-hidden="true"></i>
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
                                    Showing {{$parent.itempagestart}} to {{$parent.itempageend}} of {{$parent.total}} entries
                                </div>
                            </div>
                            <div class="col-sm-7">
                                <paginate ref="paginate" :page-count="$parent.totalpage" :prev-text="'Prev'" :next-text="'Next'" :click-handler="$parent.changepage" :container-class="'pagination'">
                                </paginate>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </slot>
    </div>
    
    <div class="vprint" v-show="$parent.viewstate.v_print" ref="v_print" >
        <slot name="vprint">
        </slot>
    </div>
    
    <div v-show="$parent.viewstate.v_update" ref="v_update"  >
        <slot name="vupdate">
        </slot>
    </div>

    <div v-show="$parent.viewstate.v_insert" ref="v_insert"  >
        <slot name="vinsert">
        </slot>
    </div>

    <div v-show="$parent.viewstate.v_delete" ref="v_delete"  >
        <slot name="vdelete">
        </slot>
    </div>

    <div v-show="$parent.viewstate.v_import" ref="import"  >
        <slot name="vimport">
        </slot>
    </div>

    <div v-show="$parent.viewstate.v_export" ref="export"  >
        <slot name="vexport">
        </slot>
    </div>

    <div v-show="$parent.viewstate.v_view" ref="view"  >
        <slot name="vview">
        </slot>
    </div>
</div>`,
    name: "crudlayout",
    data() {
        return {
            theme: "AdminLte"
        };
    },
    created() {
        window.vc = this;
        console.log("vcrudlayout computer is created");
    },
    mounted() {},
    methods: {},
    computed: {},
    components: { }
};