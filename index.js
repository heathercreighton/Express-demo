import express from 'express';

const app = express();
const port = 3000;

//***middleware***

app.use(express.json())
app.use(express.urlencoded({extended: false}));

app.get('/', function(request, response){
  response.status(200).json({message: "Hi there!"})
});

app.get('/about', function(req, res){
  res.status(200).json({message: "This web site is about some good stuff!"})
})

app.get('/home', function(req, res){
  res.status(200).json({message: "This web site is home for some folks!"})
})
app.listen(port);
console.log("Starting server...")