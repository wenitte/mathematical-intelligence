theorem AllSelfInverseImpliesAbelian() {
  assert(
    ∀G(IsGroup(G) ∧ 
    (∀x ∈ G → x ∘ x = e) 
    ⟹ IsAbelian(G))
  )
} ↔

proof AllSelfInverseImpliesAbelian() {
  setGroup(G) →
  assume(IsGroup(G)) →
  assume(∀x ∈ G → x ∘ x = e) →
  
  lemma ProductIsSelfInverse() {
    setVar(x,y: G) →
    assert((x ∘ y) ∘ (x ∘ y) = e)
  } →
  
  lemma SelfInverseElementsCommute() {
    assert(
      ∀a,b ∈ G → 
      ((a ∘ a = e) ∧ (b ∘ b = e) ∧ ((a ∘ b) ∘ (a ∘ b) = e)) 
      ⟹ (a ∘ b = b ∘ a)
    )
  } →
  
  apply(ProductIsSelfInverse()) →
  apply(SelfInverseElementsCommute()) →
  
  assert(∀x,y ∈ G → x ∘ y = y ∘ x) →
  assert(IsAbelian(G))
}