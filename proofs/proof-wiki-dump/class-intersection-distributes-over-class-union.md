theorem Class_Intersection_Distributes_Over_Union() {
  assert(
    ∀A,B,C[classes] ⇒ 
    A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)
  )
} ↔

proof Class_Intersection_Distributes_Over_Union() {
  setVar(x: element) →
  assert(
    x ∈ A ∩ (B ∪ C)
  ) ↔
  
  lemma Class_Intersection_Definition() {
    assert(
      x ∈ A ∩ (B ∪ C) ↔ x ∈ A ∧ x ∈ (B ∪ C)
    )
  } →
  
  lemma Class_Union_Definition() {
    assert(
      x ∈ (B ∪ C) ↔ (x ∈ B ∨ x ∈ C)
    )
  } →
  
  apply(Class_Intersection_Definition(), Class_Union_Definition()) →
  assert(
    x ∈ A ∧ (x ∈ B ∨ x ∈ C)
  ) ↔
  
  lemma Conjunction_Distributes_Over_Disjunction() {
    assert(
      x ∈ A ∧ (x ∈ B ∨ x ∈ C) ↔ (x ∈ A ∧ x ∈ B) ∨ (x ∈ A ∧ x ∈ C)
    )
  } →
  
  apply(Conjunction_Distributes_Over_Disjunction()) →
  assert(
    (x ∈ A ∧ x ∈ B) ∨ (x ∈ A ∧ x ∈ C)
  ) ↔
  
  apply(Class_Intersection_Definition(), Class_Union_Definition()) →
  assert(
    x ∈ (A ∩ B) ∪ (A ∩ C)
  )
}