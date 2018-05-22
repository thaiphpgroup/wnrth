export default {
    template: `<div><h1>Home</h1>
    
        <router-link to="/test">Test</router-link>
        <router-link to="/book">Book</router-link>
    
    </div>`,
    data() {
        return {};
    },
    mounted() {
        this.$nextTick(() => {
            this.$store.commit("hide");
            console.log("mounted---->", this.$store.state.overlay);
            console.log("page--------------------->", this.$options.name);
            window.vc = this;
        });
    }
};