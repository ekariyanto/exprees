const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const port = 4040;
//Init app
const app = express();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const url = 'mongodb://localhost:27017/todoapp';

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

//View Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Connet to mongodb
MongoClient.connect(url, (err, database) => {
  console.log('MongoDB Connected...');
  if (err) throw err;

  db = database;
  Todos = db.collection('todos');

  app.listen(port, () => {
    console.log('Server running on port '+port);
  });
})

/*--------------- Routes ------------------*/

// GET main Todo page
app.get('/', (req,res, next) =>{
  Todos.find({}).toArray((err, todos) => {
    if(err) {
      return console.log(err);
    } else {
      res.render('index', {
        todos: todos,
      });
    }
  });
});

// POST new todo
app.post('/todo/add', (req,res,next) => {
  // create todo
  const todo = {
    text: req.body.text,
    body: req.body.body,
  }
  // Insert todo
  Todos.insert(todo, (err, result) => {
    if (err){
      return console.log(err);
    }
    console.log('Todo Added');
    res.redirect('/');
  });
});

// GET todo by id
app.get('/todo/edit/:id', (req,res, next) =>{
  const query = {_id: ObjectID(req.params.id)};
  Todos.find(query).next((err, todo) => {
    if(err) {
      return console.log(err);
    }
    res.render('edit', {
      todo: todo,
    });
  });
});

// POST todo update
app.post('/todo/edit/:id', (req,res,next) => {
  const query = {_id: ObjectID(req.params.id)};
  const todo = {
    text: req.body.text,
    body: req.body.body,
  }
  // Update todo in DB
  Todos.updateOne(query, {$set:todo}, (err,result) => {
    if (err){
      return console.log(err);
    }
    console.log('Todo Updated');
    res.redirect('/');
  });
});

// DELETE todo by id
app.delete('/todo/delete/:id', (req, res, next) => {
  const query = {_id: ObjectID(req.params.id)};
  Todos.deleteOne(query, (err, response) => {
    if (err) {
      return console.log(err);
    }
    console.log('Todo Deleted');
    res.sendStatus(200, 'OK');
  })
});
