theorem CompletelyPrimeIdeal_Characterization() {
  let(L: CompleteLattice) →
  let(I: Subset(L)) →
  assert(
    IsCompletelyPrimeIdeal(I, L) ↔ (
      (∀A ⊆ L: (∧A ∈ I ↔ ∃a ∈ A: a ∈ I)) ∧
      (∀A ⊆ L: IsFinite(A) → (∨A ∈ I ↔ ∀a ∈ A: a ∈ I))
    )
  )
  where {
    def(∧A: Infimum(A, L)),
    def(∨A: Supremum(A, L))
  }
}

proof CompletelyPrimeIdeal_Characterization() {
  apply(DualityPrinciple) →
  ref(CompletelyPrimeFilter_Characterization) →
  assert(
    CompletelyPrimeFilter_Characterization.dual() ↔ 
    CompletelyPrimeIdeal_Characterization
  )
}