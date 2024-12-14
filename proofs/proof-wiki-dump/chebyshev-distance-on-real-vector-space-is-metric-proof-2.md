theorem ChebyshevDistance_IsMetric() {
  assert(
    ∀x,y ∈ ℝⁿ: d_∞(x,y) := max{|xᵢ - yᵢ| : 1 ≤ i ≤ n} → IsMetric(d_∞)
  )
} ↔

proof ChebyshevDistance_IsMetric() {
  // M1: d(x,x) = 0
  lemma M1_Identity() {
    setVar(x: ℝⁿ) →
    assert(d_∞(x,x) = max{|xᵢ - xᵢ| : 1 ≤ i ≤ n}) →
    assert(∀i: |xᵢ - xᵢ| = 0) →
    assert(d_∞(x,x) = 0)
  } →

  // M2: Triangle Inequality
  lemma M2_TriangleInequality() {
    setVar(x,y,z: ℝⁿ) →
    setVar(k ∈ [1,n]: |xₖ - zₖ| = max{|xᵢ - zᵢ| : 1 ≤ i ≤ n}) →
    assert(|xₖ - zₖ| ≤ |xₖ - yₖ| + |yₖ - zₖ|) →
    assert(|xₖ - yₖ| ≤ max{|xᵢ - yᵢ| : 1 ≤ i ≤ n}) →
    assert(|yₖ - zₖ| ≤ max{|yᵢ - zᵢ| : 1 ≤ i ≤ n}) →
    assert(d_∞(x,z) ≤ d_∞(x,y) + d_∞(y,z))
  } →

  // M3: Symmetry
  lemma M3_Symmetry() {
    setVar(x,y: ℝⁿ) →
    assert(d_∞(x,y) = max{|xᵢ - yᵢ| : 1 ≤ i ≤ n}) →
    assert(|xᵢ - yᵢ| = |yᵢ - xᵢ|) →
    assert(d_∞(x,y) = d_∞(y,x))
  } →

  // M4: Identity of Indiscernibles
  lemma M4_Indiscernibles() {
    setVar(x,y: ℝⁿ) →
    assert(x ≠ y → ∃k ∈ [1,n]: xₖ ≠ yₖ) →
    assert(xₖ ≠ yₖ → |xₖ - yₖ| > 0) →
    assert(|xₖ - yₖ| > 0 → max{|xᵢ - yᵢ| : 1 ≤ i ≤ n} > 0) →
    assert(d_∞(x,y) > 0)
  } →

  apply(M1_Identity()) ∧
  apply(M2_TriangleInequality()) ∧
  apply(M3_Symmetry()) ∧
  apply(M4_Indiscernibles()) →
  assert(IsMetric(d_∞))
}