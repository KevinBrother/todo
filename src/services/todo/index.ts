import { request } from '@umijs/max';
export const TodoController = {
  getTodoList() {
    return request('/api/todo-list', {
      method: 'GET',
    });
  },
  getTodoDetail(todoId: string) {
    return request(`/api/todo-detail/${todoId}`, {
      method: 'GET',
    });
  },
};
