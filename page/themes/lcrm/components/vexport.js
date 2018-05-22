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
                    <i class="material-icons">archive</i> {{title}} export
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
                        <download-excel class="btn btn-default" type="slx" :data="exportdatas()" :name="exportxlsx()" v-bind:fields="json_fields()">
                            Download Excel
                        </download-excel>
                        <download-excel type="csv" class="btn btn-default" :data="exportdatas()" v-bind:name="exportcsv()" v-bind:fields="json_fields()">
                            Download CSV
                        </download-excel>
                    </div>
                </div>
            </div>
        </div>
    </div>`,
    name: "vexport",
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
    computed: {}
};