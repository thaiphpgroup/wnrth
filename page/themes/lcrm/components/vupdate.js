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
                <button @click="updatecancel" class="btn btn-primary">
                        <i class="fa fa-arrow-left"></i> Back
                    </button>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading">
                <h4 class="panel-title">
                    <i class="material-icons">archive</i> {{title}} Update
                </h4>
                <span class="pull-right">
                     <i class="fa fa-fw fa-chevron-up clickable">
                     </i>
                     </span>
            </div>
            <div class="panel-body" style="display: block;">
                <form method="POST" action="#" accept-charset="UTF-8" id="company" enctype="multipart/form-data" novalidate="novalidate" class="bv-form">
                    <div v-for="(item,idx) in updateobj()" :key="idx" class="row">
                        <fieldedit :col="item" :item="row_update" />
                    </div>
                    <div class="form-group">
                        <div class="controls">
                            <a @click="updatecancel('v_lists')" href="#" class="btn btn-primary"><i class="fa fa-arrow-left"></i> Back</a>
                            <button @click="updated()" type="button" class="btn btn-success"><i class="fa fa-check-square-o"></i> OK</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>`,
    name: "vupdate",
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