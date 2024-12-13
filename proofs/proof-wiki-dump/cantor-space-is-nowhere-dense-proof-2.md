theorem Cantor_Space_Nowhere_Dense() {
  let(T = (C, τ_d)) →
  assert(
    T.isNowhereDense(in: [0,1])
  )
} ↔

proof Cantor_Space_Nowhere_Dense() {
  let(Sₙ, Cₙ: CantorSetSequences) →
  assert(∀n ∈ ℕ → intervalLength(Sₙ) = 3⁻ⁿ) →
  
  setVar(a,b ∈ ℝ: 0 ≤ a < b ≤ 1) →
  assert((a,b) ⊆ [0,1] ∧ isOpen((a,b))) →
  
  lemma Interval_Length() {
    ∃n ∈ ℕ: 3⁻ⁿ < (b-a)
  } →
  
  apply(Interval_Length()) →
  assert(intervalLength(Sₙ) < (b-a)) →
  
  assert(¬overlapping(Sₙ) → ¬∃I ⊆ Cₙ: length(I) = (b-a)) →
  assert(C ⊆ Cₙ → ¬∃I ⊆ C: length(I) = (b-a)) →
  
  lemma Arbitrary_Interval() {
    ∀a,b ∈ [0,1]: (0 ≤ a < b ≤ 1) →
    ¬∃I ⊆ C: I = (a,b)
  } →
  
  apply(Arbitrary_Interval()) →
  assert(¬∃I ⊆ C: isOpen(I)) →
  conclude(T.isNowhereDense(in: [0,1]))
}