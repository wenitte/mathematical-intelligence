theorem Complex_Conjugate_Argument() {
  assert(
    ∀z ∈ ℂ ⇒ arg(z̄) = -arg(z)
  )
} ↔

proof Complex_Conjugate_Argument() {
  setVar(z: ℂ) →
  setVar(r: ℝ⁺) →
  setVar(θ: ℝ) →
  
  assert(z = r(cos(θ) + i·sin(θ))) →
  
  lemma Complex_Conjugate_Form() {
    assert(
      z̄ = r(cos(θ) - i·sin(θ))
    )
  } →
  
  lemma Trig_Properties() {
    assert(
      cos(-θ) = cos(θ) ∧ 
      sin(-θ) = -sin(θ)
    )
  } →
  
  apply(Complex_Conjugate_Form()) →
  apply(Trig_Properties()) →
  
  assert(
    z̄ = r(cos(-θ) + i·sin(-θ))
  ) →
  
  assert(
    arg(z̄) = -θ ∧
    arg(z) = θ
  ) →
  
  conclude(
    arg(z̄) = -arg(z)
  )
}