theorem Acceleration_Straight_Line() {
  let(P: Particle, L: Line, a: Vector) →
  assert(
    (P.motion ∈ L ∧ L.hasDirection) →
    (a = (d²s/dt²)i)
  ) where {
    i: UnitVector(L.direction),
    s: Distance
  }
}

proof Acceleration_Straight_Line() {
  // Initial setup
  setVar(P: Particle, L: Line, C: CartesianSpace) →
  assert(L ⊂ C) →
  
  // Define position vector
  let(r: Vector = xi + yj + zk) →
  let(v: Vector = dr/dt) →
  let(a: Vector = dv/dt = d²r/dt²) →
  
  // Expand acceleration vector
  assert(a = (d²x/dt²)i + (d²y/dt²)j + (d²z/dt²)k) →
  
  lemma Perpendicular_Motion() {
    assert(L ∥ x_axis) →
    assert(∀t: (dy/dt = 0 ∧ dz/dt = 0))
  } →
  
  apply(Perpendicular_Motion()) →
  
  // Velocity simplification
  assert(v = (dx/dt)i + 0j + 0k) →
  
  // Final acceleration form
  assert(a = (d²x/dt²)i) →
  
  // Complete proof by noting s = x when L ∥ x_axis
  assert(s ≡ x when L ∥ x_axis) →
  conclude(a = (d²s/dt²)i)
}