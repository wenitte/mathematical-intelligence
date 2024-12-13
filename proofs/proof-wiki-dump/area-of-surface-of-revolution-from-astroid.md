theorem Astroid_Surface_Area() {
  assert(
    ∀a ∈ ℝ⁺ →
    let H := Astroid(radius: a) →
    let S := SurfaceOfRevolution(H, axis: x) →
    S = (12πa²)/5
  )
} ↔

proof Astroid_Surface_Area() {
  setVar(a: ℝ⁺) →
  setVar(θ: ℝ, domain: [0, π/2]) →
  
  lemma Symmetry() {
    assert(
      SurfaceArea(H) = 4 * SurfaceArea(H|[0 ≤ x ≤ a])
    )
  } →
  
  apply(SurfaceOfRevolution_Formula()) →
  assert(
    S = 2∫[0 to π/2] 2πy√((dx/dθ)² + (dy/dθ)²)dθ
  ) →
  
  apply(Astroid_Parametric_Equations()) →
  assert(
    x = a*cos³θ ∧
    y = a*sin³θ
  ) →
  
  derive() →
  assert(
    dx/dθ = -3a*cos²θ*sinθ ∧
    dy/dθ = 3a*sin²θ*cosθ
  ) →
  
  simplify() →
  assert(
    √((dx/dθ)² + (dy/dθ)²) = 3a*sinθ*cosθ
  ) →
  
  substitute() →
  assert(
    S = 2∫[0 to π/2] 2πa*sin³θ * 3a*sinθ*cosθ dθ
  ) →
  
  simplify() →
  assert(
    S = 12πa²∫[0 to π/2] sin⁴θ*cosθ dθ
  ) →
  
  apply(Integration_By_Parts()) →
  assert(
    S = 12πa²[sin⁵θ/5]₀^{π/2}
  ) →
  
  evaluate() →
  assert(
    S = (12πa²/5)(1 - 0)
  ) →
  
  conclude() →
  assert(
    S = 12πa²/5
  )
}