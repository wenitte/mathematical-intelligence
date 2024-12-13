theorem Angle_Bisector_Vector() {
  assert(
    ∀u,v ∈ V: (∥u∥ ≠ 0 ∧ ∥v∥ ≠ 0) ⇒
    (∥u∥v + ∥v∥u) bisects_angle(u,v)
  )
} ↔

proof Angle_Bisector_Vector() {
  setVar(u,v: V) →
  assume(∥u∥ ≠ 0 ∧ ∥v∥ ≠ 0) →
  
  lemma Equal_Length() {
    assert(∥∥u∥v∥ = ∥∥v∥u∥)
  } →
  
  lemma Rhombus_Formation() {
    assert(
      Equal_Length() ∧
      vectors_form_rhombus(∥u∥v, ∥v∥u)
    )
  } →
  
  apply(Rhombus_Formation()) →
  apply(Diagonals_Of_Rhombus_Bisect_Angles) →
  
  conclude(
    (∥u∥v + ∥v∥u) bisects_angle(u,v)
  )
}