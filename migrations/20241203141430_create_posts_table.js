/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable("posts", (table) => {
      table.increments("id").primary(); 
      table.string("title", 45).notNullable(); 
      table.string("desc", 1000).notNullable(); 
      table.string("img", 255).notNullable();
      table.dateTime("date").notNullable(); 
      table
        .integer("uid")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE"); 
      table.string("cat", 45).nullable(); 
    });
  }
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export function down(knex) {
    return knex.schema.dropTable("posts"); 
  }
  