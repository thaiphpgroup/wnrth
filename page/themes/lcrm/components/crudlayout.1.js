import Vview from "./vview.js";
import Vinsert from "./vinsert.js";
import Vprint from "./vprint.js";
import Vdelete from "./vdelete.js";
import Vlist from "./vlist.js";
import Vimport from "./vimport.js";
import Vexport from "./vexport.js";
import crudmix from "../mixins/CrudMixin.js";

export default {
    template: `
    <div>
    <h1>{{title}}</h1>
    <div v-show="viewstate.v_lists" ref="v_lists" >
        <slot name="vlist">
            <Vlist />
        </slot>
    </div>
    
    <div class="vprint" v-show="viewstate.v_print" ref="v_print" >
        <slot name="vprint">
            <Vprint />
        </slot>
    </div>
    
    <div v-show="viewstate.v_update" ref="v_update"  >
        <slot name="vupdate">
            <Vupdate />
        </slot>
    </div>

    <div v-show="viewstate.v_insert" ref="v_insert"  >
        <slot name="vinsert">
            <Vinsert />
        </slot>
    </div>

    <div v-show="viewstate.v_delete" ref="v_delete"  >
        <slot name="vdelete">
            <Vdelete />
        </slot>
    </div>

    <div v-show="viewstate.v_import" ref="import"  >
        <slot name="vimport">
            <Vimport />
        </slot>
    </div>

    <div v-show="viewstate.v_export" ref="export"  >
        <slot name="vexport">
            <Vexport />
        </slot>
    </div>

    <div v-show="viewstate.v_view" ref="view"  >
        <slot name="vview">
            <Vview />
        </slot>
    </div>
</div>`,
    name: "crudlayout",
    mixins: [crudmix],
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
        Vview,
        Vinsert,
        Vprint,
        Vdelete,
        Vlist,
        Vimport,
        Vexport
    }
};