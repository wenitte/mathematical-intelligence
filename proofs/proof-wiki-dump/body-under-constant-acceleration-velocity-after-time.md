theorem Constant_Acceleration_Velocity() {
  assert(
    ∀B[body] ∀a[vector] ∀u[vector] ∀v[vector] ∀t[scalar] ⇒
    (isConstantAcceleration(B, a) ∧
     isInitialVelocity(B, u) ∧
     isVelocityAtTime(B, v, t)) →
    v = u + a*t
  )
} ↔

proof Constant_Acceleration_Velocity() {
  setVar(B: body, a: vector, u: vector, v: vector, t: scalar) →
  
  lemma Acceleration_Definition() {
    assert(
      isConstantAcceleration(B, a) ↔
      dv/dt = a
    )
  } →
  
  lemma Linear_ODE_Solution() {
    assert(
      (dv/dt = a) ↔
      ∃c[vector] (v = c + a*t)
    )
  } →
  
  apply(Acceleration_Definition()) →
  apply(Linear_ODE_Solution()) →
  
  assert(
    initialCondition: v(t=0) = u
  ) →
  
  assert(
    v(t=0) = c + a*0 ↔
    u = c
  ) →
  
  substitute(c = u) →
  
  assert(
    v = u + a*t
  )
}