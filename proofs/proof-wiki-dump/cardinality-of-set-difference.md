theorem Set_Difference_Cardinality() {
  assert(
    ∀S,T where T is_finite ⇒
    card(S \ T) = card(S) - card(S ∩ T)
  )
} ↔

proof Set_Difference_Cardinality() {
  setVar(S: Set, T: Set where T is_finite) →
  
  lemma Intersection_Is_Subset() {
    assert((S ∩ T) ⊆ S ∧ (S ∩ T) ⊆ T)
  } →
  
  lemma Subset_Of_Finite_Is_Finite() {
    assert(
      ∀A,B where (A ⊆ B ∧ B is_finite) ⇒ A is_finite
    )
  } →
  
  apply(Intersection_Is_Subset()) →
  apply(Subset_Of_Finite_Is_Finite()) →
  assert((S ∩ T) is_finite) →
  
  lemma Set_Difference_With_Intersection() {
    assert(
      S \ T = S \ (S ∩ T)
    )
  } →
  
  lemma Cardinality_Of_Set_Difference_With_Subset() {
    assert(
      ∀A,B where (B ⊆ A ∧ B is_finite) ⇒
      card(A \ B) = card(A) - card(B)
    )
  } →
  
  apply(Set_Difference_With_Intersection()) →
  apply(Cardinality_Of_Set_Difference_With_Subset()) →
  assert(card(S \ T) = card(S) - card(S ∩ T))
}