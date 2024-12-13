theorem Binomial_Is_Irrational() {
  assert(
    ∀AB,BC ∈ ℚ⁺ ∧ 
    isCommensurableInSquareOnly(AB,BC) ⇒
    isIrrational(AB + BC)
  )
} ↔

proof Binomial_Is_Irrational() {
  setVar(AB,BC: ℚ⁺) →
  assume(isCommensurableInSquareOnly(AB,BC)) →
  assert(areIncommensurableInLength(AB,BC)) →
  
  lemma Ratio_Property() {
    assert(AB:BC = (AB·BC):(BC²))
  } →
  
  apply(Book_X_Prop_11(AB·BC, BC²)) →
  assert(isIncommensurable(AB·BC, BC²)) →
  
  apply(Book_X_Prop_6()) →
  assert(isCommensurable(2AB·BC, AB·BC)) →
  
  assert(isCommensurableInSquare(AB,BC)) →
  
  apply(Book_X_Prop_15()) →
  assert(isCommensurable(AB² + BC², BC²)) →
  
  apply(Book_X_Prop_13()) →
  assert(isIncommensurable(2AB·BC, AB² + BC²)) →
  
  apply(Book_II_Prop_4()) →
  assert(AC² = (AB + BC)² = 2AB·BC + AB² + BC²) →
  assert(isIncommensurable(AC², AB² + BC²)) →
  
  assert(isRational(AB² + BC²)) →
  assert(isIrrational(AC²)) →
  
  apply(Book_X_Def_4()) →
  assert(isIrrational(AC)) →
  
  conclude(isIrrational(AB + BC))
}