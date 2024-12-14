theorem Irreducible_Closure() {
  assert(
    ∀T(T = (S,τ) ∧ T ∈ TopologicalSpace) ∧
    ∀Y(Y ⊆ S ∧ isIrreducible(Y,T)) →
    isIrreducible(closure(Y,T), T)
  )
} ↔

proof Irreducible_Closure() {
  method Proof2() {
    setVar(T: TopologicalSpace) →
    setVar(Y: Subset(S)) →
    
    lemma Reduction() {
      assert(
        isIrreducible(closure(Y,T), T) ↔
        ∀A₁,A₂(isClosed(A₁,T) ∧ isClosed(A₂,T) ∧
        closure(Y,T) ⊆ (A₁ ∪ A₂) →
        ∃i₀∈{1,2}: closure(Y,T) ⊆ Aᵢ₀)
      )
    } →

    assume(A₁,A₂: ClosedSet(T)) →
    assume(closure(Y,T) ⊆ (A₁ ∪ A₂)) →
    assert(Y ⊆ (A₁ ∪ A₂)) →
    
    apply(isIrreducible(Y,T)) →
    assert(∃i₀∈{1,2}: Y ⊆ Aᵢ₀) →
    
    apply(Closure_Subset_Of_Closed()) →
    assert(closure(Y,T) ⊆ Aᵢ₀) →
    
    conclude(isIrreducible(closure(Y,T), T))
  }
} ↔

lemma Closure_Subset_Of_Closed() {
  assert(
    ∀X,C(X ⊆ C ∧ isClosed(C,T) →
    closure(X,T) ⊆ C)
  )
}