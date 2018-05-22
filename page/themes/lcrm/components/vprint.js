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
                <button @click="changeview('v_lists')" class="btn btn-primary">
                        <i class="fa fa-arrow-left"></i> Back
                    </button>
            </div>
        </div>
        <div class="panel panel-default" style="position: relative;" >
            <div class="panel-heading">
                <h4 class="panel-title">
                    <i class="material-icons">archive</i> {{title}} Print
                </h4>
                <span class="pull-right">
                     <i class="fa fa-fw fa-chevron-up clickable">
                     </i>
                     </span>
            </div>
            <div class="panel-body" style="display: block;">
                <div class="form-group">
                    <div class="controls">
                        <a @click="changeview('v_lists')" href="#" class="btn btn-primary"><i class="fa fa-arrow-left"></i> Back</a>
                        <button @click="print" type="button" class="btn btn-success"><i class="fa fa-print"></i> PRINT</button>
                    </div>
                </div>
            </div>
        </div>
        <div id="preview" >
            <printa4table />
        </div>
    </div>`,
    name: "vprint",
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