theorem Baire_Category_Theorem() {
  assert(
    ∀M=(A,d) ∈ MetricSpace ∧ complete(M) ⇒
    baire_space(M)
  )
} ↔

proof Baire_Category_Theorem() {
  setVar(M=(A,d): CompleteMetricSpace) →
  setVar(U_n: ℙ(A), n ∈ ℕ | open(U_n) ∧ dense(U_n)) →
  
  lemma Dense_Intersection() {
    assert(∀W ⊆ A | open(W) ∧ W ≠ ∅ ⇒
      ∃x₁ ∈ A, ∃ε₁ ∈ ℝ₊ |
      B̄(x₁,ε₁) ⊆ W ∩ U₁
    )
  } →

  apply(Dependent_Choice_Axiom()) →
  assert(∃{xₙ}ₙ∈ℕ, {εₙ}ₙ∈ℕ | 
    ∀n>0: (
      B̄(xₙ,εₙ) ⊆ B(xₙ₋₁,εₙ₋₁) ∩ Uₙ ∧
      εₙ < 1/n
    )
  ) →

  lemma Cauchy_Sequence() {
    assert(∀n>m: xₙ ∈ B(xₘ,εₘ)) →
    assert(cauchy_sequence({xₙ}ₙ∈ℕ))
  } →

  apply(Complete_Space_Definition()) →
  assert(∃x ∈ A | limₙ→∞ xₙ = x) →
  
  assert(∀n ∈ ℕ: 
    x ∈ B̄(xₙ₊₁,εₙ₊₁) ⊆ B(xₙ,εₙ)
  ) →

  assert(∀n ∈ ℕ: x ∈ W ∩ Uₙ) →
  assert(dense(⋂ₙ∈ℕ Uₙ)) →
  assert(baire_space(M))
}

corollary Real_Line_Baire() {
  assert(
    ¬meager(ℝ)
  )
}