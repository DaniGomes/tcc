'use strict'

const Schema = use('Schema')

class AlunoDisciplinaSchema extends Schema {
  up () {
    this.create('aluno_disciplina', table => {
      table.increments()
      table.timestamps()
      table
        .integer('matricula_aluno')
        .unsigned()
        .references('id')
        .inTable('alunos')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('codigo_disciplina')
        .unsigned()
        .references('id')
        .inTable('disciplinas')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      
    })
  }

  down () {
    this.drop('aluno_disciplina')
  }
}

module.exports = AlunoDisciplinaSchema
