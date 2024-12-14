theorem Chain_Rule_Probability() {
  assert(
    ∀E(Ω, Σ, Pr) ∧ ∀A,B ∈ Σ ∧ Pr(B) > 0 ⇒
    P(A|B) = Pr(A∩B)/Pr(B)
  )
} ↔

proof Chain_Rule_Probability() {
  setVar(E: ProbabilitySpace(Ω, Σ, Pr)) →
  setVar(A,B: Event ∈ Σ) →
  assume(Pr(B) > 0) →
  
  lemma Event_Occurrence() {
    assert(
      B_occurred ⇒ (A_occurred ↔ (A∩B)_occurred)
    )
  } →
  
  apply(Event_Occurrence()) →
  
  lemma Conditional_Definition() {
    assert(
      B_occurred ⇒ P(A|B) = Pr(A∩B)_given_B
    )
  } →
  
  assert(
    Pr(A∩B) = P(A|B) · Pr(B)
  ) →
  
  conclude(
    P(A|B) = Pr(A∩B)/Pr(B)
  ) →
  
  corollary Multiplication_Rule() {
    assert(
      P(A|B) · Pr(B) = Pr(A∩B)
    )
  }
}