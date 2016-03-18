import test from "tape"
import stdinLineOpen from "../src"

test("stdinLineOpen", (t) => {
  t.plan(1)
  t.equal(true, stdinLineOpen(), "return true")
})
