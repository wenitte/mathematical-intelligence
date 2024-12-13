theorem BilinearFormReflexiveIffSymmetricOrAlternating() {
  setContext(K: Field)
  setContext(V: VectorSpace(K))
  setVar(b: BilinearForm(V))
  
  assert(
    isReflexive(b) ↔ (isSymmetric(b) ∨ isAlternating(b))
  )
} ↔

proof BilinearFormReflexiveIffSymmetricOrAlternating() {
  // Forward direction
  lemma ForwardDirection() {
    assert(
      isReflexive(b) → (isSymmetric(b) ∨ isAlternating(b))
    )
    apply(ReflexiveBilinearFormIsSymmetricOrAlternating())
  } →

  // Backward direction
  lemma BackwardDirection() {
    assert(
      (isSymmetric(b) ∨ isAlternating(b)) → isReflexive(b)
    ) →
    cases {
      case isSymmetric(b):
        apply(SymmetricBilinearFormIsReflexive())
      case isAlternating(b):
        apply(AlternatingBilinearFormIsReflexive())
    }
  } →

  combine(ForwardDirection(), BackwardDirection()) →
  assert(
    isReflexive(b) ↔ (isSymmetric(b) ∨ isAlternating(b))
  )
}