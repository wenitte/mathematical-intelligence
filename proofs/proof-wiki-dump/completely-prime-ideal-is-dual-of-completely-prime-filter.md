theorem Completely_Prime_Ideal_Dual() {
  let L: CompleteLattice,
  let K: Subset(L)
  
  assert(
    IsCompletelyPrimeFilter(K, L) ↔ IsCompletelyPrimeIdeal(K, L)
  )
}

proof Completely_Prime_Ideal_Dual() {
  definition CompletelyPrimeFilter() {
    assert(
      IsCompletelyPrimeFilter(K, L) ↔
      (IsProperFilter(K, L) ∧
       ∀A ⊆ L: (∧A ∈ K → A ∩ K ≠ ∅))
    )
  } →
  
  lemma DualityPrinciple() {
    assert(
      Dual(IsProperFilter(K, L)) ↔ IsProperIdeal(K, L) ∧
      Dual(∧A ∈ K → A ∩ K ≠ ∅) ↔ (∨A ∈ K → A ∩ K ≠ ∅)
    )
  } →
  
  apply(DualityPrinciple()) →
  
  definition CompletelyPrimeIdeal() {
    assert(
      IsCompletelyPrimeIdeal(K, L) ↔
      (IsProperIdeal(K, L) ∧
       ∀A ⊆ L: (∨A ∈ K → A ∩ K ≠ ∅))
    )
  } →
  
  conclude(
    IsCompletelyPrimeFilter(K, L) ↔ IsCompletelyPrimeIdeal(K, L)
  )
}