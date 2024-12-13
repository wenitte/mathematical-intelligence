theorem CardinalityOfInfiniteSigmaAlgebra() {
  assert(
    ∀𝕄 (𝕄 is σ-algebra ∧ 𝕄 is infinite) → 
    |𝕄| ≥ 𝔠
  )
}

proof CardinalityOfInfiniteSigmaAlgebra() {
  setVar(𝕄: σ-algebra, X: set) →
  define(𝕄_∞ := {A ∈ 𝕄 : |𝕄_A| = ∞}) →
  
  lemma TraceAlgebraCardinality() {
    assert(
      ∀A ∈ 𝕄_∞ ∀B ∈ 𝕄_A →
      |𝕄_B| + |𝕄_{A\B}| ≥ |𝕄_B ∪ 𝕄_{A\B}| ≥ |𝕄_A| = ∞
    )
  } →
  
  assert(∀B ∈ 𝕄_A: B ∈ 𝕄_∞ ∨ A\B ∈ 𝕄_∞) →
  assert(∀A ∈ 𝕄_∞: ∃B ∈ 𝕄_∞: B ⊊ A) →
  
  define(𝕊 := {{⟨A,B⟩ : B ∈ 𝕄_∞, B ⊊ A} : A ∈ 𝕄_∞}) →
  applyAxiomOfChoice(𝕊) →
  obtain(f: 𝕄_∞ → 𝕄_∞, ∀A ∈ 𝕄_∞: f(A) ⊊ A) →
  
  define(F_i := f^i(X) \ f^{i+1}(X), i ∈ ℕ) →
  assert(∀i,j ∈ ℕ: i ≠ j → F_i ∩ F_j = ∅) →
  
  define(injection: 𝒫(ℕ) → 𝕄, N ↦ ⊔_{i∈N} F_i) →
  assert(|𝕄| ≥ |𝒫(ℕ)|) →
  apply(PowerSetOfNaturalsHasContinuumCardinality()) →
  assert(|𝒫(ℕ)| = 𝔠) →
  conclude(|𝕄| ≥ 𝔠)
}