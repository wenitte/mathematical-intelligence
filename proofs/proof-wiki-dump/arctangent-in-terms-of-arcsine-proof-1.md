theorem Arctangent_Arcsine_Relation() {
  assert(
    ∀x ∈ ℝ ⇒ arctan(x) = arcsin(x/√(1 + x²))
  )
} ↔

proof Arctangent_Arcsine_Relation() {
  setVar(θ: ℝ) →
  assert(θ = arctan(x)) →
  assert(x = tan(θ)) →
  
  chain_equality() {
    arcsin(x/√(1 + x²)) →
    arcsin(tan(θ)/√(1 + tan²(θ))) →
    arcsin(tan(θ)/√(sec²(θ))) →
    arcsin(sin(θ)/(cos(θ) * (1/cos(θ)))) →
    arcsin(sin(θ)) →
    θ →
    arctan(x)
  } ↔

  lemma Steps_Justification() {
    assert(1 + tan²(θ) = sec²(θ)) ∧
    assert(tan(θ) = sin(θ)/cos(θ)) ∧
    assert(arcsin(sin(θ)) = θ) ∧
    assert(θ = arctan(x))
  } →
  
  conclude(arctan(x) = arcsin(x/√(1 + x²)))
}