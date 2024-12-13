theorem Rocket_Acceleration() {
  assert(
    ∃B[Rocket] ∧
    ∃v[Vector](t) ∧
    ∃m[Mass](t) ∧
    ∃b[Vector](constant) →
    ∀t[Time] ⇒
    a(t) = (1/m) * (-b * (dm/dt))
  )
} ↔

proof Rocket_Acceleration() {
  setVar(B: Rocket) →
  setVar(v: Vector(t)) →
  setVar(m: Mass(t)) →
  setVar(b: Vector(constant)) →
  
  lemma Rocket_Motion() {
    assert(
      m * (dv/dt) = -b * (dm/dt)
    )
  } →
  
  assert(a = dv/dt) [by acceleration_definition] →
  
  apply(Rocket_Motion()) →
  substitute(dv/dt, a) →
  assert(m * a = -b * (dm/dt)) →
  
  algebraicStep(
    m * a = -b * (dm/dt) →
    a = (1/m) * (-b * (dm/dt))
  ) →
  
  conclude(
    a(t) = (1/m) * (-b * (dm/dt))
  )
}