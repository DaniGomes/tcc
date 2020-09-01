'use strict'
const Atividade = use('App/Models/Atividade')
const Database = use('Database')

class AtividadeController {

  async all({ request, response, params }) {
    return Atividade.all()
  }

  async index ({ request, response, params }) {
    const atividades = await Atividade.query().where({
      disciplina_id: params.disciplinas_id
    })

    return atividades
  }

  async store ({ request, response }) {
    const data = request.only([
      'nome',
      'prazo',
      'validacao',
      'avaliacao',
      'observacoes',
      'modelo',
      'liberada',
      'disciplina_id'
    ])

    const atividade = await Atividade.create(data)

    return atividade
  }

  async show ({ params, request, response, view }) {
    const atividades = await Atividade.findByOrFail({
      disciplina_id: params.disciplinas_id,
      id: params.id
    })

    return atividades
  }

  async update ({ params, request, response }) {
    const data = request.only(['nome', 'modelo', 'liberada'])

    const affectedRows = await Database.table('atividades')
      .where('id', params.id)
      .update({ nome: data.nome, modelo: data.modelo, liberada: data.liberada })

    return affectedRows
  }

  async destroy ({ params, request, response }) {}
}

module.exports = AtividadeController
