'use strict'
const Modelo = use('App/Models/Modelo')
const Database = use('Database')

class ModeloController {
  async index ({ request, response, view }) {
    return Modelo.all()
  }

  async store ({ request, response }) {
    const data = request.only(['nome', 'json'])

    const modelo = await Modelo.create(data)

    return modelo
  }

  async show ({ params, request, response, view }) {
    return Modelo.find(params.id)
  }

  async update ({ params, request, response }) {
    const data = request.only(['nome', 'json'])

    const affectedRows = await Database
      .table('modelos')
      .where('id', params.id)
      .update({ nome: data.nome, json: data.json })

    return affectedRows
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = ModeloController
