import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _806dd8a6 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _f6ae564c = () => import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */).then(m => m.default || m)
const _10bbcb72 = () => import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */).then(m => m.default || m)
const _3b061284 = () => import('../pages/login/register.vue' /* webpackChunkName: "pages/login/register" */).then(m => m.default || m)
const _ae76540e = () => import('../pages/blog/detail.vue' /* webpackChunkName: "pages/blog/detail" */).then(m => m.default || m)
const _6d44c16c = () => import('../pages/blog/addart.vue' /* webpackChunkName: "pages/blog/addart" */).then(m => m.default || m)
const _6e3fc388 = () => import('../pages/article/_id.vue' /* webpackChunkName: "pages/article/_id" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _806dd8a6,
			name: "index"
		},
		{
			path: "/blog",
			component: _f6ae564c,
			name: "blog"
		},
		{
			path: "/login",
			component: _10bbcb72,
			name: "login"
		},
		{
			path: "/login/register",
			component: _3b061284,
			name: "login-register"
		},
		{
			path: "/blog/detail",
			component: _ae76540e,
			name: "blog-detail"
		},
		{
			path: "/blog/addart",
			component: _6d44c16c,
			name: "blog-addart"
		},
		{
			path: "/article/:id?",
			component: _6e3fc388,
			name: "article-id"
		}
    ],
    fallback: false
  })
}
