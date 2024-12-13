theorem Rational_Area_Irrational_Lines() {
  assert(
    ∃A,B: Lines where (
      isIrrational(A) ∧ 
      isIrrational(B) ∧
      area(A,B) ∈ ℚ
    )
  )
} ↔

proof Rational_Area_Irrational_Lines() {
  letA = Apotome() →
  letB = BinomialLine() →
  lemma Prev_Proposition() {
    assert(
      isRational(area(Apotome(), BinomialLine())) ∧
      isIrrational(Apotome()) ∧
      isIrrational(BinomialLine())
    )
  } →
  apply(Prev_Proposition()) →
  assert(
    ∃A,B: Lines where (
      A = Apotome() ∧
      B = BinomialLine() ∧
      isIrrational(A) ∧
      isIrrational(B) ∧
      isRational(area(A,B))
    )
  )
}