theorem CauchyRiemann_Sufficient() {
  assert(
    ∀D ⊆ ℂ [D is open] ∧
    ∀f: D → ℂ ∧
    ∀u,v: {(x,y) ∈ ℝ²: x + iy = z ∈ D} → ℝ ∧
    [u(x,y) = Re(f(z))] ∧ 
    [v(x,y) = Im(f(z))] ∧
    [u,v are differentiable] ∧
    [∂u/∂x = ∂v/∂y] ∧
    [∂u/∂y = -∂v/∂x] 
    ⇒
    [f is complex-differentiable in D] ∧
    ∀z∈D [f'(z) = ∂f/∂x = -i∂f/∂y]
  )
} ↔

proof CauchyRiemann_Sufficient() {
  setVar(h,k: ℝ∖{0}, t = h + ik: ℂ) →
  setVar((x,y): ℝ²) →
  
  lemma Define_Derivatives() {
    assert(
      a = ∂u/∂x(x,y) = ∂v/∂y(x,y) ∧
      b = -∂u/∂y(x,y) = ∂v/∂x(x,y)
    )
  } →

  lemma Epsilon_Function_Conditions() {
    assert(
      u(x+h,y) = u(x,y) + h(a + ε_ux(h)) ∧
      u(x,y+k) = u(x,y) + k(-b + ε_uy(k)) ∧
      v(x+h,y) = v(x,y) + h(b + ε_vx(k)) ∧
      v(x,y+k) = v(x,y) + k(a + ε_vy(h)) ∧
      lim[h,k→0](ε_ux, ε_uy, ε_vx, ε_vy) = 0
    )
  } →

  assert(z = x + iy) →
  
  lemma Complex_Function_Expansion() {
    assert(
      f(z+t) = f(z) + t(a + ib + ε(t)) ∧
      ε(t) = (h/t)ε_ux(h) + (h/t)iε_vx(h) - (k/t)iε_uy(k) + (k/t)ε_vy(k)
    )
  } →

  lemma Modulus_Bounds() {
    assert(
      |k| ≤ |t| ∧ |h| ≤ |t| →
      |h/t| ≤ 1 ∧ |k/t| ≤ 1
    )
  } →

  apply(Triangle_Inequality) →
  apply(Composite_Continuous_Mappings) →
  
  assert(
    lim[t→0]|ε(t)| = 0 →
    f'(z) = a + ib
  )
}