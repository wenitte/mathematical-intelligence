theorem Closure_vonNeumannBounded() {
  assert(
    ∀F ∈ {ℝ,ℂ} ∧ 
    ∀X: TopologicalVectorSpace(F) ∧
    ∀E ⊆ X: vonNeumannBounded(E) ⇒
    vonNeumannBounded(closure(E))
  )
} ↔

proof Closure_vonNeumannBounded() {
  setVar(F: {ℝ,ℂ}) →
  setVar(X: TopologicalVectorSpace(F)) →
  setVar(E ⊆ X: vonNeumannBounded(E)) →
  
  ∀V: OpenNeighborhood(0_X) → {
    lemma Separation() {
      assert(∃W: OpenNeighborhood(0_X) ∧ closure(W) ⊆ V)
    } →
    
    apply(Separation()) →
    setVar(W: OpenNeighborhood(0_X)) →
    assert(closure(W) ⊆ V) →
    
    apply(vonNeumannBounded(E)) →
    assert(∃s > 0: ∀t > s ⇒ E ⊆ tW) →
    
    lemma ClosureInclusion() {
      assert(∀A,B ⊆ X: A ⊆ B ⇒ closure(A) ⊆ closure(B))
    } →
    
    apply(ClosureInclusion()) →
    assert(∀t > s ⇒ closure(E) ⊆ closure(tW)) →
    
    lemma DilationClosure() {
      assert(∀t ∈ F, A ⊆ X: closure(tA) = t·closure(A))
    } →
    
    apply(DilationClosure()) →
    assert(∀t > s ⇒ closure(E) ⊆ t·closure(W)) →
    assert(∀t > s ⇒ closure(E) ⊆ tV) →
    assert(vonNeumannBounded(closure(E)))
  }
}