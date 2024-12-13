theorem Brachistochrone_Is_Cycloid() {
  assert(
    ∀(x,y) ∈ ℝ² ⇒ [curve minimizing travel time between points is cycloid]
  )
} ↔

proof Brachistochrone_Is_Cycloid() {
  setCoord(X: rightward, Y: upward) →
  setVar(t: ℝ, (x(t), y(t)): curve_point) →
  
  lemma Velocity() {
    assert(v = ds/dt) ∧
    assert(ds = √(1 + y'²)dx) →
    assert(v = √(1 + y'²)(dx/dt))
  } →

  lemma Energy_Conservation() {
    assert(mv²/2 + mgy = E) ∧
    setInitial((x(0),y(0)) = (0,0), (dx/dt(0),dy/dt(0)) = (0,0)) →
    assert(E = 0) →
    assert(v = √(-2gy))
  } →

  lemma Travel_Time() {
    assert(T = ∫[a→b](√(1 + y'²)/√(-2gy))dx) →
    apply(Euler_Equation) →
    assert(√(1 + y'²)/√(-2gy) - y'(2y')/(2√(-2gy)√(1 + y'²)) = c) →
    assert(√C = √(-y(1 + y'²))) where C = 1/(2c²g)
  } →

  lemma Differential_Equation() {
    assert(dx/dy = ±√(-y/(y + C))) ∧
    assert(dy/dx ≤ 0) →
    choose(negative_sign) →
    assert(x = -∫√(-y/(y + C))dy)
  } →

  lemma Parametric_Solution() {
    substitute(u = 1/(C + y)) →
    solve_integral() →
    assert(x = -√(-y(C + y)) + C·arctan(-y/(C + y)) + C₁) ∧
    apply(initial_conditions) →
    assert(C₁ = 0) →
    substitute(√(-y/(C + y)) = tan(θ)) →
    solve_for_y() →
    assert(y = -(C/2)(1 - cos(φ))) where φ = 2θ ∧
    assert(x = (C/2)(φ - sin(φ)))
  } →

  lemma Final_Solution() {
    apply(boundary_condition: dy/dx|[x=b] = 0) →
    solve_for_C() →
    assert(C = 2b/π) →
    assert(x = (b/π)(φ - sin(φ))) ∧
    assert(y = -(b/π)(1 - cos(φ)))
  } →

  conclude(solution_is_cycloid)
}