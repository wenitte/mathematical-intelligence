theorem RationalPlusSqrt2Field() {
  assert(
    let Q[√2] = {x ∈ ℂ: x = a + b√2 ∧ a,b ∈ ℚ} ∧
    let F = ⟨Q[√2], +, ×⟩ ∧
    isField(F)
  )
} ↔

proof RationalPlusSqrt2Field() {
  lemma RealSubset() {
    assert(Q[√2] ⊆ ℝ ∧ ℝ ⊆ ℂ) →
    conclude(Q[√2] ⊆ ℂ)
  } →

  reference PreviousTheorem() {
    assert(
      let R = {x ∈ ℝ: x = a + b√2 ∧ a,b ∈ ℚ} ∧
      isField(⟨R, +, ×⟩)
    )
  } →

  apply(RealSubset()) →
  apply(PreviousTheorem()) →
  
  assert(
    isSubfield(⟨Q[√2], +, ×⟩, ℂ)
  ) →

  byDefinition(NumberField) {
    assert(
      isSubfield(F, ℂ) → isField(F)
    )
  } →
  
  conclude(isField(F))
}