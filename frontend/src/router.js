import Vue from 'vue';
import Router from 'vue-router';

import CreateEvent from './views/events/Create.vue';
import ReadEvent from './views/events/Read.vue';
import EditEvent from './views/events/Edit.vue';
import Events from './views/events/Events.vue';

import CreateNews from './views/news/Create.vue';
import ReadNews from './views/news/Read.vue';
import EditNews from './views/news/Edit.vue';
import News from './views/news/News.vue';

import Main from './views/Main.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'main',
            component: Main
        },
        {
            path: '/events',
            name: 'events',
            component: Events
        },
        {
            path: '/events/create',
            name: 'event-create',
            component: CreateEvent
        },
        {
            path: '/events/:id',
            name: 'event-read',
            component: ReadEvent
        },
        {
            path: '/events/:id/edit',
            name: 'event-edit',
            component: EditEvent
        },
        {
            path: '/news',
            name: 'news',
            component: News
        },
        {
            path: '/news/create',
            name: 'news-create',
            component: CreateNews
        },
        {
            path: '/news/:id',
            name: 'news-read',
            component: ReadNews
        },
        {
            path: '/news/:id/edit',
            name: 'news-edit',
            component: EditNews
        }
    ]
});

export {
    router as default
};