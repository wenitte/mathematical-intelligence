theorem Complex_Conjugate_Roots() {
  let f(z) := Σ(k=0 to n)[aₖzᵏ] where aₖ ∈ ℝ
  assert(
    ∀α ∈ ℂ, f(α) = 0 ⇒ f(α̅) = 0
  )
} ↔

proof Complex_Conjugate_Roots() {
  setVar(α: ℂ) →
  assert(α = p + qi) →
  assert(∃r,θ ∈ ℝ: α = reⁱᶿ) →
  
  lemma Root_Condition() {
    assert(f(α) = 0) →
    assert(Σ(k=0 to n)[aₖrᵏeⁱᵏᶿ] = 0)
  } →
  
  lemma Conjugate_Transform() {
    assert(∀z∈ℂ: z̅eⁱᶿ = ze⁻ⁱᶿ) ∧
    assert(∀a∈ℝ: ā = a)
  } →
  
  apply(Root_Condition()) →
  apply(Conjugate_Transform()) →
  assert(z̅ = r̅e⁻ⁱᶿ) →
  assert(Σ(k=0 to n)[aₖrᵏe⁻ⁱᵏᶿ] = 0) →
  assert(f(α̅) = 0) →
  
  lemma Real_Coefficient_Necessity() {
    assert(∀k: aₖ ∈ ℝ) →
    assert(f̅(z) = f(z̅))
  }
}