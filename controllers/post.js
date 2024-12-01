import initKnex from 'knex';
import jwt from 'jsonwebtoken';
import "dotenv/config";
import configuration from '../knexfile.js';
const db = initKnex(configuration);

export const getPosts = async (req, res) => {
  try {
    const query = req.query.cat
      ? db('posts').where('cat', req.query.cat)
      : db('posts');

    const data = await query;
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const getPost = async (req, res) => {
  try {
    const data = await db('users')
      .join('posts', 'users.id', 'posts.uid')
      .select('posts.id', 'username', 'title', 'desc', 'posts.img', 'users.img as userImg', 'cat', 'date')
      .where('posts.id', req.params.id)
      .first();

    if (!data) {
      return res.status(404).json("Post not found");
    }

    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const addPost = async (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  try {
    const userInfo = jwt.verify(token, process.env.JWT_SECRET || "jwtkey");

    const [postId] = await db('posts')
      .insert({
        title: req.body.title,
        desc: req.body.desc,
        img: req.body.img,
        cat: req.body.cat,
        date: req.body.date,
        uid: userInfo.id,
      })
      .returning('id'); //

    return res.status(201).json({ message: "Post has been created.", postId });
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const deletePost = async (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  try {
    const userInfo = jwt.verify(token, process.env.JWT_SECRET || "jwtkey");

    const deletedRows = await db('posts')
      .where({ id: req.params.id, uid: userInfo.id })
      .del();

    if (deletedRows === 0) {
      return res.status(403).json("You can delete only your post!");
    }

    return res.status(200).json("Post has been deleted!");
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const updatePost = async (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  try {
    const userInfo = jwt.verify(token, process.env.JWT_SECRET || "jwtkey");

    const updatedRows = await db('posts')
      .where({ id: req.params.id, uid: userInfo.id })
      .update({
        title: req.body.title,
        desc: req.body.desc,
        img: req.body.img,
        cat: req.body.cat,
      });

    if (updatedRows === 0) {
      return res.status(403).json("You can only update your own posts!");
    }

    return res.status(200).json("Post has been updated.");
  } catch (err) {
    return res.status(500).json(err);
  }
};
