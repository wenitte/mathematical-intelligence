theorem Sequence_Difference_Rule() {
  assert(
    ∀{xₙ}, {yₙ} ∈ ℝ^ℕ ∧
    lim(n→∞, xₙ) = l ∧
    lim(n→∞, yₙ) = m
    ⇒
    lim(n→∞, xₙ - yₙ) = l - m
  )
} ↔

proof Sequence_Difference_Rule() {
  setVar(xₙ, yₙ: ℝ^ℕ) →
  setVar(l, m: ℝ) →
  
  lemma Sum_Rule() {
    assert(
      lim(n→∞, xₙ + yₙ) = l + m
    )
  } →
  
  lemma Multiple_Rule() {
    assert(
      lim(n→∞, -yₙ) = -m
    )
  } →
  
  apply(Sum_Rule()) →
  apply(Multiple_Rule()) →
  
  assert(
    lim(n→∞, xₙ + (-yₙ)) = l + (-m)
  ) →
  
  assert(
    lim(n→∞, xₙ - yₙ) = l - m
  )
}