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
                    <i class="material-icons">archive</i> Import {{title}}
                </h4>
                <span class="pull-right">
                     <i class="fa fa-fw fa-chevron-up clickable">
                     </i>
                     </span>
            </div>
            <div class="panel-body" style="display: block;">
                <div class="right_cont">
                    <div>
                        <form class="form-horizontal">
                            <div data-provides="fileinput" class="fileinput fileinput-new">
                                <span class="btn btn-default btn-file">
                    <span class="fileinput-new">Select file</span>
                                <span class="fileinput-exists">Change</span>
                                <input type="file" name="..."></span> <span class="fileinput-filename"></span>
                                <a href="#" data-dismiss="fileinput" class="close fileinput-exists import-cat">×</a></div> <br>
                            <button class="btn btn-primary">Upload and Review</button> <a href="#" class="btn btn-primary">Download Template</a></form>
                        <!---->
                        <div class="table-responsive">
                            <!---->
                        </div>
                        <div class="row">
                            <div class="col-md-12"><a href="" class="btn btn-primary pull-right disabled" style="display: none;">Create Selected</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`,
    name: "vimport",
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