theorem ComparisonTestDivergence() {
  assert(
    ∀{bn} ∈ ℝ∞ ∧ (∑(n=1 to ∞) bn diverges) ∧ (∀n ∈ ℕ>0: bn > 0) ∧
    ∃{an} ∈ ℝ∞ ∧
    (∀n ∈ ℕ>0: bn ≤ an) 
    ⇒
    (∑(n=1 to ∞) an diverges)
  )
} ↔

proof ComparisonTestDivergence() {
  lemma ContrapositiveCT() {
    assert(
      (∑(n=1 to ∞) an converges) ∧ (∀n ∈ ℕ>0: bn ≤ an)
      ⇒
      (∑(n=1 to ∞) bn converges)
    )
  } →
  
  apply(RuleOfTransposition()) {
    assert(
      ContrapositiveCT() ↔ ComparisonTestDivergence()
    )
  } →
  
  apply(ContrapositiveCT()) →
  conclude()
}