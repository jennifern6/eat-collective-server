// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */

// import usersData from "../seed-data/users.js";

// export async function seed(knex) {
//   await knex("users").del();
//   await knex("users").insert(usersData);
// };




/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */


const usersData = [
    {
      id: 1,
      username: "Jen",
      email: "jen@gmail.com",
      password: "$2a$10$MTgo4mHRzqfDbWCvBcujH.7ZL5pzghjyDjjfgW5gewvj1K5PfjyvW",
      img: JSON.stringify({ filename: "avatar - jen.png" }),
    },
    {
      id: 2,
      username: "Sophia",
      email: "sophia@gmail.com",
      password: "$2a$10$DFm52XkctHMYv7aT1vbMJeF8L92Jt1XmxMeFAQSzQeO4pXlHRWida",
      img: JSON.stringify({ filename: "avatar - sophia.png" }),
    },
  ];
  
  export async function seed(knex) {
    await knex("users").del();
    

    await knex("users").insert(usersData);
  };
  