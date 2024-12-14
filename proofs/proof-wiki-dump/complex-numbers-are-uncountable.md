theorem Complex_Uncountable() {
  assert(
    |ℂ| = ℵ₁
  )
}

proof Complex_Uncountable() {
  lemma Real_Complex_Embedding() {
    assert(
      ∀r ∈ ℝ ⇒ (r = r + 0i ∈ ℂ)
    )
  } →
  
  assert(ℝ ⊆ ℂ) →
  
  lemma Real_Uncountable() {
    assert(|ℝ| = ℵ₁)
  } →
  
  axiom Subset_Uncountable() {
    assert(
      ∀A,B: (A ⊆ B ∧ |A| = ℵ₁) ⇒ |B| = ℵ₁
    )
  } →
  
  apply(Real_Complex_Embedding()) →
  apply(Real_Uncountable()) →
  apply(Subset_Uncountable()) →
  
  assert(|ℂ| = ℵ₁)
}