theorem Cancellation_Law_Corollary() {
  assert(
    ∀h,g ∈ G: (h g = g) → (h = e)
  )
} ↔

proof Cancellation_Law_Corollary() {
  setVar(h,g: G) →
  assume(h g = g) →
  
  assert(
    (h g)g⁻¹ = g g⁻¹
  ) →
  
  lemma Associativity() {
    assert(
      h(g g⁻¹) = (h g)g⁻¹
    )
  } →
  
  apply(Associativity()) →
  
  lemma Inverse_Property() {
    assert(
      g g⁻¹ = e
    )
  } →
  
  apply(Inverse_Property()) →
  
  assert(h e = e) →
  
  lemma Identity_Property() {
    assert(
      ∀x ∈ G: x e = x
    )
  } →
  
  apply(Identity_Property()) →
  
  assert(h = e)
}