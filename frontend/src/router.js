import Vue from 'vue';
import Router from 'vue-router';
import Create from './views/events/Create.vue';
import Read from './views/events/Read.vue';
import Edit from './views/events/Edit.vue';
import Events from './views/events/Events.vue';
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
            path: '/events/new',
            name: 'event-new',
            component: Create
        },
        {
            path: '/events/:id',
            name: 'event-read',
            component: Read
        },
        {
            path: '/events/:id/edit',
            name: 'event-edit',
            component: Edit
        }
    ]
});

export {
    router as default
};