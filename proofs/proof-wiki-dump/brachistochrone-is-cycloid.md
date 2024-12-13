theorem Brachistochrone_Is_Cycloid() {
  assert(
    ∀(curve: Path) ⇒ 
    (MinimumTimePath(curve) ↔ IsCycloid(curve))
  )
} ↔

proof Brachistochrone_Is_Cycloid() {
  // Part 1: Establish differential equation from physics principles
  setVar(α: Angle, v: Velocity) →
  assert(SnellDescartes: sin(α)/v = k) →
  
  lemma ConservationEnergy() {
    assert(
      (1/2)mv² = mgy →
      v = √(2gy)
    )
  } →

  lemma GeometricRelations() {
    assert(
      sin(α) = cos(β) = 1/sec(β) = 1/√(1 + (y')²)
    )
  } →

  apply(ConservationEnergy(), GeometricRelations()) →
  assert(
    1/(√(1 + (y')²)√(2gy)) = k →
    y(1 + (y')²) = c  // where c = 1/(2k²g)
  ) →

  // Part 2: Solve differential equation
  setVar(φ: Angle) →
  assert(
    √(y/(c-y)) = tan(φ) →
    y = c·sin²(φ)
  ) →

  lemma ParametricEquations() {
    assert(
      x = a(θ - sin(θ)) ∧
      y = a(1 - cos(θ))  // where θ = 2φ, a = c/2
    )
  } →

  apply(ParametricEquations()) →
  assert(IsCycloid(curve))
}

proof Brachistochrone_Is_Cycloid_Alternative() {
  // Energy-based approach
  setVar(E: Energy, v: Velocity) →
  assert(
    v = ds/dt = √(1 + y'²)·dx/dt
  ) →

  lemma InitialConditions() {
    assert(
      (x(0),y(0)) = (0,0) ∧
      (dx/dt(0),dy/dt(0)) = (0,0) →
      E = 0 →
      v = √(-2gy)
    )
  } →

  assert(
    T = ∫(√(1 + y'²)/√(-2gy))dx
  ) →

  apply(EulerEquation()) →
  assert(
    dx/dy = ±√(-y/(y+C)) →
    x = (C/2)(φ - sin(φ)) ∧
    y = -(C/2)(1 - cos(φ))
  ) →
  
  assert(IsCycloid(curve))
}