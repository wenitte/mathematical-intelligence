theorem Arc_Length_Metric() {
  assert(
    ∀A ⊆ ℝ² : A = {(x₁,x₂) : x₁² + x₂² = 1} ∧
    ∀d : A² → ℝ : d(x,y) = 
      case x = y : 0
      case x = -y : π 
      case otherwise : l
    where l = minorArcLength(x,y) 
    ⇒ isMetric(d,A)
  )
} ↔

proof Arc_Length_Metric() {
  assert(needToProveMetricAxioms(M1 ∧ M2 ∧ M3 ∧ M4)) →

  lemma M1_Proof() {
    setVar(x: A) →
    assert(d(x,x) = 0) →
    conclude(satisfiesM1(d))
  } →

  lemma M2_Proof() {
    setVar(x,y,z: A) →
    case1: {
      assert(z ∈ minorArc(x,y) ∨ collinear(x,y,0)) →
      assert(d(x,z) + d(z,y) = d(x,y))
    } →
    case2: {
      assert(z ∈ majorArc(x,y)) →
      assert(d(x,z) + d(z,y) > d(x,y))
    } →
    conclude(satisfiesM2(d))
  } →

  lemma M3_Proof() {
    setVar(x,y: A) →
    assert(d(x,y) = d(y,x)) →
    conclude(satisfiesM3(d))
  } →

  lemma M4_Proof() {
    setVar(x,y: A) →
    assert(d(x,y) ≥ 0) →
    conclude(satisfiesM4(d))
  } →

  apply(M1_Proof() ∧ M2_Proof() ∧ M3_Proof() ∧ M4_Proof()) →
  conclude(isMetric(d,A))
}