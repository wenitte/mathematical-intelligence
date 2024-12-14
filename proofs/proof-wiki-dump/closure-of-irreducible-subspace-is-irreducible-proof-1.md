theorem Closure_Irreducible_Subspace() {
  let(T = ⟨S,τ⟩: TopologicalSpace) →
  let(Y ⊆ S: Subset) →
  assert(
    isIrreducible(Y,T) →
    isIrreducible(closure(Y,T),T)
  )
} ↔

proof Closure_Irreducible_Subspace() {
  lemma Irreducible_Definition() {
    assert(
      isIrreducible(Y,T) ↔
      ∀A,B ∈ τ_Y: [A ≠ ∅ ∧ B ≠ ∅ → A ∩ B ≠ ∅]
    )
  } →
  
  lemma Open_Sets_Correspondence() {
    assert(
      ∀U ⊆ closure(Y,T): [
        isOpen(U,closure(Y,T)) ↔
        ∃V ∈ τ_Y: U = V ∩ closure(Y,T)
      ]
    )
  } →

  apply(Irreducible_Definition()) →
  apply(Open_Sets_Correspondence()) →
  
  assert(
    ∀A,B ⊆ closure(Y,T): [
      isOpen(A,closure(Y,T)) ∧ 
      isOpen(B,closure(Y,T)) ∧
      A ≠ ∅ ∧ B ≠ ∅ →
      A ∩ B ≠ ∅
    ]
  ) →

  byContradiction() {
    assume(¬isIrreducible(Y,T)) →
    assert(∃Y₁,Y₂ ⊂ Y: [
      isClosed(Y₁,Y) ∧
      isClosed(Y₂,Y) ∧
      Y = Y₁ ∪ Y₂
    ]) →
    assert(closure(Y,T) = closure(Y₁,T) ∪ closure(Y₂,T)) →
    assert(contradiction())
  } →
  
  conclude(isIrreducible(closure(Y,T),T))
}