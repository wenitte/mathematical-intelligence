theorem Simple_Pendulum_Period() {
  let(m: ℝ⁺) // mass of bob
  let(a: ℝ⁺) // length of rod
  let(α: ℝ) // initial angle
  let(g: ℝ⁺) // acceleration due to gravity
  assert(
    (α < 15°) ∧ (α > -15°) →
    ∃T ∈ ℝ⁺: T ≈ 2π√(a/g)
  )
} ↔

proof Simple_Pendulum_Period() {
  let(θ(t): ℝ → ℝ) // angle at time t
  let(v(t): ℝ → ℝ) // velocity at time t
  let(s(t): ℝ → ℝ) // displacement at time t

  // Motion equation from previous theorem
  assert(
    (a²/2)(dθ/dt)² = ga(cos(θ) - cos(α))
  ) →
  
  // Differentiate w.r.t. t
  apply(Differentiation()) →
  assert(
    a(d²θ/dt²) = -g⋅sin(θ)
  ) →

  lemma Small_Angle_Approximation() {
    assert(
      |θ| < 15° → sin(θ) ≈ θ
    )
  } →
  
  apply(Small_Angle_Approximation()) →
  assert(
    d²θ/dt² + (g/a)θ = 0
  ) →

  lemma Second_Order_Linear_ODE() {
    assert(
      (d²y/dt² + k²y = 0) →
      y = c₁sin(kt) + c₂cos(kt)
    )
  } →

  apply(Second_Order_Linear_ODE(), k = √(g/a)) →
  assert(
    θ(t) = c₁sin(√(g/a)t) + c₂cos(√(g/a)t)
  ) →

  // Apply initial conditions
  assert(
    θ(0) = α ∧ (dθ/dt)|_{t=0} = 0
  ) →
  
  // Solve for constants
  assert(
    θ(t) = α⋅cos(√(g/a)t)
  ) →

  // Period is time for full oscillation
  assert(
    T = 2π/√(g/a)
  ) →
  
  // Simplify
  assert(
    T = 2π√(a/g)
  )
}