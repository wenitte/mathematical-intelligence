theorem Combined_Sum_Rule_NDR() {
  assert(
    ∀R: NormedDivisionRing,
    ∀{xₙ}, {yₙ}: Sequence(R),
    ∀λ,μ ∈ R,
    ∀l,m ∈ R ⇒
    (limₙ→∞(xₙ) = l ∧ limₙ→∞(yₙ) = m) →
    (limₙ→∞(λxₙ + μyₙ) = λl + μm)
  )
} ↔

proof Combined_Sum_Rule_NDR() {
  setVar(R: NormedDivisionRing) →
  setVar({xₙ}, {yₙ}: Sequence(R)) →
  setVar(λ,μ: R) →
  setVar(l,m: R) →
  
  assert(limₙ→∞(xₙ) = l) →
  assert(limₙ→∞(yₙ) = m) →
  
  lemma Multiple_Rule_NDR() {
    assert(
      limₙ→∞(λxₙ) = λl ∧
      limₙ→∞(μyₙ) = μm
    )
  } →
  
  lemma Sum_Rule_NDR() {
    assert(
      ∀a,b ∈ Sequence(R) ⇒
      (limₙ→∞(a) + limₙ→∞(b) = limₙ→∞(a + b))
    )
  } →
  
  apply(Multiple_Rule_NDR()) →
  apply(Sum_Rule_NDR()) →
  
  assert(limₙ→∞(λxₙ + μyₙ) = λl + μm)
}