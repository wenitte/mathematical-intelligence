theorem Riemann_Zeta_Eta_Continuation() {
  let(ζ: ComplexFunction, η: ComplexFunction)
  assert(
    (∀s ∈ ℂ: Re(s) > 0 ∧ s ≠ 1) ⇒
    ζ(s) = η(s)/(1 - 2^(1-s)) ∧
    isAnalytic(η(s)/(1 - 2^(1-s)))
  )
} ↔

proof Riemann_Zeta_Eta_Continuation() {
  lemma Zeta_Eta_Equivalence() {
    assert(
      ∀s ∈ ℂ: Re(s) > 1 ⇒
      ζ(s) = η(s)/(1 - 2^(1-s))
    )
  } →
  
  lemma Eta_Analyticity() {
    assert(
      ∀s ∈ ℂ: Re(s) > 0 ∧ s ≠ 1 ⇒
      isAnalytic(η(s))
    )
  } →
  
  apply(Zeta_Eta_Equivalence()) →
  apply(Eta_Analyticity()) →
  
  assert(
    ∀s ∈ ℂ: (Re(s) > 0 ∧ s ≠ 1) ⇒
    isAnalytic(1/(1 - 2^(1-s)))
  ) →
  
  conclude(
    ∀s ∈ ℂ: (Re(s) > 0 ∧ s ≠ 1) ⇒
    isAnalytic(η(s)/(1 - 2^(1-s)))
  )
}