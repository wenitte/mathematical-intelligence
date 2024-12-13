theorem Arcsine_In_Terms_Of_Arctangent() {
  assert(
    ∀x ∈ ℝ where -1 < x < 1 ⇒
    arcsin(x) = arctan(x/√(1-x²))
  )
} ↔

proof Arcsine_In_Terms_Of_Arctangent() {
  setVar(θ: ℝ) →
  assert(θ = arcsin(x)) →
  assert(x = sin(θ)) ∧
  assert(-π/2 < θ < π/2) →
  
  lemma Substitution_Step() {
    assert(arctan(x/√(1-x²)) = arctan(sin(θ)/√(1-sin²(θ))))
  } →
  
  lemma Sum_Of_Squares() {
    assert(sin²(θ) + cos²(θ) = 1) →
    assert(1 - sin²(θ) = cos²(θ))
  } →
  
  apply(Sum_Of_Squares()) →
  assert(arctan(sin(θ)/√(1-sin²(θ))) = arctan(sin(θ)/√(cos²(θ)))) →
  
  lemma Tangent_Definition() {
    assert(sin(θ)/cos(θ) = tan(θ))
  } →
  
  apply(Tangent_Definition()) →
  assert(arctan(sin(θ)/√(cos²(θ))) = arctan(tan(θ))) →
  
  lemma Arctangent_Property() {
    assert(∀θ ∈ (-π/2, π/2) ⇒ arctan(tan(θ)) = θ)
  } →
  
  apply(Arctangent_Property()) →
  assert(arctan(tan(θ)) = θ) →
  assert(θ = arcsin(x)) →
  conclude(arctan(x/√(1-x²)) = arcsin(x))
}