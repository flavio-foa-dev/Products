//given when, then
// arrange, act. assert
import { sum } from "../../src/main"
import axios from "axios"

test("deve fazer a soma  de dois numeros", function(){
  // given
  const a = 2
  const b = 3

  // when
  const output = sum(a, b)

  // then

  expect(output).toEqual(5)
})

describe("Api products",() => {
  test("Deve Cadastrar os products", async() => {
    const input = {
      name: "dvd", price: 10, data: "2021-03-01T10:00:00", quantity: 12
    }
    const response = await axios.post("http://localhost:3000/api/products", input)
    const output = response.data
    expect(output).toBeDefined()
    expect(output.name).toEqual("dvd")
    expect(output.price).toEqual(10)
    expect(output.quantity).toEqual(12)
  })

  test("Deve ser maior 3 o campo name", async() => {
    const input = {
      name: "dvd", price: 10, data: "2021-03-01T10:00:00", quantity: 12
    }
    const response = await axios.post("http://localhost:3000/api/products", input)
    const output = response.data


    console.log(output)
    expect(output).toBeDefined()

  })
})