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
                <button @click="changeview('v_lists')" class="btn btn-primary"><i class="fa fa-arrow-left"></i> Back</button>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading">
                <h4 class="panel-title">
                    <i class="material-icons">archive</i> {{title}} view
                </h4>
                <span class="pull-right">
                                 <i class="fa fa-fw fa-chevron-up clickable">
                                 </i>
                                 </span>
            </div>
            <div class="panel-body" style="display: block;">
                <div class="right_cont">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="page-header clearfix"></div>
                            <div class="details">
                                <div class="panel panel-primary">
                                    <div class="panel-body">
                                        <div v-for="(item,idx) in viewobj()" :key="idx" class="form-group">
                                            <label for="title" class="control-label">{{item.label}}</label>
                                            <div class="controls">
                                                <span v-if="(item.label).toLowerCase() == 'status'">{{fcstatus(item.value)}}</span>
                                                <span v-else>{{item.value}}</span>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="controls">
                                                <button @click="changeview('v_lists')" class="btn btn-primary"><i class="fa fa-arrow-left"></i> Back</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`,
    name: "vview",
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