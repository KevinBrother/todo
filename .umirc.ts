import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'TODO',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    { path: '/home', name: '首页', component: 'index' },
    { path: '/docs', name: '文档', component: 'docs' },
    {
      path: '/test/tailwind',
      name: 'tailwind 测试',
      component: 'tests/tailwind',
    },
    {
      path: '/todo/pages/task-detail',
      component: 'todo/pages/task-detail',
    },
    {
      path: '/todo/pages/task-list',
      name: 'todo-list',
      component: 'todo/pages/task-list',
    },
  ],
  npmClient: 'pnpm',
  tailwindcss: {},
});
