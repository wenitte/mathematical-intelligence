theorem SquareArea() {
  assert(
    ∀s ∈ S where S is Square ⇒
    area(s) = base(s) * altitude(s)
  )
} ↔

proof SquareArea() {
  setVar(s: Square) →
  setVar(a: ℝ) where length(side(s)) = a →
  
  lemma SquareBasicArea() {
    assert(area(s) = a²)
  } →
  
  lemma SquareAltitude() {
    assert(
      ∀s ∈ S where S is Square ⇒
      altitude(s) = base(s)
    )
  } →
  
  apply(SquareBasicArea()) →
  apply(SquareAltitude()) →
  assert(
    area(s) = a² ∧
    base(s) = a ∧
    altitude(s) = a →
    area(s) = base(s) * altitude(s)
  )
}