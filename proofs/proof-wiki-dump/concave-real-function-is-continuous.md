theorem Concave_Function_Continuity() {
  assert(
    ∀f: ℝ → ℝ,
    ∀a,b ∈ ℝ,
    (f is concave on (a,b)) ⇒
    (f is continuous on (a,b))
  )
}

proof Concave_Function_Continuity() {
  setVar(f: ℝ → ℝ) →
  setVar(a,b: ℝ) →
  assume(f is concave on (a,b)) →
  
  lemma Left_Right_Differentiable() {
    assert(
      (f is concave on (a,b)) ⇒
      (f is left-hand and right-hand differentiable on (a,b))
    )
  } →
  
  lemma Differentiable_Implies_Continuous() {
    assert(
      (f is left-hand and right-hand differentiable on (a,b)) ⇒
      (f is continuous on (a,b))
    )
  } →
  
  apply(Left_Right_Differentiable()) →
  assert(f is left-hand and right-hand differentiable on (a,b)) →
  apply(Differentiable_Implies_Continuous()) →
  assert(f is continuous on (a,b))
}