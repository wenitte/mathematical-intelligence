theorem Angle_Bisection_Polar() {
  assert(
    ∀θ ∈ ℝ,
    ∀P(θ) ∈ PolarPlane,
    ∀QOR(bisects(∠θ)) →
    (angular_coord(Q) = θ/2 ∧ 
     angular_coord(R) = π + θ/2)
  )
} ↔

proof Angle_Bisection_Polar() {
  setVar(A: point(polar_axis)) →
  assert(bisects(∠AOP) ↔ ∠AOQ = θ/2) →
  assert(angular_coord(Q) = θ/2) →
  
  lemma Conjugate_Angle() {
    assert(
      complement(∠AOP) = -2π - θ
    )
  } →
  
  assert(∠AOR = -(2π - θ)/2) →
  assert(∠AOR = -π + θ/2) →
  
  lemma Complement_Properties() {
    assert(
      ∀α ∈ ℝ →
      complement(α) = 2π - α
    )
  } →
  
  assert(angular_coord(R) = complement(∠AOR)) →
  assert(angular_coord(R) = 2π - (-π + θ/2)) →
  assert(angular_coord(R) = 2π - π + θ/2) →
  assert(angular_coord(R) = π + θ/2)
}

corollary Quadrant_Properties() {
  assert(
    (θ ∈ QuadrantI ∨ θ ∈ QuadrantII) →
    (angular_coord(Q) ∈ QuadrantI ∧ 
     angular_coord(R) ∈ QuadrantIII)
  ) ∧
  assert(
    (θ ∈ QuadrantIII ∨ θ ∈ QuadrantIV) →
    (angular_coord(Q) ∈ QuadrantII ∧ 
     angular_coord(R) ∈ QuadrantIV)
  )
}