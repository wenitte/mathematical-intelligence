theorem ClosedBallDisjointUnion() {
  setVar(p: Prime) ∧
  setVar(Qp: p-AdicNumbers) ∧
  setVar(a: Qp) ∧
  setVar(n,m: ℤ | n < m) ∧
  setVar(Bₑ⁻(a): ClosedBall[ε,a]) →
  assert(
    B_{p^{-n}}⁻(a) = ⋃_{i=0}^{p^{(m-n)}-1} B_{p^{-m}}⁻(a + ip^{-n})
  )
} ↔

proof ClosedBallDisjointUnion() {
  lemma NormCharacterization() {
    assert(
      ∀y ∈ Qp: (‖y‖_p ≤ p^{-n}) ↔ 
      ∃i ∈ ℤ: (0 ≤ i ≤ p^{(m-n)}-1) ∧ (‖y - ip^n‖_p ≤ p^{-m})
    )
  } →

  // Forward inclusion
  setVar(i: ℤ | 0 ≤ i ≤ p^{(m-n)}-1) →
  setVar(x: B_{p^{-m}}⁻(a + ip^{-n})) →
  assert(‖x - a - ip^{-n}‖_p ≤ p^{-m}) →
  apply(NormCharacterization()) →
  assert(‖x - a‖_p ≤ p^{-n}) →
  assert(x ∈ B_{p^{-n}}⁻(a)) →
  assert(B_{p^{-m}}⁻(a + ip^{-n}) ⊆ B_{p^{-n}}⁻(a)) →
  assert(⋃_{i=0}^{p^{(m-n)}-1} B_{p^{-m}}⁻(a + ip^{-n}) ⊆ B_{p^{-n}}⁻(a)) →

  // Reverse inclusion
  setVar(x: B_{p^{-n}}⁻(a)) →
  assert(‖x - a‖_p ≤ p^{-n}) →
  apply(NormCharacterization()) →
  assert(∃i ∈ ℤ: (0 ≤ i ≤ p^{(m-n)}-1) ∧ (‖x - a - ip^{-n}‖_p ≤ p^{-m})) →
  assert(∃i ∈ ℤ: (0 ≤ i ≤ p^{(m-n)}-1) ∧ (x ∈ B_{p^{-m}}⁻(a + ip^{-n}))) →
  assert(B_{p^{-n}}⁻(a) ⊆ ⋃_{i=0}^{p^{(m-n)}-1} B_{p^{-m}}⁻(a + ip^{-n})) →

  // Conclusion
  assert(B_{p^{-n}}⁻(a) = ⋃_{i=0}^{p^{(m-n)}-1} B_{p^{-m}}⁻(a + ip^{-n}))
}