theorem Cauchy_Riemann_Necessary_Condition() {
  let(D ⊆ ℂ) ∧ assert(D is open) →
  let(f: D → ℂ) →
  let(u,v: {(x,y) ∈ ℝ² : x + iy = z ∈ D} → ℝ) →
  assert(u(x,y) = Re(f(z))) ∧
  assert(v(x,y) = Im(f(z))) →
  assert(
    f is complex-differentiable in D ↔ (
      (u,v are differentiable) ∧
      (∂u/∂x = ∂v/∂y) ∧
      (∂u/∂y = -∂v/∂x)
    )
  )
}

proof Cauchy_Riemann_Necessary_Condition() {
  let(z = x + iy ∈ D) →
  
  lemma Epsilon_Function_Condition() {
    assert(∃r > 0 ∀t ∈ B_r(0)\{0}: 
      f(z + t) = f(z) + t(f'(z) + ε(t))
    ) where(lim[t→0] ε(t) = 0)
  } →
  
  let(f'(z) = a + bi) ∧
  let(t = h + ki) →
  
  assert(u(x+h,y+k) = u(x,y) + h(a + Re(ε(t))) + k(-b + Re(iε(t)))) →
  
  # Partial derivative ∂u/∂x
  setVar(y: fixed) ∧ let(t = h) ∧ let(k = 0) →
  assert(u(x+h,y) = u(x,y) + h(a + Re(ε(h)))) →
  apply(Limits_Real_Imaginary_Parts) →
  assert(∂u/∂x = a) →
  
  # Partial derivative ∂u/∂y
  setVar(x: fixed) ∧ let(t = ik) ∧ let(h = 0) →
  assert(u(x,y+k) = u(x,y) + k(-b + Re(iε(ik)))) →
  apply(Limits_Real_Imaginary_Parts) →
  assert(∂u/∂y = -b) →
  
  # Similar process for v
  assert(v(x+h,y+k) = v(x,y) + h(b + Im(ε(t))) + k(a + Im(iε(t)))) →
  
  # Partial derivatives of v
  assert(∂v/∂x = b = -∂u/∂y) →
  assert(∂v/∂y = a = ∂u/∂x) →
  
  apply(Holomorphic_Function_Continuously_Differentiable) →
  assert(f' is continuous) →
  
  apply(Composite_Continuous_Mappings) →
  assert(Re(f'), Im(f') are continuous) →
  
  assert(
    ∂u/∂x = ∂v/∂y = a = Re(f'(z)) ∧
    ∂u/∂y = -∂v/∂x = -b = -Im(f'(z))
  ) →
  
  conclude(u,v are differentiable)
}