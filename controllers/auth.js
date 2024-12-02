import initKnex from "knex";
import "dotenv/config";
import configuration from "../knexfile.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const db = initKnex(configuration);

//register section
export const register = async (req, res) => {
  try {
    const existingUser = await db("users")
      .select("*")
      .where("email", req.body.email)
      .orWhere("username", req.body.username)
      .first();

    if (existingUser) {
      return res.status(409).json("User already exists!");
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    await db("users").insert({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });

    return res.status(200).json("User has been created.");
  } catch (err) {
    return res.status(500).json(err);
  }
};

//login section
export const login = async (req, res) => {
  try {
    const users = await db("users")
      .select("*")
      .where("username", req.body.username);

    if (users.length === 0) {
      return res.status(404).json("User not found!");
    }
    const user = users[0];

    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect) {
      return res.status(400).json("Wrong username or password!");
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || "jwtkey" ); 
    const { password, ...other } = user;

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(other);
  } catch (err) {
    return res.status(500).json(err);
  }
};

//logout section
export const logout = (req, res) => {
  res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json("User has been logged out.");
};
