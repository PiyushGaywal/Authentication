const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const authroutes = require('./routes/authroutes');
const db=require('./utils/db')
const dsb=require('./routes/dashboard')
const session=require('express-session')
app.set('view engine', 'ejs');
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/',(req,res,next)=>{
  res.send(`<h1>Welcome To Our Page</h1>
            <a href="/login">Login</a>
            <a href="/signup">Signup</a>`)
})

app.use(session({
  secret: 'Piyu1cbz',
  resave: false,
  saveUninitialized: false
}));


app.use(authroutes);
app.use(dsb)

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
