import mockjs from 'mockjs';

export default {
  '/api/todo-list': [
    { id: '1', type: 'todo', label: 'first' },
    { id: '2', type: 'add', label: 'second' },
  ],

  '/api/dodo-detail/1': { type: 'todo', label: 'first' },

  'GET /api/tags': mockjs.mock({
    'list|100': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }],
  }),
};
