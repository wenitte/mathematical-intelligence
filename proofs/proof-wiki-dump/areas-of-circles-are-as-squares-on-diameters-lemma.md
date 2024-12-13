theorem Circle_Area_Relations() {
  assert(
    ∀S,T ∈ ℝ+ ∧ ∀circles(ABCD,EFGH) ⇒
    [S > EFGH ∧ (S:ABCD = EFGH:T) → T < ABCD]
  )
} ↔

proof Circle_Area_Relations() {
  setVar(S,T: ℝ+) →
  setCircles(ABCD,EFGH) →
  
  assert(S:ABCD = EFGH:T) →
  
  lemma Alternate_Proportion() {
    assert(
      ∀a,b,c,d ∈ ℝ+ ⇒ 
      [a:b = c:d → a:c = b:d]
    )
  } →
  
  apply(Alternate_Proportion()) →
  assert(S:EFGH = ABCD:T) →
  
  given(S > EFGH) →
  
  lemma Proportion_Order() {
    assert(
      ∀a,b,c,d ∈ ℝ+ ⇒
      [a:b = c:d ∧ a > b → c > d]
    )
  } →
  
  apply(Proportion_Order()) →
  assert(ABCD > T)
}