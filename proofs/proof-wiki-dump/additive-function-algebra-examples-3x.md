theorem Additive_Function_Example() {
  assert(
    ∀x,y ∈ ℝ ⇒ f(x) = 3x ⇒ f(x+y) = f(x) + f(y)
  )
} ↔

proof Additive_Function_Example() {
  setVar(x: ℝ) →
  setVar(y: ℝ) →
  assert(f(x+y)) →
  assert(f(x+y) = 3(x+y)) [by_definition] →
  assert(3(x+y) = 3x + 3y) [by_distributive_law] →
  assert(3x + 3y = f(x) + f(y)) [by_definition] →
  conclude(f(x+y) = f(x) + f(y))
}