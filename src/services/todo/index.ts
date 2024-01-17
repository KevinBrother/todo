import { request } from '@umijs/max';
export const TodoController = {
  getTodoList() {
    return request();
  },
};
