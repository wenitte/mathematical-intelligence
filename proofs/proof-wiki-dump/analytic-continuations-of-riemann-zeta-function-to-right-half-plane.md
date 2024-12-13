theorem RiemannZetaContinuation() {
  assert(
    ∃!f: ℂ → ℂ where [
      f analytic on {s ∈ ℂ: Re(s) > 0} \ {1} ∧
      f(s) = ζ(s) for Re(s) > 1
    ]
  )
}

proof RiemannZetaContinuation() {
  lemma InitialAnalyticity() {
    assert(ζ(s) analytic for Re(s) > 1)
  } →
  
  lemma DomainConnected() {
    assert({s ∈ ℂ: Re(s) > 0} \ {1} is connected)
  } →
  
  lemma UniquenessProperty() {
    apply(InitialAnalyticity()) ∧
    apply(DomainConnected()) →
    assert(
      ∀f,g analytic on {s ∈ ℂ: Re(s) > 0} \ {1} →
      [f(s) = g(s) for Re(s) > 1] →
      [f(s) = g(s) for all s ∈ {Re(s) > 0} \ {1}]
    )
  } →
  
  lemma ExistenceProperty() {
    assert(
      ∃f analytic on {s ∈ ℂ: Re(s) > 0} \ {1} where
      f(s) = ζ(s) for Re(s) > 1
    )
  } →
  
  apply(UniquenessProperty()) ∧
  apply(ExistenceProperty()) →
  assert(
    ∃!f analytic continuation of ζ to {s ∈ ℂ: Re(s) > 0} \ {1}
  )
}