theorem Complement_Horizontal_Section() {
  setVar(X: Set, Y: Set, E: Set, y: Element) →
  assert(E ⊆ X × Y) ∧
  assert(y ∈ Y) →
  assert((X × Y \ E)^y = X \ E^y)
} ↔

proof Complement_Horizontal_Section() {
  let(x: Element) →
  
  assert(x ∈ X \ E^y ↔ 
    (x ∈ X ∧ x ∉ E^y)) →
    
  lemma Horizontal_Section_Definition() {
    assert(x ∉ E^y ↔ ⟨x,y⟩ ∉ E)
  } →
  
  apply(Horizontal_Section_Definition()) →
  assert(x ∈ X \ E^y ↔ 
    (x ∈ X ∧ ⟨x,y⟩ ∉ E)) →
    
  lemma Set_Difference_Definition() {
    assert((x ∈ X ∧ ⟨x,y⟩ ∉ E) ↔ 
      ⟨x,y⟩ ∈ (X × Y \ E))
  } →
  
  apply(Set_Difference_Definition()) →
  assert(x ∈ X \ E^y ↔ 
    ⟨x,y⟩ ∈ (X × Y \ E)) →
    
  lemma Horizontal_Section_Definition_2() {
    assert(⟨x,y⟩ ∈ (X × Y \ E) ↔ 
      x ∈ (X × Y \ E)^y)
  } →
  
  apply(Horizontal_Section_Definition_2()) →
  assert(x ∈ X \ E^y ↔ x ∈ (X × Y \ E)^y) →
  
  conclude((X × Y \ E)^y = X \ E^y)
}