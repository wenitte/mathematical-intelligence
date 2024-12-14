theorem Cauchy_Riemann_Equations() {
  define(D: open_subset(ℂ))
  define(f: D → ℂ)
  define(u,v: {(x,y) ∈ ℝ² | x + iy = z ∈ D} → ℝ)
  assert(u(x,y) = Re(f(z)) ∧ v(x,y) = Im(f(z)))

  claim(
    f.is_complex_differentiable(D) ↔ (
      u.is_differentiable() ∧ v.is_differentiable() ∧
      (∂u/∂x = ∂v/∂y) ∧ (∂u/∂y = -∂v/∂x)
    )
  )
}

proof Cauchy_Riemann_Necessary_Condition() {
  setVar(z: D = x + iy) →
  apply(Epsilon_Function_Complex_Differentiability) →
  assert(∃r ∈ ℝ₊ ∀t ∈ B_r(0)∖{0}: 
    f(z+t) = f(z) + t(f'(z) + ε(t))
  ) →

  define(a + ib = f'(z)) →
  define(h + ik = t) →

  // Taking real parts
  assert(
    u(x+h,y+k) = u(x,y) + h(a + Re(ε(t))) + k(-b + Re(iε(t)))
  ) →

  // Partial x derivative
  let(t = h, k = 0) →
  apply(Epsilon_Function_Differentiability) →
  assert(∂u/∂x = a) →

  // Partial y derivative 
  let(t = ik, h = 0) →
  apply(Epsilon_Function_Differentiability) →
  assert(∂u/∂y = -b) →

  // Similar process for imaginary parts
  assert(
    v(x+h,y+k) = v(x,y) + h(b + Im(ε(t))) + k(a + Im(iε(t)))
  ) →

  apply(Epsilon_Function_Differentiability) →
  assert(∂v/∂x = b = -∂u/∂y) →
  assert(∂v/∂y = a = ∂u/∂x)
}

proof Cauchy_Riemann_Sufficient_Condition() {
  assume(
    (∂u/∂x = ∂v/∂y) ∧ (∂u/∂y = -∂v/∂x)
  ) →
  
  setVar(h,k ∈ ℝ∖{0}) →
  define(t = h + ik) →
  define(a = ∂u/∂x = ∂v/∂y) →
  define(b = -∂u/∂y = ∂v/∂x) →

  apply(Epsilon_Function_Differentiability) →
  assert(
    f(z+t) = f(z) + t(a + ib + ε(t))
  ) →
  
  prove(lim(t→0) ε(t) = 0) →
  apply(Epsilon_Function_Complex_Differentiability) →
  assert(f'(z) = a + ib)
}

theorem Complex_Derivative_Expression() {
  assert(
    ∀z ∈ D: f'(z) = ∂f/∂x = -i(∂f/∂y)
  )
}