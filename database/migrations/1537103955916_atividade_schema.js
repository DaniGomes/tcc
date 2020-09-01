'use strict'

const Schema = use('Schema')

class AtividadeSchema extends Schema {
  up () {
    this.create('atividades', table => {
      table.increments()
      table.timestamps()
      table.string('nome').notNullable()
      table.timestamp('prazo')
      table.string('observacoes')
      table.boolean('validacao')
      table.string('avaliacao')
      table.string('modelo')
      table.boolean('liberada')
      table
        .integer('disciplina_id')
        .unsigned()
        .references('id')
        .inTable('disciplinas')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
  }

  down () {
    this.drop('atividades')
  }
}

module.exports = AtividadeSchema
