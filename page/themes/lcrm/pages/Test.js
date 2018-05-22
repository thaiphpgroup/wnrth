import Crudlayout from "../components/crudlayout.js";
import crudmix from "../mixins/CrudMixin.js";

export default {
    template: `<Crudlayout v-bind="$data">
      <h1 slot="vlist">Nolist</h1>
    </Crudlayout>`,
    name: "maintest",
    mixins: [crudmix],
    data() {
        return {
            theme: "AdminLte"
        };
    },
    created() {
        window.vcm = this;
        console.log("vc computer is created", vcm);
    },
    mounted() {},
    methods: {},
    computed: {},
    components: {
        Crudlayout
    }
};