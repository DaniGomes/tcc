'use strict'
const Tipo = use('App/Models/Tipo')

class TipoController {
  async index ({ request, response, view }) {
    return Tipo.all()
  }

  async store ({ request, response }) {}

  async show ({ params, request, response, view }) {}

  async update ({ params, request, response }) {}

  async destroy ({ params, request, response }) {}
}

module.exports = TipoController
