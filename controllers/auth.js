import { db } from "../knexfile.js";
import bcrypt from "bcryptjs";

export const register = (req, res) => {
  // Check for existing user
  const q = "SELECT * FROM users WHERE email = ? OR username = ?";

  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.status(500).json({ error: "Database query error", details: err });
    if (data.length) return res.status(409).json({ message: "User already exists" });

    // Hash password and create a new user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const insertQuery = "INSERT INTO users(`username`, `email`, `password`) VALUES (?)";
    const values = [req.body.username, req.body.email, hash];

    db.query(insertQuery, [values], (err, result) => {
      if (err) return res.status(500).json({ error: "Failed to create user", details: err });
      return res.status(201).json({ message: "User has been created successfully" });
    });
  });
};

export const login = (req, res) => {
  // Implement login functionality here
  res.status(501).json({ message: "Login functionality not implemented yet" });
};

export const logout = (req, res) => {
  // Implement logout functionality here
  res.status(501).json({ message: "Logout functionality not implemented yet" });
};
