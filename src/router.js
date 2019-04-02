import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
    {
        path: '*',
        redirect: '/home'
    },
    {
        name: 'home',
        component: () => import('./Home.vue'),
        meta: {
            title: 'home'
        }
    },
    {
        path: '/tab/:id',
        name: 'tab',
        component: () => import('./components/Tab.vue'),
        meta: {
            title: 'tab'
        }
    },
    {
        path: '/slide/:id',
        name: 'slide',
        component: () => import('./components/Slide.vue'),
        meta: {
            title: 'slide'
        }
    },
    {
        path: '/iview',
        name: 'iview',
        component: () => import('./components/Iview.vue'),
        meta: {
            title: 'iview'
        }
    },
    {
        path: '/virtualSlides',
        name: 'virtualSlides',
        component: () => import('./components/VirtualSlides.vue'),
        meta: {
            title: 'virtualSlides'
        }
    }
];

// add route path
routes.forEach(route => {
    route.path = route.path || '/' + (route.name || '');
});

const router = new Router({ routes });

router.beforeEach((to, from, next) => {
    const title = to.meta && to.meta.title;
    if (title) {
        document.title = title;
    }
    next();
});

export {
    router
};