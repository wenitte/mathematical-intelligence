theorem Cauchy_Goursat() {
  assert(
    ∀f: D → ℂ [holomorphic] ∧
    D ⊆ ℂ [simply_connected_domain] ∧
    C [closed_contour_in_D] →
    ∮_C f(z)dz = 0
  )
} ↔

proof Cauchy_Goursat() {
  setVar(f: D → ℂ) →
  setVar(u,v: ℝ² → ℝ) →
  assert(f(x + iy) = u(x,y) + iv(x,y)) →
  
  lemma Cauchy_Riemann() {
    assert(
      ∂u/∂x = ∂v/∂y = Re(f'(z)) ∧
      ∂u/∂y = -∂v/∂x = -Im(f'(z))
    )
  } →

  lemma Partial_Derivatives_Continuous() {
    assert(
      Re(f'), Im(f') [continuous] →
      ∂u/∂x, ∂u/∂y, ∂v/∂x, ∂v/∂y [continuous]
    )
  } →

  case Simple_Closed_Contour() {
    setVar(φ: ℝ² → ℂ, φ(x,y) = x + iy) →
    setVar(γ: [a,b] → ℝ² [piecewise_continuous]) →
    assert(
      ∮_C f(z)dz = ∮_γ (u,-v)·dl + i∮_γ (v,u)·dl
    ) →
    assert(φ(Int(γ)) = Int(C)) →
    assert(Int(γ) ⊆ φ⁻¹(D)) →
    
    case Positive_Orientation() {
      apply(Greens_Theorem()) →
      assert(
        ∮_γ (u,-v)·dl + i∮_γ (v,u)·dl = 
        ∬_Int(γ) (-∂v/∂x - ∂u/∂y)dxdy + i∬_Int(γ) (∂u/∂x - ∂v/∂y)dxdy
      ) →
      apply(Cauchy_Riemann()) →
      assert(∮_C f(z)dz = 0)
    } →
    
    case Negative_Orientation() {
      assert(∮_C f(z)dz = -∮_(-C) f(z)dz) →
      apply(Positive_Orientation(-C)) →
      assert(∮_C f(z)dz = 0)
    }
  } →

  lemma Has_Primitive() {
    apply(Zero_Simple_Staircase_Integral()) →
    apply(Primitive_Connected_Domain()) →
    assert(∮_C f(z)dz = 0)
  } →
  
  assert(∮_C f(z)dz = 0)
}