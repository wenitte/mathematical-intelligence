theorem Sequence_Difference_Rule(R: NormedDivisionRing) {
  assert(
    ∀{xn, yn, l, m} ⊂ R ∧
    isConvergent(xn, ∥·∥) ∧ lim(n→∞)(xn) = l ∧
    isConvergent(yn, ∥·∥) ∧ lim(n→∞)(yn) = m
    ⇒
    isConvergent(xn - yn, ∥·∥) ∧ lim(n→∞)(xn - yn) = l - m
  )
} ↔

proof Sequence_Difference_Rule() {
  setVar(xn, yn: Sequence(R)) →
  setVar(l, m: R) →
  
  lemma Sum_Rule() {
    assert(
      lim(n→∞)(xn + yn) = l + m
    )
  } →
  
  lemma Multiple_Rule() {
    assert(
      lim(n→∞)(-yn) = -m
    )
  } →

  apply(Sum_Rule()) →
  apply(Multiple_Rule()) →
  
  assert(
    lim(n→∞)(xn + (-yn)) = l + (-m)
  ) →
  
  assert(
    xn - yn ≡ xn + (-yn)
  ) →
  
  assert(
    lim(n→∞)(xn - yn) = l - m
  )
}