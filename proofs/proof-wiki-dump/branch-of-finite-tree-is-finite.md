theorem FiniteTreeBranchIsFinite() {
  assert(
    ∀T: Tree ∧ isFinite(T) ∧ hasRoot(T, r_T) ∧
    ∀Γ: Branch ∧ isBranchOf(Γ, T) 
    ⇒ isFinite(Γ)
  )
} ↔

proof FiniteTreeBranchIsFinite() {
  setVar(T: Tree, Γ: Branch) →
  assume(isFinite(T) ∧ isBranchOf(Γ, T)) →
  
  lemma ProofByContradiction() {
    assume(¬isFinite(Γ)) →
    assert(countNodes(Γ) = ∞) →
    
    lemma SubsetOfFiniteIsFinite() {
      assert(
        ∀A,B: Set ∧ isFinite(A) ∧ B ⊆ A 
        ⇒ isFinite(B)
      )
    } →
    
    assert(Γ ⊆ T) →
    apply(SubsetOfFiniteIsFinite()) →
    assert(isFinite(Γ)) →
    assert(isFinite(Γ) ∧ ¬isFinite(Γ)) →
    assert(contradiction())
  } →
  
  apply(ProofByContradiction()) →
  assert(isFinite(Γ))
}