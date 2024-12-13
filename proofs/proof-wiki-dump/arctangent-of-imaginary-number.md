theorem Arctangent_Imaginary() {
  assert(
    ∀x ∈ (-1,1) ⇒ 
    tan⁻¹(ix) = (i/2)ln((1+x)/(1-x))
  )
} ↔

proof Arctangent_Imaginary() {
  setVar(x: ℝ, x ∈ (-1,1)) →
  setVar(y: ℂ, y = tan⁻¹(ix)) →
  setVar(θ: ℝ, x = tanh(θ)) →
  assert(θ = tanh⁻¹(x)) →

  lemma Step1() {
    assert(tan(y) = ix) →
    assert(tan(y) = i·tanh(θ)) →
    assert(tan(y) = tan(iθ))
  } →

  lemma TanInverse() {
    assert(tan(y) = tan(iθ) ⇒ y = iθ)
  } →

  apply(Step1()) →
  apply(TanInverse()) →
  assert(y = iθ) →
  assert(y = i·tanh⁻¹(x)) →

  lemma HyperbolicArctangent() {
    assert(
      tanh⁻¹(x) = (1/2)ln((1+x)/(1-x))
    )
  } →

  apply(HyperbolicArctangent()) →
  assert(y = (i/2)ln((1+x)/(1-x))
}