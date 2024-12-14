theorem Complement_Vertical_Section() {
  let(X: Set, Y: Set, E: Set, x: Element) →
  assert(E ⊆ X × Y) ∧
  assert(x ∈ X) →
  assert((X × Y \ E)_x = Y \ E_x)
} ↔

proof Complement_Vertical_Section() {
  let(y: Element) →
  
  lemma Set_Equivalence() {
    assert(y ∈ Y \ E_x ↔ (y ∈ Y ∧ y ∉ E_x)) →
    assert(y ∈ Y ∧ y ∉ E_x ↔ y ∈ Y ∧ (x,y) ∉ E) →
    assert(y ∈ Y ∧ (x,y) ∉ E ↔ (x,y) ∈ (X × Y \ E)) →
    assert((x,y) ∈ (X × Y \ E) ↔ y ∈ (X × Y \ E)_x)
  } →
  
  apply(Set_Equivalence()) →
  assert(y ∈ Y \ E_x ↔ y ∈ (X × Y \ E)_x) →
  conclude((X × Y \ E)_x = Y \ E_x)
}