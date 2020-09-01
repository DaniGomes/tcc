'use strict'
const User = use('App/Models/User')
const Aluno = use('App/Models/Aluno')
const Disciplina = use('App/Models/Disciplina')

class AlunoController {
  async index ({ request, response, view }) {
    const alunos = await Aluno.query()
      .with('usuario')
      .with('disciplinas')
      .fetch()
    return alunos
  }

  async store ({ request, response }) {
    const userData = request.only(['username', 'name', 'email', 'password'])
    const alunoData = request.only(['tema', 'orientador', 'coorientador'])
    //const disciplinas = request.input('disciplinas')
    const materias = await Disciplina.all()
    const disciplinas = materias.toJSON()

    const user = await User.create(userData)
    const aluno = await user.aluno().create(alunoData)
    disciplinas.forEach(dis => {
      aluno.disciplinas().attach(dis.id)
    })
    aluno.load('usuario')
    aluno.load('disciplinas')
    return aluno
  }

  async update ({ params, request, response }) {
    const userData = request.only(['password', 'email'])
    const alunoData = request.only(['tema', 'orientador', 'coorientador'])

    const user = await User.find(params.id)
    user.merge(userData)

    await user.save()
    await user.aluno().update(alunoData)
    await user.load('aluno')

    return user
  }

  async show ({ params, request, response, view }) {
    const aluno = await Aluno.find(params.id)
    await aluno.load('usuario')

    return aluno
  }

  async destroy ({ params, request, response }) {}
}

module.exports = AlunoController
