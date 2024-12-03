/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    return knex.schema.alterTable("users", (table) => {
      table.string("password", 255).alter(); 
    });
  }
  
  export async function down(knex) {
    return knex.schema.alterTable("users", (table) => {
      table.string("password", 45).alter(); 
    });
  }
  