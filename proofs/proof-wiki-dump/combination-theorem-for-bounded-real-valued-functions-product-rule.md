theorem BoundedFunctionProduct() {
  assert(
    ∀S, ∀f,g: S → ℝ, 
    (isBounded(f) ∧ isBounded(g)) →
    isBounded(f·g)
  )
} ↔

proof BoundedFunctionProduct() {
  setVar(S: Set) →
  setVar(f,g: S → ℝ) →
  
  lemma BoundedDef() {
    assert(
      isBounded(f) ↔ ∃M_f ∈ ℝ_≥0: ∀s ∈ S: |f(s)| ≤ M_f ∧
      isBounded(g) ↔ ∃M_g ∈ ℝ_≥0: ∀s ∈ S: |g(s)| ≤ M_g
    )
  } →
  
  setVar(M: ℝ_≥0 = M_f·M_g) →
  
  assert(
    ∀s ∈ S:
    |(f·g)(s)| = |f(s)·g(s)| →
    |f(s)·g(s)| = |f(s)|·|g(s)| →
    |f(s)|·|g(s)| ≤ M_f·M_g →
    |f(s)|·|g(s)| ≤ M
  ) →
  
  apply(BoundedDef()) →
  assert(isBounded(f·g))
}