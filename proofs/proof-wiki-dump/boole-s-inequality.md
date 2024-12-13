theorem Boole_Inequality() {
  assert(
    ∀(Ω,Σ,Pr): ProbabilitySpace ∧
    ∀{A₁,A₂,...,Aₙ} ⊆ Σ ⇒
    Pr(∪ᵢ₌₁ⁿ Aᵢ) ≤ Σᵢ₌₁ⁿ Pr(Aᵢ)
  )
} ↔

proof Boole_Inequality() {
  lemma Prob_Measure_Subadditive() {
    assert(
      ∀(Ω,Σ,Pr): ProbabilitySpace ⇒
      Pr is_subadditive
    )
  } →
  
  lemma Finite_Union_Subadditive() {
    assert(
      ∀f: SubadditiveFunction ∧
      ∀{A₁,A₂,...,Aₙ} ⊆ Domain(f) ⇒
      f(∪ᵢ₌₁ⁿ Aᵢ) ≤ Σᵢ₌₁ⁿ f(Aᵢ)
    )
  } →
  
  apply(Prob_Measure_Subadditive()) →
  apply(Finite_Union_Subadditive(), f := Pr) →
  assert(Pr(∪ᵢ₌₁ⁿ Aᵢ) ≤ Σᵢ₌₁ⁿ Pr(Aᵢ))
}