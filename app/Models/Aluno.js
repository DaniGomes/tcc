'use strict'

const Model = use('Model')

class Aluno extends Model {
  usuario () {
    return this.belongsTo('App/Models/User', 'matricula')
  }
  orientador () {
    return this.belongsTo('App/Models/Professor')
  }
  coorientador () {
    return this.belongsTo('App/Models/Professor')
  }
  disciplinas () {
    return this.belongsToMany(
      'App/Models/Disciplina',
      'matricula_aluno',
      'codigo_disciplina'
    )
  }
}

module.exports = Aluno
