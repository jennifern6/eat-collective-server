/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.table('posts', (table) => {
        table.string('title', 255).alter(); 
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.table('posts', (table) => {
        table.string('title', 45).alter(); 
    });
}
