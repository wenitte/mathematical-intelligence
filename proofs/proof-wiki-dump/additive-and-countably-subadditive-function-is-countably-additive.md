theorem CountablyAdditive() {
  let(Σ: σ-algebra, X: set) →
  let(f: Σ → ℝ̄≥0) →
  assert(
    Additive(f) ∧ CountablySubadditive(f) →
    CountablyAdditive(f)
  )
} ↔

proof CountablyAdditive() {
  let({Sₙ}ₙ∈ℕ: sequence) →
  assert(∀i,j ∈ ℕ: i ≠ j → Sᵢ ∩ Sⱼ = ∅) →
  
  let(N ∈ ℕ) →
  
  lemma SubsetUnion() {
    assert(⋃ₙ₌₀ᴺ Sₙ ⊆ ⋃ₙ₌₀^∞ Sₙ)
  } →
  
  lemma MonotoneFunc() {
    assert(Additive(f) ∧ NonNegative(f) →
           f(⋃ₙ₌₀ᴺ Sₙ) ≤ f(⋃ₙ₌₀^∞ Sₙ))
  } →
  
  lemma FiniteUnion() {
    assert(f(⋃ₙ₌₀ᴺ Sₙ) = Σₙ₌₀ᴺ f(Sₙ))
  } →
  
  apply(MonotoneFunc(), FiniteUnion()) →
  assert(Σₙ₌₀ᴺ f(Sₙ) ≤ f(⋃ₙ₌₀^∞ Sₙ)) →
  
  lemma LimitInequality() {
    assert(lim_{N→∞} Σₙ₌₀ᴺ f(Sₙ) ≤ f(⋃ₙ₌₀^∞ Sₙ))
  } →
  
  assert(CountablySubadditive(f) → 
         f(⋃ₙ₌₀^∞ Sₙ) ≤ Σₙ₌₀^∞ f(Sₙ)) →
  
  assert(f(⋃ₙ₌₀^∞ Sₙ) = Σₙ₌₀^∞ f(Sₙ)) →
  assert(CountablyAdditive(f))
}