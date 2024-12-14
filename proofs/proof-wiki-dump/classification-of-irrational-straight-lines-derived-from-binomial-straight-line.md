theorem Classification_Of_Irrational_Lines() {
  assert(
    (∀x: BinomialLine ∪ IrrationalLine) ∧ (∀y: MedialLine) →
    ¬(x = y) ∧ (∀i,j: IrrationalLine, i ≠ j → ¬(i = j))
  )
} ↔

proof Classification_Of_Irrational_Lines() {
  lemma Medial_Square_Property() {
    assert(
      ∀m: MedialLine, ∀r: RationalLine →
      (Square(m).appliedTo(r).breadth ∈ RationalLine) ∧
      (Square(m).appliedTo(r).breadth ≁ r)
    )
  } →

  lemma Binomial_Properties() {
    assert(
      ∀r: RationalLine →
      (Square(BinomialLine).appliedTo(r).breadth = FirstBinomial) ∧
      (Square(FirstBimedial).appliedTo(r).breadth = SecondBinomial) ∧
      (Square(SecondBimedial).appliedTo(r).breadth = ThirdBinomial) ∧
      (Square(Major).appliedTo(r).breadth = FourthBinomial) ∧
      (Square(RationalPlusMedial).appliedTo(r).breadth = FifthBinomial) ∧
      (Square(SumTwoMedial).appliedTo(r).breadth = SixthBinomial)
    )
  } →

  lemma Breadth_Distinctness() {
    assert(
      ∀b₁,b₂ ∈ {First..Sixth}Binomial, b₁ ≠ b₂ →
      (b₁.order ≠ b₂.order) ∧
      (FirstBinomial ∈ RationalLine) ∧
      (∀i ∈ {Second..Sixth}Binomial → i ∉ RationalLine)
    )
  } →

  apply(Medial_Square_Property()) →
  apply(Binomial_Properties()) →
  apply(Breadth_Distinctness()) →
  
  assert(
    (AllBreadthsDistinct = true) ∧
    (AllLinesIncommensurable = true)
  )
}