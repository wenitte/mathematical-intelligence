theorem GeometricSequence_RationalRatio() {
  assert(
    ∀{an: SequenceR} →
    (isGeometricSequence(an) ∧ ∀k(ak ∈ ℚ)) →
    getCommonRatio(an) ∈ ℚ
  )
}

proof GeometricSequence_RationalRatio() {
  setVar(an: GeometricSequence) →
  setVar(r: ℝ = getCommonRatio(an)) →
  setVar(p,q: ConsecutiveTerms(an)) →
  
  assert(p,q ∈ ℚ) →
  
  lemma GeometricDefinition() {
    assert(
      isGeometricSequence(an) →
      ∀k(ak+1 = r·ak)
    )
  } →
  
  apply(GeometricDefinition()) →
  assert(q = r·p) →
  assert(r = q/p) →
  
  lemma RationalField() {
    assert(
      ∀a,b ∈ ℚ(b ≠ 0 → a/b ∈ ℚ)
    )
  } →
  
  apply(RationalField()) →
  assert(r ∈ ℚ)
}