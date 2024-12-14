theorem Planes_Parallel() {
  assert(
    ∀P,P' ∈ Planes(ℝ³) ∧
    P := {(x₁,x₂,x₃) ∈ ℝ³ : α₁x₁ + α₂x₂ + α₃x₃ = γ} ⇒
    (P ∥ P' ↔ ∃γ' ∈ ℝ : P' = {(x₁,x₂,x₃) ∈ ℝ³ : α₁x₁ + α₂x₂ + α₃x₃ = γ'})
  )
}

proof Planes_Parallel() {
  // Sufficient condition
  setVar(P': Plane(ℝ³)) →
  setVar(γ': ℝ) →
  assert(P' = {(x₁,x₂,x₃) ∈ ℝ³ : α₁x₁ + α₂x₂ + α₃x₃ = γ'}) →
  
  lemma Contradiction() {
    assume(∃x ∈ P ∩ P') →
    assert(α₁x₁ + α₂x₂ + α₃x₃ = γ) ∧ // x ∈ P
    assert(α₁x₁ + α₂x₂ + α₃x₃ = γ') → // x ∈ P'
    conclude(γ = γ') →
    conclude(P = P') →
    contradiction(P' ≠ P)
  } →
  
  apply(Contradiction()) →
  conclude(P ∩ P' = ∅) →
  conclude(P ∥ P') →
  
  lemma Self_Parallel() {
    assert(P ∥ P) // By definition
  } →
  
  combine(
    Contradiction(),
    Self_Parallel()
  ) →
  conclude(P ∥ P' ↔ ∃γ' ∈ ℝ : P' = {(x₁,x₂,x₃) ∈ ℝ³ : α₁x₁ + α₂x₂ + α₃x₃ = γ'})
}