theorem BernoulliInequalityCorollary() {
  assert(
    ∀n ∈ ℤ≥0, ∀aj ∈ ℝ where 0 < aj < 1 ⇒
    ∏j=1..n (1 - aj) ≥ 1 - ∑j=1..n aj
  )
} ↔

proof BernoulliInequalityCorollary() {
  letProp(P(n): ∏j=1..n (1 - aj) ≥ 1 - ∑j=1..n aj) →
  
  lemma BaseCase0() {
    assert(∏j=1..0 (1 - aj) = 1) by(VacuousProduct) →
    assert(1 ≥ 1 - 0) →
    assert(1 = 1 - ∑j=1..0 aj) by(VacuousSummation)
  } →

  lemma BaseCase1() {
    assert(∏j=1..1 (1 - aj) = 1 - aj) →
    assert(1 - aj = 1 - ∑j=1..1 aj)
  } →

  lemma InductiveStep() {
    assume(P(k) for k ≥ 1) →
    assert(∏j=1..k+1 (1 - aj) = (∏j=1..k (1 - aj))(1 - ak+1)) by(ProductDef) →
    assert(≥ (1 - ∑j=1..k aj)(1 - ak+1)) by(InductionHypothesis) →
    assert(= 1 - ∑j=1..k aj - ak+1 + ak+1∑j=1..k aj) by(Expand) →
    assert(= 1 - ∑j=1..k+1 aj + ak+1∑j=1..k aj) →
    assert(≥ 1 - ∑j=1..k+1 aj) by(PositiveTerms)
  } →

  apply(MathematicalInduction(P, BaseCase0, BaseCase1, InductiveStep)) →
  conclude(∀n ∈ ℤ≥0: ∏j=1..n (1 - aj) ≥ 1 - ∑j=1..n aj)
}