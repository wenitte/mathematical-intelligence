theorem Additive_Function_Is_Odd() {
  assert(
    ∀f: ℝ→ℝ, (∀x,y∈ℝ: f(x+y) = f(x)+f(y)) ⇒ 
    (∀x∈ℝ: f(-x) = -f(x))
  )
}

proof Additive_Function_Is_Odd() {
  setVar(f: ℝ→ℝ) →
  assume(∀x,y∈ℝ: f(x+y) = f(x)+f(y)) →
  
  lemma Additive_Function_Zero() {
    assert(f(0) = 0)
  } →

  setVar(x: ℝ) →
  assert(0 = f(0)) by(Additive_Function_Zero()) →
  assert(0 = f(x + (-x))) by(x + (-x) = 0) →
  assert(0 = f(x) + f(-x)) by(additivity) →
  assert(f(-x) = -f(x)) by(algebra) →
  assert(∀x∈ℝ: f(-x) = -f(x)) by(generalization)
}