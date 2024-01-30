import TodoService from '#services/todo_service'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class TodosController {
  constructor(protected todosService: TodoService) {}

  async index(ctx: HttpContext) {
    const todos = this.todosService.all()

    return ctx.view.render('pages/index', { todos })
  }
}
