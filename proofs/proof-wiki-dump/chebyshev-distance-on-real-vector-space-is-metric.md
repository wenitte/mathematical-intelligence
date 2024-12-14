theorem ChebyshevDistanceMetric() {
  assert(
    ∀x,y ∈ ℝⁿ, d_∞(x,y) := max(|xᵢ - yᵢ|, i=1..n) ⇒ isMetric(d_∞)
  )
} ↔

proof ChebyshevDistanceMetric() {
  # Metric Axiom M1: d(x,x) = 0
  lemma M1_Proof() {
    setVar(x: ℝⁿ) →
    assert(d_∞(x,x) = max(|xᵢ - xᵢ|, i=1..n)) →
    assert(d_∞(x,x) = 0)
  } →

  # Metric Axiom M2: Triangle Inequality
  lemma M2_Proof() {
    setVar(x,y,z: ℝⁿ) →
    setVar(k ∈ [1,n]: |xₖ - zₖ| = max(|xᵢ - zᵢ|, i=1..n)) →
    assert(|xₖ - zₖ| = d_∞(x,z)) →
    assert(|xₖ - zₖ| ≤ |xₖ - yₖ| + |yₖ - zₖ|) →
    assert(|xₖ - yₖ| ≤ max(|xᵢ - yᵢ|, i=1..n)) →
    assert(|yₖ - zₖ| ≤ max(|yᵢ - zᵢ|, i=1..n)) →
    assert(d_∞(x,z) ≤ d_∞(x,y) + d_∞(y,z))
  } →

  # Metric Axiom M3: Symmetry
  lemma M3_Proof() {
    setVar(x,y: ℝⁿ) →
    assert(d_∞(x,y) = max(|xᵢ - yᵢ|, i=1..n)) →
    assert(|xᵢ - yᵢ| = |yᵢ - xᵢ|) →
    assert(d_∞(x,y) = d_∞(y,x))
  } →

  # Metric Axiom M4: Identity of Indiscernibles
  lemma M4_Proof() {
    setVar(x,y: ℝⁿ) →
    assert(x ≠ y ⇒ ∃k ∈ [1,n]: xₖ ≠ yₖ) →
    assert(xₖ ≠ yₖ ⇒ |xₖ - yₖ| > 0) →
    assert(|xₖ - yₖ| > 0 ⇒ max(|xᵢ - yᵢ|, i=1..n) > 0) →
    assert(max(|xᵢ - yᵢ|, i=1..n) > 0 ⇒ d_∞(x,y) > 0)
  } →

  apply(M1_Proof()) ∧
  apply(M2_Proof()) ∧
  apply(M3_Proof()) ∧
  apply(M4_Proof()) →
  assert(isMetric(d_∞))
}