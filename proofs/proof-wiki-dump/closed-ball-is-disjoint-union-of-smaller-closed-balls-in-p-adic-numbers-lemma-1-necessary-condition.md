theorem PAdicClosedBall() {
  let(p: Prime)
  let(Qp: PadicNumbers)
  let(n,m: ℤ | n < m)
  let(y: Qp)
  assert(
    ‖y‖_p ≤ p^(-n) ⇒
    ∃i ∈ ℤ: (0 ≤ i ≤ p^(m-n) - 1) ∧ (‖y - ip^n‖_p ≤ p^(-m))
  )
}

proof PAdicClosedBall() {
  apply(NonArchimedeanNormAxioms(Qp)) →
  assert(‖y‖_p ≤ p^(-n)) →
  assert(p^n‖y‖_p ≤ 1) by multiply(p^n) →
  assert(‖p^(-n)‖_p‖y‖_p ≤ 1) by def(PadicNorm) →
  assert(‖p^(-n)y‖_p ≤ 1) by NonArchimedeanAxiom(N2) →
  assert(B_1^-(p^(-n)y) = B_1^-(0)) by def(ClosedBallPadic) →
  
  lemma IntegersDense() {
    apply(IntegersDenseInUnitBall) →
    assert(∃k ∈ ℤ: ‖p^(-n)y - k‖_p ≤ p^(n-m))
  } →
  
  lemma ResidueClasses() {
    apply(ResidueClassesPartition) →
    assert(∃i ∈ [0, p^(m-n)-1]: p^(m-n) | (k-i)) →
    assert(‖k-i‖_p ≤ p^(n-m)) by def(PadicNorm)
  } →
  
  assert(‖p^(-n)y - i‖_p ≤ max{‖p^(-n)y - k‖_p, ‖i-k‖_p}) 
    by NonArchimedeanMetric() →
  assert(‖p^(-n)y - i‖_p ≤ p^(n-m)) →
  assert(‖p^(-n)‖_p‖y - ip^n‖_p ≤ p^(n-m)) by NonArchimedeanAxiom(N2) →
  assert(p^n‖y - ip^n‖_p ≤ p^(n-m)) by def(PadicNorm) →
  assert(‖y - ip^n‖_p ≤ p^(-m)) by divide(p^n)
}