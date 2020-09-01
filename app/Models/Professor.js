'use strict'

const Model = use('Model')

class Professor extends Model {
  usuario () {
    return this.belongsTo('App/Models/User', 'matricula')
  }

  orientados () {
    return this.hasMany('App/Models/Aluno', 'id', 'orientador')
  }
}

module.exports = Professor
