theorem ConstantAccelerationDistance() {
  let(B: Body, a: Vector3D, s: Vector3D, u: Vector3D, t: ℝ) →
  assert(
    (isConstantAcceleration(B, a) ∧ 
     isDisplacement(s, B, t) ∧
     isInitialVelocity(u, B)) ⇒
    (s = u*t + (a*t^2)/2)
  )
} ↔

proof ConstantAccelerationDistance() {
  lemma VelocityUnderAcceleration() {
    assert(v = u + a*t)
  } →
  
  assert(
    v = ds/dt  // Definition of velocity
  ) →
  
  assert(
    ds/dt = u + a*t  // Substitution
  ) →
  
  lemma LinearFirstOrderODE() {
    assert(
      ∀f(t): (df/dt = At + B) ⇒ 
      (f(t) = c + Bt + (At^2)/2)
    )
  } →
  
  apply(LinearFirstOrderODE()) →
  
  assert(
    s = c + u*t + (a*t^2)/2  // General solution
  ) →
  
  assert(
    s|_{t=0} = 0  // Initial condition
  ) →
  
  assert(
    0 = c + 0 + 0  // Substitute t=0
  ) →
  
  assert(
    c = 0  // Solve for c
  ) →
  
  assert(
    s = u*t + (a*t^2)/2  // Final result
  )
}

corollary GeneralForm() {
  assert(
    s = s₀ + v₀*t + (a*t^2)/2
  )
  where(
    s₀: initialPosition(B),
    v₀: initialVelocity(B)
  )
}