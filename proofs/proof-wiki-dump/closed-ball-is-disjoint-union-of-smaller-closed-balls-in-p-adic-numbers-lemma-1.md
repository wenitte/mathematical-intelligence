theorem PadicClosedBallLemma() {
  let(p: Prime)
  let(Qp: PadicNumbers, |·|_p: PadicNorm)
  let(n,m: ℤ, n < m)
  assert(
    ∀y ∈ Qp: |y|_p ≤ p^(-n) ↔ ∃i ∈ ℤ: [
      (0 ≤ i ≤ p^(m-n) - 1) ∧
      |y - i·p^n|_p ≤ p^(-m)
    ]
  )
} ↔

proof PadicClosedBallLemma() {
  // Necessary Condition
  setVar(y: Qp) →
  assume(|y|_p ≤ p^(-n)) →
  apply(NonArchimedeanNormAxioms) →
  assert(p^n·|y|_p ≤ 1) →
  assert(|p^(-n)|_p·|y|_p ≤ 1) →
  assert(|p^(-n)·y|_p ≤ 1) →
  apply(CharacterizationClosedBall) →
  
  lemma IntegersDenseInUnitBall() {
    assert(∃k ∈ ℤ: |p^(-n)·y - k|_p ≤ p^(n-m))
  } →
  
  lemma ResidueClassesPartition() {
    assert(∃i ∈ [0, p^(m-n)-1]: p^(m-n)|k-i)
  } →
  
  assert(|k-i|_p ≤ p^(n-m)) →
  apply(NonArchimedeanMetric) →
  assert(|p^(-n)·y - i|_p ≤ p^(n-m)) →
  assert(|p^(-n)|_p·|y - i·p^n|_p ≤ p^(n-m)) →
  assert(|y - i·p^n|_p ≤ p^(-m)) →

  // Sufficient Condition
  setVar(y: Qp) →
  assume(∃i ∈ ℤ: [
    (0 ≤ i ≤ p^(m-n) - 1) ∧
    |y - i·p^n|_p ≤ p^(-m)
  ]) →
  
  apply(UltrametricInequality) →
  assert(|y|_p ≤ max{|y - i·p^n|_p, |i·p^n|_p}) →
  assert(|i·p^n|_p = |i|_p·|p^n|_p ≤ p^(-n)) →
  assert(|y - i·p^n|_p ≤ p^(-m) ≤ p^(-n)) →
  conclude(|y|_p ≤ p^(-n))
}