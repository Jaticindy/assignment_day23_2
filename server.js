// load the things we need
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const chalk = require('chalk');
// set the view engine to ejs
app.set('view engine', 'ejs');

//menerima data json dimasukan ke dalam array
let users =[]

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())


//get page/index.ejs
app.get('/', function(req, res) {
    res.render('pages/index');
});

// get json
app.get('/user', function(req, res) {
    res.send(users);
    

});
//page input/HOME
app.post('/', (req,res)=>{
    const{ Fullname,Username,Address } = req.body
    const newUser = {Fullname,Username,Address}
    users.push(newUser)
    const urlUser= 'http://localhost:3000/user'
    res.redirect(urlUser)

      });



//port 3000
app.listen(3000);
console.log(chalk.red.bold(`Server Is ${chalk.white('Run...!')}`));
