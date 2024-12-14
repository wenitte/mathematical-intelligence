theorem Complex_Plane_Homeomorphic() {
  let(ϕ: ℝ² → ℂ)
  assert(
    ∀(x,y) ∈ ℝ² → ϕ(x,y) = x + iy
  ) →
  assert(
    ϕ is_homeomorphism_between ℝ² and ℂ
  )
} ↔

proof Complex_Plane_Homeomorphic() {
  define(ϕ⁻¹: ℂ → ℝ²) →
  assert(
    ∀z ∈ ℂ → ϕ⁻¹(z) = (Re(z), Im(z))
  ) →
  
  lemma Inverse_Functions() {
    assert(
      ∀z ∈ ℂ → ϕ(ϕ⁻¹(z)) = Re(z) + i·Im(z) = z
    ) ∧
    assert(
      ∀(x,y) ∈ ℝ² → ϕ⁻¹(ϕ(x,y)) = (Re(x + iy), Im(x + iy)) = (x,y)
    )
  } →
  
  apply(Inverse_Functions()) →
  assert(ϕ is_bijective) →
  
  lemma Continuity_Of_ϕ() {
    setVar((x₁,y₁), (x₂,y₂): ℝ²) →
    assert(
      |ϕ(x₂,y₂) - ϕ(x₁,y₁)| = √((x₂-x₁)² + (y₂-y₁)²)
    ) →
    setVar(ε: ℝ₊) →
    setVar(δ = ε) →
    assert(
      √((x₂-x₁)² + (y₂-y₁)²) < δ → |ϕ(x₂,y₂) - ϕ(x₁,y₁)| < ε
    )
  } →
  
  apply(Continuity_Of_ϕ()) →
  assert(ϕ is_continuous) →
  assert(ϕ⁻¹ is_continuous by_similar_argument) →
  conclude(ϕ is_homeomorphism)
}