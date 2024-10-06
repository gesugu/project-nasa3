import {createWebHistory, createRouter} from "vue-router"
// import Home from "../views/home/home.vue"
import Models from "../views/models/models.vue"
import Help from "../views/help/help.vue"
import Model from "../views/models/model/model.vue"
import Planet from '../views/models/model/planet/planet.vue'

import About from '../views2/about/about.vue'
import Gallery from '../views2/gallery/gallery.vue'
import History from '../views2/history/history.vue'
import View from '../views2/view/view.vue'
import Image from '../views2/gallery/images/image.vue'
import Home from '../views2/home/home.vue'
import Video from '../views2/video/video.vue'

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about/",
        name: "About",
        component: About,
    },
    {
        path: "/gallery/",
        name: "Gallery",
        component: Gallery,
    },
    {
        path: "/image/:id",
        name: "Image",
        component: Image,
    },
    {
        path: "/history",
        name: "History",
        component: History,
    },
    {
        path: "/view",
        name: "View",
        component: View,
    },
    {
        path: "/video",
        name: "Video",
        component: Video,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

export default router