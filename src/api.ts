import express  from "express";
import {Products} from "./types/Products"

const app = express();
app.use(express.json());


const port = 3000

app.get('/test', (req, res) => {
  res.status(200).json({message: 'Hello foa foa'});
})

app.get('/api/products', (req, res) => {
  return res.send("ola")
})

app.post('/api/products', async(req, res) => {
  try {
    const input: Products = req.body
    if (!input.name || input.name.length < 3 ) {
      return res.status(400).json({message: 'Invalid name'})

    }

   return res.status(200).json(input)

  } catch (error) {
    return res.status(400).json({message: 'Invalid'})
  }

})


app.listen(port, ()=> console.log('listening on port, port'));