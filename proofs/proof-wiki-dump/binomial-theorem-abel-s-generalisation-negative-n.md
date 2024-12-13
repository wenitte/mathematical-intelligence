theorem AbelsGeneralizationNegative() {
  assert(
    ∀n ∈ ℤ_{<0} ⇒ ¬(∀x,y,z ∈ ℝ ⇒ 
      (x + y)^n = ∑_k (n k) x (x - kz)^{k-1} (y + kz)^{n-k})
  )
}

proof AbelsGeneralizationNegative() {
  setVars(n: ℤ, x: ℝ, y: ℝ, z: ℝ) →
  let(n = -1) ∧
  let(x = -1) ∧
  let(y = 1) ∧
  let(z = 1) →
  
  assert(LHS = (-1 + 1)^{-1} = 1/0) →
  assert(undefined(1/0)) →
  
  assert(RHS = ∑_k (-1)^k (-1 k) (1 + k)^{-2}) →
  assert(RHS = ∑_{k≥0} (1 + k)^{-2}) →
  
  lemma IndexTranslation() {
    assert(∑_{k≥0} (1 + k)^{-2} = ∑_{k≥1} 1/k^2)
  } →
  
  lemma BaselProblem() {
    assert(∑_{k≥1} 1/k^2 = π^2/6)
  } →
  
  apply(IndexTranslation()) →
  apply(BaselProblem()) →
  
  assert(RHS = π^2/6) ∧
  assert(LHS ≠ RHS) ∧
  assert(LHS undefined) →
  assert(formula_invalid_for_negative_n)
}