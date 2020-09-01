'use strict'

const Schema = use('Schema')

class ProfessorSchema extends Schema {
  up () {
    this.create('professors', table => {
      table.increments()
      table.timestamps()
      table.string('origem')
      table
        .integer('matricula')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
  }

  down () {
    this.drop('professors')
  }
}

module.exports = ProfessorSchema
