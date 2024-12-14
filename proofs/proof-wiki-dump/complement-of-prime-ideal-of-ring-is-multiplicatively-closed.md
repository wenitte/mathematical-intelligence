theorem ComplementPrimeIdealMultClosed() {
  assert(
    ∀R: CommutativeRingWithUnity ∧
    ∀P ⊆ R ∧ isPrimeIdeal(P, R) →
    isMultiplicativelyClosed(R \ P)
  )
} ↔

proof ComplementPrimeIdealMultClosed() {
  setVar(R: CommutativeRingWithUnity) →
  setVar(P: Ideal(R)) →
  assert(isPrimeIdeal(P, R)) →
  assert(1_R ∈ R \ P) by isPrimeIdealProper() →
  
  lemma ByContradiction() {
    assume(¬isMultiplicativelyClosed(R \ P)) →
    assert(∃a,b ∈ R \ P: ab ∉ R \ P) →
    assert(ab ∈ P) →
    assert(
      (a ∉ P ∧ b ∉ P ∧ ab ∈ P) →
      contradiction(isPrimeIdeal(P, R))
    )
  } →
  
  apply(ByContradiction()) →
  assert(isMultiplicativelyClosed(R \ P))
}

proof2 ComplementPrimeIdealMultClosed() {
  apply(PrimeIdealDefinition3(R, P))
}