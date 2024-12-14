theorem Class_Difference_Property() {
  assert(
    ∀A,B[classes] ⇒ (B \ (A \ B) = B)
  )
} ↔

proof Class_Difference_Property() {
  setVar(x: element) →
  assert(x ∈ B \ (A \ B)) ↔
  
  lemma Class_Difference_Definition() {
    assert(x ∈ S \ T ↔ (x ∈ S ∧ x ∉ T))
  } →
  apply(Class_Difference_Definition()) →
  assert(x ∈ B ∧ x ∉ (A \ B)) ↔
  
  lemma DeMorgans_Law() {
    assert(x ∉ (A \ B) ↔ (x ∉ A ∨ x ∈ B))
  } →
  apply(DeMorgans_Law()) →
  assert(x ∈ B ∧ (x ∉ A ∨ x ∈ B)) ↔
  
  lemma Distribution_Law() {
    assert(P ∧ (Q ∨ R) ↔ (P ∧ Q) ∨ (P ∧ R))
  } →
  apply(Distribution_Law()) →
  assert((x ∈ B ∧ x ∉ A) ∨ (x ∈ B ∧ x ∈ B)) ↔
  
  lemma Idempotence() {
    assert(P ∧ P ↔ P)
  } →
  apply(Idempotence()) →
  assert((x ∈ B ∧ x ∉ A) ∨ x ∈ B) ↔
  
  lemma Absorption() {
    assert(P ∨ (P ∧ Q) ↔ P)
  } →
  apply(Absorption()) →
  assert(x ∈ B) →
  
  lemma Class_Equality() {
    assert(∀x(x ∈ X ↔ x ∈ Y) → X = Y)
  } →
  apply(Class_Equality()) →
  assert(B \ (A \ B) = B)
}