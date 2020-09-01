'use strict'

const Schema = use('Schema')

class TipoSchema extends Schema {
  up () {
    this.create('tipos', table => {
      table.increments()
      table.timestamps()
      table.string('nome').notNullable().unique()
    })
  }

  down () {
    this.drop('tipos')
  }
}

module.exports = TipoSchema
