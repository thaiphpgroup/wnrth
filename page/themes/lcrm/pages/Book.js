import Crudlayout from "../components/crudlayout.js";
import crudmix from "../mixins/CrudMixin.js";

export default {
    template: `<Crudlayout>
    
    </Crudlayout>`,
    mixins: [crudmix],
    name: "Book",
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
        Crudlayout
    }
};