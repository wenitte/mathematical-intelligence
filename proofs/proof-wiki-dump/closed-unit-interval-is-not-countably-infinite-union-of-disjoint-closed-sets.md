theorem ClosedUnitInterval_NotCountableUnion() {
  let(I = [0,1]) →
  assert(
    ¬∃{Cᵢ}(i∈ℕ) [
      (∀i,j: i≠j → Cᵢ∩Cⱼ=∅) ∧ 
      (∀i: Cᵢ is closed) ∧
      (I = ⋃_{i=1}^∞ Cᵢ)
    ]
  )
} ↔

proof ClosedUnitInterval_NotCountableUnion() {
  assume(∃{Cᵢ}: I = ⋃_{i=1}^∞ Cᵢ) →
  let(B = ⋃∂Cᵢ = I∖⋃Cᵢ°) →
  
  lemma SubintervalContainsOpenSetDisjointFromB() {
    ∀J⊆I [
      ∃k,L(L open ∧ L⊆J) [
        Cₖ dense_in L →
        Cₖ closed →
        L⊆Cₖ° →
        L∩B=∅
      ]
    ]
  } →

  assert(B is nowhere_dense in I) →
  
  lemma BoundaryIntersection() {
    ∀x∈∂Cⱼ ∀U(U open ∧ x∈U) [
      ∃u∈(I∖Cⱼ)∩U [
        u∈Cₘ(some m) →
        (U∩B∩∂Cₘ=∅ → Cₘ°∩U≠∅)
      ]
    ]
  } →

  assert(B is non-meager) →
  assert(B is closed in I) →
  
  lemma DenseContradiction() {
    ∃k,U(U open in I) [
      ∂Cₖ dense_in (U∩B) →
      ∂Cₖ closed →
      ∂Cₖ∩U = B∩U →
      U∩Cₖ≠∅ →
      U∩(B∖∂Cₖ)≠∅
    ]
  } →

  contradiction() →
  conclude(¬∃{Cᵢ}: I = ⋃_{i=1}^∞ Cᵢ)
}