theorem Squares_On_Proportional_Lines() {
  assert(
    ∀A,B,C,D,E,F ∈ Straight_Lines ⇒
    (A:B = C:D) ∧ (A² = B² + E²) ∧ (C² = D² + F²) ⇒
    (isCommensurable(A,E) ↔ isCommensurable(C,F))
  )
} ↔

lemma Find_Square_Difference() {
  assert(
    ∀X,Y ∈ Straight_Lines ∧ X > Y ⇒
    ∃Z ∈ Straight_Lines: X² = Y² + Z²
  )
} ↔

proof Squares_On_Proportional_Lines() {
  setVar(A,B,C,D: Straight_Lines) →
  assume(A:B = C:D) →
  
  apply(Find_Square_Difference()) →
  assert(∃E,F: A² = B² + E² ∧ C² = D² + F²) →
  
  lemma Similar_Figures() {
    assert(A:B = C:D ⇒ A²:B² = C²:D²)
  } →
  
  apply(Similar_Figures()) →
  assert(A²:B² = C²:D²) →
  
  substitute(A² = B² + E², C² = D² + F²) →
  assert((E² + B²):B² = (F² + D²):D²) →
  
  lemma Proportional_Separated() {
    assert((E² + B²):B² = (F² + D²):D² ⇒ E²:B² = F²:D²)
  } →
  
  apply(Proportional_Separated()) →
  assert(E²:B² = F²:D²) →
  
  apply(Similar_Figures()) →
  assert(B:E = D:F) →
  
  lemma Ex_Aequali() {
    assert((A:B = C:D) ∧ (B:E = D:F) ⇒ A:E = C:F)
  } →
  
  apply(Ex_Aequali()) →
  assert(A:E = C:F) →
  
  lemma Proportional_Commensurability() {
    assert(
      (A:E = C:F) ⇒
      (isCommensurable(A,E) ↔ isCommensurable(C,F))
    )
  } →
  
  apply(Proportional_Commensurability()) →
  assert(isCommensurable(A,E) ↔ isCommensurable(C,F))
}