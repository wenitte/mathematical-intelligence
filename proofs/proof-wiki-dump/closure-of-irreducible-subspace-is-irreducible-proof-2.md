theorem Closure_Is_Irreducible() {
  assume(
    T = (S, τ) : TopologicalSpace ∧
    Y ⊆ S ∧
    isIrreducible(Y, T)
  )
  assert(
    isIrreducible(Y⁻, T)
  )
} ↔

proof Closure_Is_Irreducible() {
  def IrreducibleCondition() {
    ∀A₁,A₂ ∈ ClosedSets(T) →
    (Y⁻ ⊆ A₁ ∪ A₂) → (∃i₀ ∈ {1,2} : Y⁻ ⊆ Aᵢ₀)
  } →
  
  setVar(A₁,A₂: ClosedSets(T)) →
  assume(Y⁻ ⊆ A₁ ∪ A₂) →
  
  assert(Y ⊆ A₁ ∪ A₂) →
  
  lemma ApplyIrreducible() {
    apply(isIrreducible(Y, T)) →
    assert(∃i₀ ∈ {1,2} : Y ⊆ Aᵢ₀)
  } →
  
  lemma ClosureSubsetProperty() {
    assert(
      ∀X,Z ∈ P(S) → 
      (X ⊆ Z ∧ isClosed(Z)) → X⁻ ⊆ Z
    )
  } →
  
  apply(ClosureSubsetProperty()) →
  assert(Y⁻ ⊆ Aᵢ₀) →
  
  conclude(isIrreducible(Y⁻, T))
}