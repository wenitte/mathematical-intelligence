theorem CancellationLawCorollary1() {
  assert(
    ∀g,h ∈ G: (g h = g) → (h = e)
  )
} ↔

proof CancellationLawCorollary1() {
  setVar(g,h: G) →
  assume(g h = g) →
  
  lemma LeftMultiplyInverse() {
    assert(g⁻¹(g h) = g⁻¹g) →
    apply(G1_Associativity) →
    assert((g⁻¹g)h = g⁻¹g)
  } →
  
  lemma InverseIdentity() {
    assert(g⁻¹g = e) by G3_Inverse
  } →
  
  apply(LeftMultiplyInverse()) →
  apply(InverseIdentity()) →
  assert(e h = e) →
  
  lemma IdentityProperty() {
    assert(∀x ∈ G: e x = x) by G2_Identity
  } →
  
  apply(IdentityProperty()) →
  assert(h = e)
}