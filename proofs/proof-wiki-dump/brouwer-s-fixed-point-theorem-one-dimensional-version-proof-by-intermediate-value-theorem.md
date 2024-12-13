theorem Brouwer_Fixed_Point_1D() {
  assert(
    ∀f: [a,b] → [a,b],
    (continuous(f) ∧ a,b ∈ ℝ) ⇒
    ∃ξ ∈ [a,b]: f(ξ) = ξ
  )
}

proof Brouwer_Fixed_Point_1D() {
  setVar(f: [a,b] → [a,b]) →
  assert(∀x ∈ [a,b]: f(x) ∈ [a,b]) →
  assert(f(a) ≥ a ∧ f(b) ≤ b) →
  
  lemma Define_g() {
    assert(
      ∃g: [a,b] → ℝ,
      ∀x ∈ [a,b]: g(x) = f(x) - x
    )
  } →

  apply(Define_g()) →
  assert(continuous(g)) by(Combined_Sum_Rule) →
  assert(g(a) = f(a) - a ≥ 0) →
  assert(g(b) = f(b) - b ≤ 0) →
  
  apply(Intermediate_Value_Theorem, {
    func: g,
    interval: [a,b],
    y_value: 0
  }) →
  
  assert(∃ξ ∈ [a,b]: g(ξ) = 0) →
  assert(g(ξ) = f(ξ) - ξ = 0) →
  assert(f(ξ) = ξ)
}