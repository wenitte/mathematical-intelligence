theorem Angle_Bisection_Quadrants() {
  assert(
    ∀θ ∈ ℝ ∧ ∀P,Q,R ∈ Plane ∧
    (θ = angular_coord(P)) ∧
    (QOR = angle_bisector(θ)) →
    ((θ ∈ QuadI ∨ θ ∈ QuadII) → 
      (angular_coord(Q) ∈ QuadI ∧ angular_coord(R) ∈ QuadIII)) ∧
    ((θ ∈ QuadIII ∨ θ ∈ QuadIV) → 
      (angular_coord(Q) ∈ QuadII ∧ angular_coord(R) ∈ QuadIV))
  )
} ↔

proof Angle_Bisection_Quadrants() {
  apply(Bisection_of_Angle_Theorem) →
  assert(angular_coord(Q) = θ/2) ∧
  assert(angular_coord(R) = π + θ/2) →
  
  case_1: {
    assume(θ ∈ QuadI ∨ θ ∈ QuadII) →
    assert(0 < θ < π) →
    apply(divide_inequality_by_2) →
    assert(0 < θ/2 < π/2) →
    conclude(angular_coord(Q) ∈ QuadI) →
    
    apply(add_π_to_inequality) →
    assert(π < π + θ/2 < 3π/2) →
    conclude(angular_coord(R) ∈ QuadIII)
  } →

  case_2: {
    assume(θ ∈ QuadIII ∨ θ ∈ QuadIV) →
    assert(π < θ < 2π) →
    apply(divide_inequality_by_2) →
    assert(π/2 < θ/2 < π) →
    conclude(angular_coord(Q) ∈ QuadII) →
    
    apply(add_π_to_inequality) →
    assert(3π/2 < π + θ/2 < 2π) →
    conclude(angular_coord(R) ∈ QuadIV)
  }
}