theorem SinXoverX_Bounded() {
  assert(
    ∀x ∈ ℝ ⇒ |sin(x)/x| ≤ 1
  )
}

proof SinXoverX_Bounded() {
  setVar(x: ℝ) →
  lemma DerivativeSine() {
    assert(
      D[sin(x)] = cos(x)
    )
  } →
  lemma MeanValueTheorem() {
    assert(
      ∃ξ ∈ ℝ: [
        (ξ ∈ (0,x)) ∧
        ((sin(x) - sin(0))/(x - 0) = cos(ξ))
      ]
    )
  } →
  apply(DerivativeSine()) →
  apply(MeanValueTheorem()) →
  simplify(sin(0) = 0) →
  assert(sin(x)/x = cos(ξ)) →
  lemma CosineBounded() {
    assert(
      ∀ξ ∈ ℝ ⇒ |cos(ξ)| ≤ 1
    )
  } →
  apply(CosineBounded()) →
  assert(|sin(x)/x| = |cos(ξ)| ≤ 1)
}