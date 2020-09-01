'use strict'
const User = use('App/Models/User')
const Professor = use('App/Models/Professor')
const Aluno = use('App/Models/Aluno')

class ProfessorController {
  async index ({ request, response, view }) {
    const professores = await Professor.query()
      .with('usuario')
      .fetch()
    return professores
  }

  async store ({ request, response }) {
    const userData = request.only(['username', 'name', 'email', 'password'])
    const professorData = request.only(['origem'])
    const orientados = request.input('orientados')

    const user = await User.create(userData)
    const professor = await user.professor().create(professorData)

    if (orientados) {
      await Aluno.query()
        .whereIn('id', orientados)
        .update({ orientador: professor.id })
    }

    await professor.load('usuario')
    await professor.load('orientados', builder => {
      builder.with('usuario')
    })

    return professor
  }

  async show ({ params, request, response, view }) {
    const professor = await Professor.find(params.id)
    await professor.load('usuario')
    await professor.load('orientados', builder => {
      builder.with('usuario')
    })

    return professor
  }

  async update ({ params, request, response }) {
    const userData = request.only(['password', 'email'])
    const professor = request.only(['origem'])

    const user = await User.find(params.id)
    user.merge(userData)

    await user.save()
    await user.professor().update(professor)
    await user.load('professor')
    await user.load('orientados', builder => {
      builder.with('usuario')
    })

    return user
  }

  async destroy ({ params, request, response }) {}
}

module.exports = ProfessorController
