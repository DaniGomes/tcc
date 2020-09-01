'use strict'

const Schema = use('Schema')

class ModeloSchema extends Schema {
  up () {
    this.create('modelos', table => {
      table.increments()
      table.timestamps()
      table.string('nome').notNullable()
      table.string('json')
      table
        .integer('tipo')
        .unsigned()
        .references('id')
        .inTable('tipos')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
  }

  down () {
    this.drop('modelos')
  }
}

module.exports = ModeloSchema
