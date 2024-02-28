import { defineConfig } from '@umijs/max';
import { ROUTER } from './src/constants';

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
      path: ROUTER.root,
      redirect: ROUTER.home,
    },
    { path: ROUTER.home, name: '首页', component: 'index' },
    { path: ROUTER.docs, name: '文档', component: 'docs' },
    {
      path: ROUTER.tailwind,
      name: 'tailwind 测试',
      component: 'tests/tailwind',
    },
    {
      path: ROUTER.taskDetail,
      component: 'todo/pages/task-detail',
    },
    {
      path: ROUTER.taskList,
      name: 'todo-list',
      component: 'todo/pages/task-list',
    },
    {
      path: ROUTER.turnplate,
      name: 'turnplate',
      component: 'turnplate',
    },
    {
      path: ROUTER.editTurnplate,
      component: 'turnplate/pages/edit.tsx',
    },
  ],
  npmClient: 'pnpm',
  tailwindcss: {},
});
