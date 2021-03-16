
exports.up =  function(knex) {
    return knex.schema.createTable('Users', function(table){
    
    table.increments('id').notNullable()
    table.string('name').notNullable()
    table.string('email').notNullable().unique()
    table.string('password').notNullable()
    })
  
};
exports.down = knex => knex.schema.dropTable('Users')

