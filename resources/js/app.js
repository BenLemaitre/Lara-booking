require("./bootstrap");

import router from "./routes";
import VueRouter from "vue-router";
import Index from "./Index";
import moment from "moment";
import StarRating from "./shared/components/StarRating";

window.Vue = require("vue");

Vue.use(VueRouter);

// Global filter [formatter]
Vue.filter("fromNow", value => {
    return moment(value).fromNow();
});

// Global component
Vue.component("star-rating", StarRating);

const app = new Vue({
    el: "#app",
    router,
    components: {
        index: Index
    }
});
