const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const cookieParser = require('cookie-parser');
const app = express();



const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'a31b41c8',
  database: 'login_reg'
});
connection.connect();

app.use(session({
  secret: 'your-secret-key',
  resave: true,
  saveUninitialized:true
}));
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser('your-secret-key')); 

app.post('/api/signup', (req, res) => {
  console.log('Signup request received:', req.body);
  const { username, email, password } = req.body;
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      console.error('Error in bcrypt.hash:', err);
      return res.status(500).send(err.message);
    }
    const query = `INSERT INTO account (username, email, password) VALUES('${username}', '${email}', '${hashedPassword}')`;
    connection.query(query, (error, results) => {
      if (error) {
        console.error('Error in connection.query:', error);
        return res.status(500).send(error.message);
      }
      console.log('Signup successful:', results);
      res.send('Sign up successful');
    });
  });
});

passport.use(new LocalStrategy((username, password, done) => {
  console.log('Login attempt received:', username, password);
  const query = `SELECT * FROM account WHERE username = '${username}'`;
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error in connection.query:', err);
      return done(err);
    }
    if (!results[0]) {
      console.error('User not found in connection.query:', username);
      return done(null, false, { message: 'Incorrect username.' });
    }
    const hashedPassword = results[0].password;
    bcrypt.compare(password, hashedPassword, (err, isMatch) => {
      if (err) {
        console.error('Error in bcrypt.compare:', err);
        return done(err);
      }
      if (isMatch) {
        console.log('Login successful:', results[0]);
        return done(null, results[0]);
      }
      console.error('Incorrect password:', password);
      return done(null, false, { message: 'Incorrect password.' });
    });
  });
}));
app.use(bodyParser.json());

passport.use(
  new LocalStrategy((username, password, done) => {
    connection.query(
      `SELECT * FROM account WHERE username = '${username}'`,
      (err, results) => {
        if (err) {
          return done(err);
        }
        if (!results[0]) {
          return done(null, false, { message: "Incorrect username." });
        }
        const hashedPassword = results[0].password;
        bcrypt.compare(password, hashedPassword, (err, isMatch) => {
          if (err) {
            return done(err);
          }
          if (isMatch) {
            return done(null, results[0]);
          }
          return done(null, false, { message: "Incorrect password." });
        });
      }
    );
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  connection.query(`SELECT * FROM account WHERE id = '${id}'`, (err, results) => {
    done(err, results[0]);
  });
});

app.post("/api/login", passport.authenticate("local"), (req, res) => {
  const user = req.user;
  req.session.user = user;
  res.send({ message: "Successful login." });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});