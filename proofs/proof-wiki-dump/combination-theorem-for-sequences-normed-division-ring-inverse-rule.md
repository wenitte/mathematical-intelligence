theorem CombinationSequenceInverseRule() {
  assert(
    ∀R[NormedDivisionRing] ∧ ∀{xₙ}[Sequence(R)] ∧ ∀l ∈ R ⇒
    (limₙ→∞ xₙ = l) ∧ (l ≠ 0) ⇒
    (∃k ∈ ℕ: ∀n ∈ ℕ: x_{k+n} ≠ 0) ∧
    (limₙ→∞ x_{k+n}⁻¹ = l⁻¹)
  )
} ↔

proof CombinationSequenceInverseRule() {
  setVar(R: NormedDivisionRing) →
  setVar({xₙ}: Sequence(R)) →
  setVar(l: R, l ≠ 0) →
  
  lemma SequenceWithinHalfLimit() {
    assert(
      limₙ→∞ xₙ = l ⇒
      ∃k ∈ ℕ: ∀n ∈ ℕ: ‖l‖/2 < ‖x_{k+n}‖
    )
  } →
  
  apply(SequenceWithinHalfLimit()) →
  
  lemma NormPositiveDefiniteness() {
    assert(
      ∀n ∈ ℕ: ‖x_{k+n}‖ > 0 ⇒ x_{k+n} ≠ 0
    )
  } →
  
  setVar({yₙ}: Sequence(R), yₙ = x_{k+n}) →
  
  lemma SubsequenceLimit() {
    assert(
      limₙ→∞ xₙ = l ⇒ limₙ→∞ yₙ = l
    )
  } →
  
  assert(∀n ∈ ℕ: yₙ ≠ 0) →
  assert({yₙ⁻¹} = {x_{k+n}⁻¹}) →
  
  lemma InverseLimitEquality() {
    assert(
      limₙ→∞ yₙ = l ∧ (∀n ∈ ℕ: yₙ ≠ 0) ⇒
      limₙ→∞ yₙ⁻¹ = l⁻¹
    )
  } →
  
  apply(InverseLimitEquality()) →
  assert(limₙ→∞ x_{k+n}⁻¹ = l⁻¹)
}