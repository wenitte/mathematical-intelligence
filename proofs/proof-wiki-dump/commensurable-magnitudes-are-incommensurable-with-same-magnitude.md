theorem Commensurable_Incommensurable_Transitive() {
  assert(
    ∀A,B,C ∈ Magnitudes ⇒
    (isCommensurable(A,B) ∧ isIncommensurable(A,C)) →
    isIncommensurable(B,C)
  )
} ↔

proof Commensurable_Incommensurable_Transitive() {
  setVar(A,B,C: Magnitudes) →
  assume(isCommensurable(A,B)) →
  assume(isIncommensurable(A,C)) →
  
  lemma Proof_By_Contradiction() {
    assume(isCommensurable(B,C)) →
    apply(Commensurability_Transitive(A,B,C)) →
    assert(isCommensurable(A,C)) →
    assert(isCommensurable(A,C) ∧ isIncommensurable(A,C)) →
    assert(contradiction())
  } →
  
  apply(Proof_By_Contradiction()) →
  assert(¬isCommensurable(B,C)) →
  assert(isIncommensurable(B,C))
}