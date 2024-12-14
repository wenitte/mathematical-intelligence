theorem Complex_Cosine_Entire() {
  assert(
    ∀z ∈ ℂ ⇒ cos: ℂ → ℂ is entire
  )
} ↔

proof Complex_Cosine_Entire_1() {
  setDef(cos(z) = ∑_{n=0}^∞ (-1)^n z^{2n}/(2n)!) →
  lemma Series_Convergence() {
    assert(
      cos is entire ↔ power_series_everywhere_convergent ∧
      power_series_everywhere_convergent ↔ 
      lim_{n→∞} |(-1)^{n+1}/(2n+2)! × (2n)!/(-1)^n| = 0
    )
  } →
  assert(
    |(-1)^{n+1}/(2n+2)! × (2n)!/(-1)^n| =
    |-1| × |(2n)!/((2n+2)(2n+1)(2n)!)|
  ) →
  assert(
    lim_{n→∞} 1/((2n+2)(2n+1)) = 0
  ) →
  conclude(cos is entire)
}

proof Complex_Cosine_Entire_2() {
  setVar(f(z) = exp(z)) →
  setVar(g(z) = iz) →
  setVar(h(z) = -iz) →
  lemma Function_Properties() {
    assert(
      f is entire ∧
      g is entire ∧
      h is entire
    )
  } →
  apply(Composition_Entire_Functions) →
  assert(f∘g is entire ∧ f∘h is entire) →
  apply(Linear_Combination_Entire) →
  assert(1/2(f∘g + f∘h) is entire) →
  assert(
    1/2(exp(iz) + exp(-iz)) = cos(z)
  ) →
  conclude(cos is entire)
}