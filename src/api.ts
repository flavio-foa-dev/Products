import express  from "express";

const app = express();
app.use(express.json());


const port = 3000

app.get('/test', (req, res) => {
  res.status(200).json({message: 'Hello foa foa'});
})

app.listen(port, ()=> console.log('listening on port, port'));