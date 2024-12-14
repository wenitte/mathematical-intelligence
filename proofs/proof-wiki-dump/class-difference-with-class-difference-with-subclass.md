theorem Class_Difference_With_Class_Difference_With_Subclass() {
  assert(
    ∀A,B: Class(A) ∧ Class(B) ∧ B ⊆ A →
    A ∖ (A ∖ B) = B
  )
} ↔

proof Class_Difference_With_Class_Difference_With_Subclass() {
  setVar(A,B: Class) →
  assert(B ⊆ A) →
  
  lemma Class_Difference_With_Class_Difference() {
    assert(
      ∀X,Y: Class(X) ∧ Class(Y) →
      X ∖ (X ∖ Y) = X ∩ Y
    )
  } →
  
  lemma Intersection_With_Subclass() {
    assert(
      ∀X,Y: Class(X) ∧ Class(Y) →
      (X ⊆ Y ↔ X ∩ Y = X)
    )
  } →
  
  apply(Class_Difference_With_Class_Difference()) →
  assert(A ∖ (A ∖ B) = A ∩ B) →
  apply(Intersection_With_Subclass()) →
  assert(B ⊆ A → A ∩ B = B) →
  assert(A ∖ (A ∖ B) = B)
}