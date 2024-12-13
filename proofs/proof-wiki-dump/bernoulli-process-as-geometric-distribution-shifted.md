theorem BernoulliProcessGeometric() {
  let(Y_i: BernoulliProcess(p)) ∧
  let(E: Experiment) ∧
  let(k: ℕ) ∧
  assert(
    (E = "trials until first success") ∧
    (k = "number of trials to success") →
    (k ~ ShiftedGeometricDist(p))
  )
} ↔

proof BernoulliProcessGeometric() {
  let(Y: DiscreteRandomVar) →
  assert(Y = "number of trials to first success") →
  
  lemma ProbabilityStructure() {
    assert(
      ∀k ∈ ℕ ⇒
      (trial[k] = "success") ∧
      (∀i ∈ [1..k-1] ⇒ trial[i] = "failure")
    )
  } →
  
  lemma ProbabilityCalculation() {
    assert(
      Pr(Y = k) = (1-p)^(k-1) * p
    )
  } →
  
  apply(ProbabilityCalculation()) →
  assert(
    Pr(Y = k) = (1-p)^(k-1) * p ↔ 
    Y ~ ShiftedGeometricDist(p)
  ) →
  
  conclude(k ~ ShiftedGeometricDist(p))
}