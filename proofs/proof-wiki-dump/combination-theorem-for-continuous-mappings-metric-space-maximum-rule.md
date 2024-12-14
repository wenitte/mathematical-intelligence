theorem ContinuousMaximum(M: MetricSpace, ℝ: RealNumbers) {
  assert(
    ∀f,g: M → ℝ ∧
    Continuous(f,M) ∧ Continuous(g,M) ⇒
    Continuous(max{f,g}, M)
  )
}

proof ContinuousMaximum() {
  setVar(a ∈ M) →
  
  lemma MaxRepresentation() {
    assert(
      ∀x,y ∈ ℝ ⇒
      max{x,y} = (1/2)(x + y + |x - y|)
    )
  } →
  
  apply(MaxRepresentation()) →
  assert(
    max{f(x),g(x)} = (1/2)(f(x) + g(x) + |f(x) - g(x)|)
  ) →
  
  lemma ContinuousDifference() {
    assert(
      Continuous(f,a) ∧ Continuous(g,a) ⇒
      Continuous(f(x) - g(x), a)
    )
  } →
  
  lemma ContinuousAbsolute() {
    assert(
      Continuous(f(x) - g(x), a) ⇒
      Continuous(|f(x) - g(x)|, a)
    )
  } →
  
  lemma ContinuousSum() {
    assert(
      Continuous(f,a) ∧ Continuous(g,a) ⇒
      Continuous(f(x) + g(x), a)
    )
  } →
  
  apply(ContinuousDifference()) →
  apply(ContinuousAbsolute()) →
  apply(ContinuousSum()) →
  
  lemma ContinuousScalar() {
    assert(
      Continuous(h,a) ⇒
      Continuous((1/2)h, a)
    )
  } →
  
  apply(ContinuousScalar()) →
  
  assert(
    Continuous(max{f,g}, a)
  ) →
  
  assert(
    ∀a ∈ M ⇒ Continuous(max{f,g}, a)
  ) →
  
  conclude(
    Continuous(max{f,g}, M)
  )
}