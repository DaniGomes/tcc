'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('/users', 'UserController.create')
Route.get('/users/:id', 'UserController.show')

Route.post('/sessions', 'SessionController.create')

Route.resource('/alunos', 'AlunoController').apiOnly() // .middleware('auth')

Route.resource('/professores', 'ProfessorController').apiOnly() // .middleware('auth')

Route.resource('/disciplinas', 'DisciplinaController').apiOnly() // .middleware('auth')

Route.resource('disciplinas.atividades', 'AtividadeController').apiOnly() // .middleware('auth')

Route.resource('/modelos', 'ModeloController').apiOnly() // .middleware('auth')

Route.resource('/tipos', 'TipoController').apiOnly() // .middleware('auth')

Route.resource('/submissoes', 'SubmissaoController').apiOnly() // .middleware('auth')

Route.post('/alunosDisciplina', 'DisciplinaController.getAlunos')

Route.get('/atividades', 'AtividadeController.all')
