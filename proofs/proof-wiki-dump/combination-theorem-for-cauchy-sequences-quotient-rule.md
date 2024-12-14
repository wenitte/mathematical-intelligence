theorem CauchySequenceQuotientRule() {
  assert(
    ∀R[NormedDivisionRing(R)] ∧
    ∀{xₙ, yₙ}[CauchySequence(xₙ, R) ∧ CauchySequence(yₙ, R)] ∧
    ¬(yₙ → 0) ⇒
    (∃K ∈ ℕ: ∀n > K: yₙ ≠ 0) ∧
    CauchySequence({xₖ₊ₙ(yₖ₊ₙ)⁻¹}_{n∈ℕ}) ∧
    CauchySequence({(yₖ₊ₙ)⁻¹xₖ₊ₙ}_{n∈ℕ})
  )
} ↔

proof CauchySequenceQuotientRule() {
  setVar(R: NormedDivisionRing) →
  setVar(xₙ, yₙ: CauchySequence(R)) →
  assume(¬(yₙ → 0)) →
  
  lemma InverseRule() {
    assert(
      ∃K ∈ ℕ: ∀n > K: yₙ ≠ 0 ∧
      CauchySequence({(yₖ₊ₙ)⁻¹}_{n∈ℕ})
    )
  } →
  
  lemma SubsequenceCauchy() {
    assert(
      CauchySequence(xₙ) ⇒ CauchySequence({xₖ₊ₙ}_{n∈ℕ})
    )
  } →
  
  apply(InverseRule()) →
  apply(SubsequenceCauchy()) →
  
  lemma ProductRule() {
    assert(
      CauchySequence(aₙ) ∧ CauchySequence(bₙ) ⇒
      CauchySequence({aₙbₙ}_{n∈ℕ})
    )
  } →
  
  apply(ProductRule(), {xₖ₊ₙ}, {(yₖ₊ₙ)⁻¹}) →
  assert(
    CauchySequence({xₖ₊ₙ(yₖ₊ₙ)⁻¹}_{n∈ℕ}) ∧
    CauchySequence({(yₖ₊ₙ)⁻¹xₖ₊ₙ}_{n∈ℕ})
  )
}