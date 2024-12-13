theorem Argument_Complex_Conjugate_Equals_Reciprocal() {
  assert(
    ∀z ∈ ℂ ⇒ arg(z̄) = arg(1/z)
  )
} ↔

proof Argument_Complex_Conjugate_Equals_Reciprocal() {
  setVar(z: ℂ) →
  setVar(r: ℝ⁺) →
  setVar(θ: ℝ) →
  
  assert(z = r(cos(θ) + i·sin(θ))) →
  
  lemma Complex_Conjugate() {
    assert(z̄ = r(cos(θ) - i·sin(θ)))
  } →
  
  lemma Reciprocal_Form() {
    assert(1/z = 1/r(cos(θ) - i·sin(θ)))
  } →
  
  lemma Trig_Identity() {
    assert(
      cos(-θ) = cos(θ) ∧
      sin(-θ) = -sin(θ)
    )
  } →
  
  apply(Complex_Conjugate()) →
  apply(Reciprocal_Form()) →
  apply(Trig_Identity()) →
  
  assert(1/z = 1/r(cos(-θ) + i·sin(-θ))) →
  assert(arg(z̄) = -θ) →
  assert(arg(1/z) = -θ) →
  assert(arg(z̄) = arg(1/z))
}