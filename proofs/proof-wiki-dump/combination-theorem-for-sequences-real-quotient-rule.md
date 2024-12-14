theorem SequenceQuotientLimit() {
  assert(
    ∀{xₙ}, {yₙ} ∈ Sequences(ℝ) ∧
    (limₙ→∞ xₙ = l) ∧ 
    (limₙ→∞ yₙ = m) ∧
    (m ≠ 0) ⇒
    limₙ→∞ (xₙ/yₙ) = l/m
  )
}

proof SequenceQuotientLimit() {
  setVar({xₙ}, {yₙ}: Sequences(ℝ)) →
  setVar(l, m: ℝ) →
  
  lemma ModulusLimit() {
    assert(limₙ→∞ yₙ = m ⇒ limₙ→∞ |yₙ| = |m|)
  } →
  
  assert(m ≠ 0 ⇒ |m| > 0) →
  
  lemma SequenceWithinHalfLimit() {
    assert(∃N ∈ ℕ: ∀n > N: |yₙ| > |m|/2)
  } →
  
  apply(SequenceWithinHalfLimit()) →
  assert(∀n > N: yₙ ≠ 0) →
  
  setVar(n > N) →
  assert(
    |xₙ/yₙ - l/m| = 
    |mxₙ - yₙl|/(|m||yₙ|) →
    |mxₙ - yₙl|/(|m||yₙ|) < 
    (2/|m|²)|mxₙ - yₙl|
  ) →
  
  lemma LimitZero() {
    assert(limₙ→∞(mxₙ - yₙl) = ml - ml = 0)
  } →
  
  apply(SqueezingTheorem()) →
  assert(limₙ→∞(xₙ/yₙ) = l/m)
}

corollary ReciprocalLimit() {
  assert(
    ∀{xₙ} ∈ Sequences(ℝ) ∧
    (limₙ→∞ xₙ = l) ∧
    (l ≠ 0) ⇒
    limₙ→∞(1/xₙ) = 1/l
  )
}