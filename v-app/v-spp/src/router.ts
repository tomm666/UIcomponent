import Vue from "vue";
import Router from "vue-router";
import layout from "@/views/layout/index.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "layout",
      component: layout,
			children: [
				 
			]
    },
   {
     path: "/about",
     name: "about",
     // route level code-splitting
     // this generates a separate chunk (about.[hash].js) for this route
     // which is lazy-loaded when the route is visited.
     component: () =>
       import(/* webpackChunkName: "about" */ "./views/About.vue")
   },
   {
     path: "/input",
     name: "input",
     // route level code-splitting
     // this generates a separate chunk (about.[hash].js) for this route
     // which is lazy-loaded when the route is visited.
     component: () =>
       import(/* webpackChunkName: "input" */ "./views/layout/input-number.vue")
   },
   {
   	path: "/tabs",
   	name: "tabs",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
   	component: () => 
   		import(/* webpackChunkName: "tabs" */  "./views/layout/tab.vue")

   }
  ]
});
