'use strict'

const Model = use('Model')

class Disciplina extends Model {
  atividades () {
    return this.hasMany('App/Models/Atividade')
  }
  matriculados () {
    return this.belongsToMany('App/Models/Aluno')
  }
}

module.exports = Disciplina
