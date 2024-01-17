import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    { path: '/', component: 'index' },
    { path: '/docs', component: 'docs' },
    { path: '/test/tailwind', component: 'tests/tailwind' },
    { path: '/todo/pages/task-detail', component: 'todo/pages/task-detail' },
    { path: '/todo/pages/task-list', component: 'todo/pages/task-list' },
  ],

  npmClient: 'pnpm',
  tailwindcss: {},
  plugins: ['@umijs/plugins/dist/tailwindcss'],
});
