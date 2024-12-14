theorem ContinuousDifference() {
  assert(
    ∀S ⊆ ℂ[open] ∧ ∀f,g: ℂ → ℂ ∧
    Continuous(f,S) ∧ Continuous(g,S) ⇒
    Continuous(f-g,S)
  )
}

proof ContinuousDifference() {
  setVar(S: open_subset(ℂ)) →
  setVar(f,g: ℂ → ℂ) →
  
  lemma FunctionEquivalence() {
    assert(
      ∀x ∈ S: (f-g)(x) = (f+(-g))(x)
    )
  } →
  
  lemma NegativeContinuous() {
    assert(
      Continuous(g,S) ⇒ Continuous(-g,S)
    )
  } →
  
  lemma SumContinuous() {
    assert(
      Continuous(f,S) ∧ Continuous(-g,S) ⇒ 
      Continuous(f+(-g),S)
    )
  } →
  
  apply(NegativeContinuous()) →
  apply(SumContinuous()) →
  apply(FunctionEquivalence()) →
  
  assert(Continuous(f-g,S))
}