theorem ClosedUnitBall_is_Convex() {
  let(X: NormedVectorSpace, ∥·∥: Norm) →
  let(B₁⁻(0): ClosedUnitBall(X)) →
  assert(
    isConvex(B₁⁻(0))
  )
} ↔

proof ClosedUnitBall_is_Convex() {
  let(x,y ∈ B₁⁻(0)) →
  let(α ∈ [0,1]) →
  
  assert(
    ∥(1-α)x + αy∥ ≤ ∥(1-α)x∥ + ∥αy∥
  ) by(NormAxiom_Triangle) →
  
  assert(
    ∥(1-α)x∥ + ∥αy∥ = |1-α|∥x∥ + |α|∥y∥
  ) by(NormAxiom_Homogeneity) →
  
  assert(
    |1-α|∥x∥ + |α|∥y∥ = (1-α)∥x∥ + α∥y∥
  ) by(α ∈ [0,1]) →
  
  assert(
    (1-α)∥x∥ + α∥y∥ ≤ (1-α) + α
  ) by(∥x∥ ≤ 1 ∧ ∥y∥ ≤ 1) →
  
  assert(
    (1-α) + α = 1
  ) by(Algebra) →
  
  conclude(
    (1-α)x + αy ∈ B₁⁻(0)
  ) →
  
  conclude(
    isConvex(B₁⁻(0))
  ) by(ConvexSet_Definition)
}