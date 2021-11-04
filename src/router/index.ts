import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Tasks from '@/components/items/Tasks.vue';
import Activity from '@/components/items/Activity.vue';
import Calendar from '@/components/items/Calendar.vue';
import Kanban from '@/components/items/Kanban.vue';
import Files from '@/components/items/Files.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'activity',
        component: Activity,
      },
      {
        path: 'tasks',
        component: Tasks,
      },
      {
        path: 'calendar',
        component: Calendar,
      },
      {
        path: 'kanban',
        component: Kanban,
      },
      {
        path: 'files',
        component: Files,
      },
      {
        path: '',
        component: Activity,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
