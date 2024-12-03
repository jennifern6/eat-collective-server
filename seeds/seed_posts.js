/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

import postsData from "../seed-data/posts.js";

export async function seed(knex) {
  await knex("posts").del();
  await knex("posts").insert(postsData);
}