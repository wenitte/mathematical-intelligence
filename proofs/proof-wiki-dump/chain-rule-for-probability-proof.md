theorem Probability_Chain_Rule() {
  assert(
    ∀E(Ω, Σ, Pr: ProbabilitySpace) ∧
    ∀A,B ∈ Σ ∧
    Pr(B) > 0 ⇒
    P(A|B) = Pr(A∩B)/Pr(B)
  )
}

proof Probability_Chain_Rule() {
  setVar(E: ProbabilitySpace) →
  setVar(A,B: Event ∈ Σ) →
  assume(Pr(B) > 0) →
  
  lemma Event_Occurrence() {
    assert(
      B_occurred ⇒ 
      (A_occurred ↔ (A∩B)_occurred)
    )
  } →

  lemma Conditional_Given_B() {
    assert(
      B_occurred ⇒
      P(A|B) = Pr(A∩B)
    )
  } →

  lemma Joint_Probability() {
    assert(
      Pr(A∩B) = P(A|B) × Pr(B)
    )
  } →

  apply(Joint_Probability()) →
  assert(P(A|B) = Pr(A∩B)/Pr(B)) →
  conclude(P(A|B) = Pr(A∩B)/Pr(B))
}