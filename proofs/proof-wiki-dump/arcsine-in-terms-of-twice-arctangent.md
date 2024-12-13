theorem Arcsine_Double_Arctan() {
  assert(
    ∀x ∈ ℝ, (-1 < x < 1) ⇒ 
    arcsin(x) = 2arctan(x/(1 + √(1 - x²)))
  )
} ↔

proof Arcsine_Double_Arctan() {
  setVar(x: ℝ, -1 < x < 1) →
  setVar(θ: ℝ) →
  assert(θ = arcsin(x)) →
  assert(x = sin(θ)) →
  assert(-π/2 < θ < π/2) →
  
  lemma Half_Angle_Tangent() {
    assert(
      tan(θ/2) = sin(θ)/(1 + cos(θ))
    )
  } →
  
  lemma Trig_Identity() {
    assert(
      cos(θ) = √(1 - sin²(θ))
    )
  } →
  
  apply(Half_Angle_Tangent()) →
  assert(tan(θ/2) = sin(θ)/(1 + cos(θ))) →
  apply(Trig_Identity()) →
  assert(tan(θ/2) = sin(θ)/(1 + √(1 - sin²(θ)))) →
  substitute(sin(θ) = x) →
  assert(tan(θ/2) = x/(1 + √(1 - x²))) →
  apply(arctan) →
  assert(θ/2 = arctan(x/(1 + √(1 - x²)))) →
  multiply(2) →
  assert(θ = 2arctan(x/(1 + √(1 - x²)))) →
  substitute(θ = arcsin(x)) →
  assert(arcsin(x) = 2arctan(x/(1 + √(1 - x²))))
}