theorem CauchySequenceCombination() {
  assert(
    ∀R[NormedDivisionRing] ∧
    ∀{xₙ}[CauchySequence(R)] ∧
    ∀{yₙ}[CauchySequence(R)] ∧
    ∀a,b ∈ R ⇒
    {axₙ + byₙ}[CauchySequence(R)]
  )
} ↔

proof CauchySequenceCombination() {
  setVar(R: NormedDivisionRing) →
  setVar(xₙ: CauchySequence(R)) →
  setVar(yₙ: CauchySequence(R)) →
  setVar(a,b: R) →
  
  lemma MultipleRule() {
    assert(
      {axₙ}[CauchySequence(R)] ∧
      {byₙ}[CauchySequence(R)]
    )
  } →
  
  apply(MultipleRule()) →
  
  lemma SumRule() {
    assert(
      ∀s₁,s₂[CauchySequence(R)] ⇒
      {s₁ + s₂}[CauchySequence(R)]
    )
  } →
  
  apply(SumRule(), {axₙ}, {byₙ}) →
  
  assert({axₙ + byₙ}[CauchySequence(R)])
}