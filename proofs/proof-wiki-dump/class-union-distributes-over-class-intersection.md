theorem Class_Union_Distributes_Over_Intersection() {
  assert(
    ∀A,B,C ∈ Classes ⇒
    A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)
  )
} ↔

proof Class_Union_Distributes_Over_Intersection() {
  setVar(x: Element) →
  setVar(A,B,C: Classes) →
  
  assert(
    x ∈ A ∪ (B ∩ C)
  ) ↔
  
  lemma Class_Union_Intersection_Definition() {
    assert(
      x ∈ A ∪ (B ∩ C) ↔ 
      x ∈ A ∨ (x ∈ B ∧ x ∈ C)
    )
  } →
  
  apply(Class_Union_Intersection_Definition()) →
  
  lemma Disjunction_Left_Distributive() {
    assert(
      x ∈ A ∨ (x ∈ B ∧ x ∈ C) ↔
      (x ∈ A ∨ x ∈ B) ∧ (x ∈ A ∨ x ∈ C)
    )
  } →
  
  apply(Disjunction_Left_Distributive()) →
  
  lemma Class_Union_Definition() {
    assert(
      (x ∈ A ∨ x ∈ B) ∧ (x ∈ A ∨ x ∈ C) ↔
      x ∈ (A ∪ B) ∩ (A ∪ C)
    )
  } →
  
  apply(Class_Union_Definition()) →
  
  assert(
    x ∈ (A ∪ B) ∩ (A ∪ C)
  )
}