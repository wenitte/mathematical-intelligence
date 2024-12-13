theorem BoundedSubspaceEuclideanTotallyBounded() {
  let(ℝⁿ: EuclideanSpace, ‖·‖: Metric) →
  let(M: MetricSubspace(ℝⁿ)) →
  assert(
    (isBounded(M)) ⇒ (isTotallyBounded(M))
  )
} ↔

proof BoundedSubspaceEuclideanTotallyBounded() {
  assume(isBounded(M)) →
  setVar(R: ℝ = diameter(M)) →
  
  lemma NormInequality() {
    ∀x,y ∈ ℝⁿ:
    assert(‖y - x‖ = √(Σᵢ₌₁ⁿ(yᵢ - xᵢ)²)) →
    assert(‖y - x‖ ≤ √(n·max{(yᵢ - xᵢ)²})) →
    assert(‖y - x‖ = √n·maxᵢ|yᵢ - xᵢ|)
  } →

  apply(NormInequality()) →
  assert(supₓ,ᵧ∈M maxᵢ|yᵢ - xᵢ| ≤ R) →
  
  lemma NCubeBounding() {
    assert(R ≤ 2R√n) →
    assert(∃c ∈ ℝⁿ: M ⊆ [c-R,c+R]ⁿ)
  } →

  ∀ε > 0:
  setVar(k: ℤ = ⌈√n·R/ε⌉) →
  setVar(subintervalLength = 2R/k) →
  
  lemma SubcubeDiameter() {
    assert(diam(subcube) = 2R/k·√n) →
    assert(2R/k·√n < 2ε)
  } →

  assert(∀subcube ∈ subdivision: 
    ∃ball(center,ε): subcube ⊆ ball) →
  
  assert(∃F: FiniteSet(balls): M ⊆ ⋃F) →
  conclude(isTotallyBounded(M))
}