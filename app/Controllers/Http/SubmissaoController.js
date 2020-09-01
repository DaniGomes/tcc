'use strict'
const Submissao = use('App/Models/Submissao')
const Database = use('Database')

class SubmissaoController {
  async index ({ request, response, view }) { 
    return Submissao.all()
  }

  async store ({ request, response }) {
    const data = request.only(['nota', 'status', 'conteudo', 'aluno_id', 'professor_id', 'atividade_id'])

    const submissao = await Submissao.create(data)

    return submissao
  }

  async show ({ params, request, response, view }) {
    return Submissao.find(params.id)
  }

  async update ({ params, request, response }) {
    const data = request.only(['nota', 'conteudo', 'status'])

    const affectedRows = await Database
      .table('submissaos')
      .where('id', params.id)
      .update({ nota: data.nota, conteudo: data.conteudo, status: data.status })

    return affectedRows
  }

  async destroy ({ params, request, response }) {}
}

module.exports = SubmissaoController
