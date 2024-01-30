export default class TodoService {
  all() {
    return [
      {
        id: 1,
        title: 'Learn Adonis',
        completed: false,
      },
      {
        id: 2,
        title: 'Build a todo app',
        completed: false,
      },
    ]
  }
}
