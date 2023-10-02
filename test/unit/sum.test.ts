//given when, then
// arrange, act. assert
import { sum } from "../../src/main"

test("deve fazer a soma  de dois numeros", function(){
  // given
  const a = 2
  const b = 3

  // when
  const output = sum(a, b)

  // then

  expect(output).toEqual(5)
})