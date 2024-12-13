theorem CDF_Bounds() {
  assert(
    ∀Ω,Σ,Pr[ProbabilitySpace(Ω,Σ,Pr) ∧
    RandomVariable(X,Ω,Σ,Pr) ∧
    CDF(F_X,X)] ⇒
    ∀x ∈ ℝ: 0 ≤ F_X(x) ≤ 1
  )
} ↔

proof CDF_Bounds() {
  setVar(Ω,Σ,Pr: ProbabilitySpace) →
  setVar(X: RandomVariable) →
  setVar(F_X: CDF) →
  setVar(x: ℝ) →

  assert(F_X(x) = Pr(X ≤ x)) →  // CDF definition

  lemma SetInclusion() {
    assert(∅ ⊆ {ω ∈ Ω : X(ω) ≤ x} ⊆ Ω)
  } →

  lemma MonotoneMeasure() {
    apply(SetInclusion()) →
    assert(Pr(∅) ≤ Pr(X ≤ x) ≤ Pr(Ω))
  } →

  lemma ProbabilityMeasureProps() {
    assert(Pr(∅) = 0) ∧
    assert(Pr(Ω) = 1)
  } →

  apply(MonotoneMeasure()) →
  apply(ProbabilityMeasureProps()) →
  
  conclude(0 ≤ F_X(x) ≤ 1)
}