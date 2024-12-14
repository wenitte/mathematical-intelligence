theorem Deficient_Parallelogram_Square() {
  assert(
    ∀AB: Line, ∀AD: Parallelogram(
      isAppliedTo(AD, AB) ∧
      isDeficientBy(AD, Square(DB)) →
      Area(AD) = Rectangle(AC, CB)
    )
  )
} ↔

proof Deficient_Parallelogram_Square() {
  setVar(AB: Line) →
  setVar(AD: Parallelogram) →
  assert(isAppliedTo(AD, AB)) →
  assert(isDeficientBy(AD, Square(DB))) →
  
  lemma Square_Equal_Sides() {
    assert(
      isSquare(DB) →
      DC = BC
    )
  } →
  
  apply(Square_Equal_Sides()) →
  assert(DC = BC) →
  
  lemma Rectangle_Property() {
    assert(
      DC = BC →
      Area(AD) = Rectangle(AC, CB)
    )
  } →
  
  apply(Rectangle_Property()) →
  assert(Area(AD) = Rectangle(AC, CB))
}