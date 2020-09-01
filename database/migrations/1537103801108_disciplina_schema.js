'use strict'

const Schema = use('Schema')

class DisciplinaSchema extends Schema {
  up () {
    this.create('disciplinas', table => {
      table.increments()
      table.timestamps()
      table.string('nome').notNullable()
      table.string('codigo').notNullable()
      table.string('coordenador')
    })
  }

  down () {
    this.drop('disciplinas')
  }
}

module.exports = DisciplinaSchema
