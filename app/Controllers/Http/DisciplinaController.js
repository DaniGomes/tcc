'use strict'
const Disciplina = use('App/Models/Disciplina')
const Database = use('Database')

class DisciplinaController {
  async index ({ request, response, view }) {
    const disciplinas = await Disciplina.all()
    return disciplinas
  }

  async store ({ request, response }) {
    const data = request.only(['nome', 'codigo', 'coordenador'])

    const disciplina = await Disciplina.create(data)

    return disciplina
  }

  async show ({ params, request, response, view }) {
    const disciplina = await Disciplina.find(params.id)
    const atividades = await disciplina.atividades()

    return atividades
  }

  async update ({ params, request, response }) {
    const data = request.only(['nome', 'codigo', 'coordenador'])

    const affectedRows = await Database
      .table('disciplinas')
      .where('id', params.id)
      .update({ nome: data.nome, codigo: data.codigo, coordenador: data.coordenador })

    return affectedRows
  }

  async destroy ({ params, request, response }) {}

  async getAlunos ({ params, request }) {
    const data = request.only(['id'])
    const disciplina = await Disciplina.find(data.id)
    const alunos = await disciplina.matriculados()

    return alunos
  }
}

module.exports = DisciplinaController
