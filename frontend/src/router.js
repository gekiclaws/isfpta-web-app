import Vue from 'vue';
import Router from 'vue-router';

import CreateEvent from './views/events/Create.vue';
import ReadEvent from './views/events/Read.vue';
import EditEvent from './views/events/Edit.vue';
import Events from './views/events/ViewAll.vue';

import CreateNews from './views/news/Create.vue';
import ReadNews from './views/news/Read.vue';
import EditNews from './views/news/Edit.vue';
import News from './views/news/ViewAll.vue';

import Service from './views/service/ViewAll.vue';
import ReadService from './views/service/Read.vue';
import EditService from './views/service/Edit.vue';
import CreateService from './views/service/Create.vue';

import Volunteer from './views/volunteer/ViewAll.vue';

import Main from './views/Main.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'main',
            component: Main,
            meta: {
                title: 'Home'
            }
        },
        {
            path: '/events',
            name: 'events',
            component: Events,
            meta: {
                title: 'Events'
            }
        },
        {
            path: '/events/create',
            name: 'event-create',
            component: CreateEvent,
            meta: {
                title: 'Create event'
            }
        },
        {
            path: '/events/:id',
            name: 'event-read',
            component: ReadEvent
        },
        {
            path: '/events/:id/edit',
            name: 'event-edit',
            component: EditEvent,
            meta: {
                title: 'Edit event'
            }
        },
        {
            path: '/pta-network-news',
            name: 'news',
            component: News,
            meta: {
                title: 'PTA Network News'
            }
        },
        {
            path: '/pta-network-news/create',
            name: 'news-create',
            component: CreateNews,
            meta: {
                title: 'Create news'
            }
        },
        {
            path: '/pta-network-news/:id',
            name: 'news-read',
            component: ReadNews
        },
        {
            path: '/pta-network-news/:id/edit',
            name: 'news-edit',
            component: EditNews,
            meta: {
                title: 'Edit news'
            }
        },
        {
            path: '/community-service',
            name: 'service',
            component: Service,
            meta: {
                title: 'Community Service'
            }
        },
        {
            path: '/community-service/create',
            name: 'service-create',
            component: CreateService,
            meta: {
                title: 'Create service opportunity'
            }
        },
        {
            path: '/community-service/:id',
            name: 'service-read',
            component: ReadService
        },
        {
            path: '/community-service/:id/edit',
            name: 'service-edit',
            component: EditService,
            meta: {
                title: 'Edit service opportunity'
            }
        },
        {
            path: '/volunteer-programs',
            name: 'volunteer',
            component: Volunteer,
            meta: {
                title: 'Volunteer Programs'
            }
        }
    ]
});

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
    // This goes through the matched routes from last to first, finding the closest route with a title.
    // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
    
   // If a route with a title was found, set the document (page) title to that value.
    if(nearestWithTitle) document.title = nearestWithTitle.meta.title;
  
    next();
  });
  

export {
    router as default
};