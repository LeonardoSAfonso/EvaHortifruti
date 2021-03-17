
exports.up =function(knex) {
    return knex.schema.createTable('Products', function(table){
        table.increments('id').notNullable()
        table.string('name').notNullable()
        table.string('description').notNullable()
        table.float('price').notNullable()
        table.specificType('images', 'text  ARRAY')
        table.timestamp('createAt').defaultTo(knex.fn.now())
        table.integer('createBy').notNullable()
        table.timestamp('lastModifiedAt').defaultTo(knex.fn.now())
        table.integer('lastModifiedBy').notNullable()

    })
};

exports.down = knex => knex.schema.dropTable('Products')
