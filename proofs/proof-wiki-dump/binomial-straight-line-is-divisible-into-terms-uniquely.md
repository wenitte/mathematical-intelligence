theorem Binomial_Straight_Line_Uniquely_Divisible() {
  assert(
    ∀AB(isBinomial(AB) ⇒ ∃!C(dividesBinomialTerms(C, AB)))
  )
}

lemma Unequal_Parts_Squares() {
  assert(
    ∀AB,C,D(
      isLine(AB) ∧ 
      cut(AB, C) ∧ cut(AB, D) ∧ 
      AC > DB ⇒ 
      AC² + CB² > AD² + DB²
    )
  )
}

proof Binomial_Straight_Line_Uniquely_Divisible() {
  setVar(AB: Line, C: Point) →
  assume(isBinomial(AB)) →
  assume(dividesBinomialTerms(C, AB)) →
  assert(rational(AC) ∧ rational(CB)) →
  assert(commensurableInSquareOnly(AC, CB)) →

  byContradiction() {
    assume(∃D(D ≠ C ∧ dividesBinomialTerms(D, AB))) →
    assert(AC ≠ DB) →
    assert(¬equidistantFromBisection(C, D, AB)) →

    apply(Square_of_Sum) {
      assert(AB² = AC² + CB² + 2⋅AC⋅CB) ∧
      assert(AB² = AD² + DB² + 2⋅AD⋅DB)
    } →

    assert((AC² + CB²) - (AD² + DB²) = 2⋅AD⋅DB - 2⋅AC⋅CB) →
    
    assert(rational(AC²) ∧ rational(CB²) ∧ rational(AD²) ∧ rational(DB²)) →
    assert(rational((AC² + CB²) - (AD² + DB²))) →
    assert(rational(2⋅AD⋅DB - 2⋅AC⋅CB)) →
    
    assert(medial(2⋅AC⋅CB) ∧ medial(2⋅AD⋅DB)) →
    
    apply(Medial_Area_Not_Greater_By_Rational) →
    assert(contradiction())
  } →
  
  conclude(∃!C(dividesBinomialTerms(C, AB)))
}