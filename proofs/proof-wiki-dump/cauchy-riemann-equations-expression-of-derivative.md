theorem Cauchy_Riemann_Equations() {
  assert(
    let D ⊆ ℂ be open ∧
    let f: D → ℂ ∧
    let u,v: {(x,y) ∈ ℝ² : x + iy = z ∈ D} → ℝ ∧
    u(x,y) = Re(f(z)) ∧
    v(x,y) = Im(f(z))
  ) ↔
  assert(
    f is complex-differentiable in D ⟺
    (u,v are differentiable in domain ∧
     (∂u/∂x = ∂v/∂y) ∧
     (∂u/∂y = -∂v/∂x))
  ) ∧
  assert(
    ∀z ∈ D → f'(z) = ∂f/∂x(z) = -i(∂f/∂y(z))
  )
}

proof Cauchy_Riemann_Equations() {
  setVar(z = x + iy) →
  
  lemma Partial_X() {
    assert(∂f/∂x(z) = ∂u/∂x(x,y) + i(∂v/∂x(x,y))) →
    assert(= Re(f'(z)) + i(Im(f'(z)))) →
    assert(= f'(z))
  } →

  lemma Partial_Y() {
    assert(-i(∂f/∂y(z)) = -i(∂u/∂y(x,y) + i(∂v/∂y(x,y)))) →
    assert(= -i(-Im(f'(z)) + i(Re(f'(z))))) →
    assert(= f'(z))
  } →

  apply(Partial_X()) ∧ apply(Partial_Y()) →
  assert(f'(z) = ∂f/∂x(z) = -i(∂f/∂y(z)))
}