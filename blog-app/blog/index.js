import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3007;

console.log("Starting server setup...");

app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1>');
});

app.get("/about", (req, res) => {
  res.send('<h1>About me</h1><p>My name is Chad</p>');
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

/*
// Setting the view engine to EJS
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let posts = [];

// Routes
app.get('/', (req, res) => {
  res.render('index', { posts });
});

app.post('/new', (req, res) => {
  const { title, content } = req.body;
  const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
  posts.push({ id, title, content });
  res.redirect('/');
});

app.get('/delete/:id', (req, res) => {
  const id = parseInt(req.params.id);
  posts = posts.filter(post => post.id !== id);
  res.redirect('/');
});

 app.get('/edit/:id', (req, res) => {
   const id = parseInt(req.params.id);
   const post = posts.find(post => post.id === id);
   res.render('edit', { post });
 });
 
 app.post('/edit/:id', (req, res) => {
   const id = parseInt(req.params.id);
   const { title, content } = req.body;
   const postIndex = posts.findIndex(post => post.id === id);
   if (postIndex !== -1) {
     posts[postIndex] = { id, title, content };
   }
   res.redirect('/');
 });


// Starting the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

*/