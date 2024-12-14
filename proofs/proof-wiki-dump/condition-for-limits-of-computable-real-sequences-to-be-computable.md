theorem ComputableLimitSequence() {
  assert(
    ∀(xₖ: Sequence[ℝ])(computable(xₖ)) ∧
    ∀(yₙ: Sequence[ℝ]) ∧
    ∃(φ: ℕ² → ℕ)(total_recursive(φ)) ∧
    ∀n,p ∈ ℕ: |xᵩ(n,p) - yₙ| < 1/(p+1)
    ⇒
    computable(yₙ)
  )
} ↔

proof ComputableLimitSequence() {
  lemma ComputableRationalLimit() {
    assert(
      ∃(aₙ: Sequence[ℚ])(computable(aₙ)) ∧
      ∀k,p ∈ ℕ: |aπ(k,p) - xₖ| < 1/(p+1)
    )
  } →
  
  define(ψ: ℕ² → ℕ) {
    ψ(n,p) = π(φ(n,2p+1), 2p+1)
  } →
  
  assert(total_recursive(ψ)) {
    by(PrimitiveRecursiveCantor()) ∧
    by(PrimitiveRecursiveIsTotal())
  } →
  
  lemma ComputableSubsequence() {
    assert(
      ∃(bₙ: Sequence[ℚ])(computable(bₙ)) ∧
      ∀n,p ∈ ℕ: bπ(n,p) = aψ(n,p)
    )
  } →
  
  prove(|bπ(n,p) - yₙ| < 1/(p+1)) {
    step1: |bπ(n,p) - yₙ| = |aψ(n,p) - yₙ| by(DefBSequence) →
    step2: |aψ(n,p) - yₙ| = |aπ(φ(n,2p+1),2p+1) - yₙ| by(DefPsi) →
    step3: |aπ(φ(n,2p+1),2p+1) - yₙ| ≤ 
           |aπ(φ(n,2p+1),2p+1) - xφ(n,2p+1)| + |xφ(n,2p+1) - yₙ| by(TriangleInequality) →
    step4: |aπ(φ(n,2p+1),2p+1) - xφ(n,2p+1)| + |xφ(n,2p+1) - yₙ| < 
           1/(2p+2) + 1/(2p+2) by(Premise) →
    step5: 1/(2p+2) + 1/(2p+2) = 1/(p+1)
  } →
  
  apply(ComputableRationalLimit()) →
  conclude(computable(yₙ))
}