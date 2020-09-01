'use strict'

const Schema = use('Schema')

class SubmissaoSchema extends Schema {
  up () {
    this.create('submissaos', (table) => {
      table.increments()
      table.timestamps()
      table.string('conteudo')
      table.string('status')
      table.string('nota')
      table
        .integer('aluno_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('professor_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('atividade_id')
        .unsigned()
        .references('id')
        .inTable('atividades')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
  }

  down () {
    this.drop('submissaos')
  }
}

module.exports = SubmissaoSchema
