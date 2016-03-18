import test from "tape"
import stdinLineOpen from "../src"

test("stdinLineOpen", (t) => {
  t.plan(1)
  t.equal('function', typeof stdinLineOpen(), "return a function")
})
