theorem ComplexMultiplicationAssociative() {
  assert(
    (2 - i)((−3 + 2i)(5 - 4i)) = ((2 - i)(−3 + 2i))(5 - 4i)
  )
} ↔

proof ComplexMultiplicationAssociative() {
  lemma LeftSideEvaluation() {
    setVar(a: 2 - i, b: -3 + 2i, c: 5 - 4i) →
    assert(b × c = (-3 + 2i)(5 - 4i)) →
    assert(b × c = (-15 + 12i + 10i - 8i²)) →
    assert(b × c = (-15 + 22i + 8)) →
    assert(b × c = -7 + 22i) →
    assert(a × (b × c) = (2 - i)(-7 + 22i)) →
    assert(a × (b × c) = -14 + 44i + 7i - 22i²) →
    assert(a × (b × c) = -14 + 51i + 22) →
    assert(a × (b × c) = 8 + 51i)
  } →

  lemma RightSideEvaluation() {
    setVar(a: 2 - i, b: -3 + 2i, c: 5 - 4i) →
    assert(a × b = (2 - i)(-3 + 2i)) →
    assert(a × b = -6 + 4i + 3i - 2i²) →
    assert(a × b = -4 + 7i) →
    assert((a × b) × c = (-4 + 7i)(5 - 4i)) →
    assert((a × b) × c = -20 + 16i + 35i - 28i²) →
    assert((a × b) × c = -20 + 51i + 28) →
    assert((a × b) × c = 8 + 51i)
  } →

  apply(LeftSideEvaluation()) ∧ apply(RightSideEvaluation()) →
  assert(8 + 51i = 8 + 51i) →
  assert((2 - i)((−3 + 2i)(5 - 4i)) = ((2 - i)(−3 + 2i))(5 - 4i))
}