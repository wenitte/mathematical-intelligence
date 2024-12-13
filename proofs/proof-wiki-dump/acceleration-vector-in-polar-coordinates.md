theorem PolarAcceleration() {
  assert(
    ∀p(MovingParticle) ∧ ∀t(Time) ∧ position(p,t) = polar(r,θ) ⇒
    acceleration(p) = (r*d²θ/dt² + 2*dr/dt*dθ/dt)uθ + (d²r/dt² - r*(dθ/dt)²)ur
    where ur = unitVector(radial) ∧ uθ = unitVector(angular)
  )
} ↔

proof PolarAcceleration() {
  setVar(r: Vector) →
  assert(r = r*ur) →

  lemma UnitVectorDerivatives() {
    assert(
      dur/dθ = uθ ∧
      duθ/dθ = -ur
    )
  } →

  lemma VelocityVector() {
    assert(
      v = r*dθ/dt*uθ + dr/dt*ur
    )
  } →
  
  apply(ProductRule) →
  assert(
    a = d/dt(v) = 
    d/dt(r*dθ/dt*uθ + dr/dt*ur)
  ) →
  
  assert(
    a = r*d²θ/dt²*uθ + dr/dt*dθ/dt*uθ + r*dθ/dt*duθ/dt + 
        d²r/dt²*ur + dr/dt*dur/dt
  ) →
  
  apply(ChainRule) →
  assert(
    duθ/dt = duθ/dθ*dθ/dt ∧
    dur/dt = dur/dθ*dθ/dt
  ) →
  
  apply(UnitVectorDerivatives) →
  assert(
    a = r*d²θ/dt²*uθ + dr/dt*dθ/dt*uθ + 
        r*dθ/dt*(-ur)*dθ/dt + 
        d²r/dt²*ur + dr/dt*uθ*dθ/dt
  ) →
  
  assert(
    a = (r*d²θ/dt² + 2*dr/dt*dθ/dt)uθ + 
        (d²r/dt² - r*(dθ/dt)²)ur
  )
}