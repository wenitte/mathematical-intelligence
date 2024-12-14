theorem Combination_Theorem_Cauchy_Sequences() {
  define(R: NormedDivisionRing) →
  assert(
    ∀{xₙ: Sequence(R)} ∧
    ∀{a: R} ∧
    isCauchySequence(xₙ) ⇒
    isCauchySequence(a·xₙ)
  )
} ↔

proof Combination_Theorem_Cauchy_Sequences() {
  setVar(R: NormedDivisionRing) →
  setVar(xₙ: Sequence(R)) →
  setVar(a: R) →
  assume(isCauchySequence(xₙ)) →
  
  lemma ProductRule() {
    assert(
      ∀{xₙ,yₙ: Sequence(R)} ∧
      isCauchySequence(xₙ) ∧
      isCauchySequence(yₙ) ⇒
      isCauchySequence(xₙ·yₙ)
    )
  } →
  
  define(yₙ := xₙ) →
  define(constantSeq := ⟨a,a,a,...⟩) →
  
  apply(ProductRule(), {
    xₙ := constantSeq,
    yₙ := yₙ
  }) →
  
  assert(isCauchySequence(constantSeq·yₙ)) →
  assert(constantSeq·yₙ = a·xₙ) →
  conclude(isCauchySequence(a·xₙ))
}