theorem JordanCurveBoundary() {
  let(φ: [0,1] → ℝ²) →
  let(J = φ([0,1])) →
  assert(
    (φ is_jordan_curve) ∧
    (ℝ² \ J has_at_least_two_components) →
    ∀U ∈ Components(ℝ² \ J): ∂U = J
  )
} ↔

proof JordanCurveBoundary() {
  // Establish J is compact
  apply(ClosedIntervalCompact([0,1])) →
  apply(ContinuousImageCompact(φ)) →
  assert(J.is_compact) →
  
  // J is closed, complement is open
  apply(CompactHausdorffClosed()) →
  assert(J.is_closed_in(ℝ²)) →
  assert(ℝ² \ J is_open) →
  
  // Components structure
  let(U: Component(ℝ² \ J)) →
  let(W = Union(Components(ℝ² \ J) \ {U})) →
  assert(
    (U ∪ W = ℝ² \ J) ∧
    (U ∩ W = ∅)
  ) →
  
  // Boundary properties
  apply(OpenSetDisjointClosure()) →
  assert((U ∪ ∂U) ∩ W = ∅) →
  assert(∂U ∩ W = ∅) →
  assert(∂U ∩ (ℝ² \ J) = ∅) →
  assert(∂U ⊆ J) →
  
  // Contradiction setup
  assume(∂U ⊊ J) →
  let(x₀ ∈ J \ U) →
  assert(x₀ ∈ (U⁻)ᵉ) →
  
  // Jordan arc construction
  construct(φ*: [0,1] → J) {
    case(t₀ ∈ (0,1)) {
      let(ε > 0) →
      define(φ*(t) = piecewise(
        t ∈ [0,½]: φ(2t + (1-2t)(t₀+ε)),
        t ∈ [½,1]: φ((2t-1)(t₀-ε))
      ))
    } →
    case(t₀ ∈ {0,1}) {
      let(ε > 0) →
      define(φ*(t) = φ((1-t)ε + t(1-ε)))
    }
  } →
  
  // Extension and fixed point
  apply(CompactMetricBounded()) →
  assert(J.is_bounded) →
  let(K > 0: J ⊆ B_K(o)) →
  construct(q: D → D\{o}) →
  construct(p: D\{o} → ∂D) →
  
  // Final contradiction
  apply(BrouwerFixedPoint(p∘q)) →
  assert(contradiction) →
  conclude(∂U = J)
}