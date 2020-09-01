'use strict'

const Schema = use('Schema')

class AlunoSchema extends Schema {
  up () {
    this.create('alunos', table => {
      table.increments()
      table.timestamps()
      table.string('tema')
      table
        .integer('matricula')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('orientador')
        .unsigned()
        .references('id')
        .inTable('professors')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('coorientador')
        .unsigned()
        .references('id')
        .inTable('professors')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
  }

  down () {
    this.drop('alunos')
  }
}

module.exports = AlunoSchema
