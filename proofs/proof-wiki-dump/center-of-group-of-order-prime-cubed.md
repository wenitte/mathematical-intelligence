theorem Center_Not_PSquare() {
  assert(
    ∀G: Group, ∀p: Prime, ∀Z: Function →
    (|G| = p³ ∧ Z(G) = Center(G)) →
    |Z(G)| ≠ p²
  )
} ↔

proof Center_Not_PSquare() {
  setVar(G: Group, p: Prime, Z: Function) →
  assume(|Z(G)| = p²) →
  assert(|G/Z(G)| = p) {
    apply(Order_Quotient_Group()) →
    |G/Z(G)| = |G|/|Z(G)| = p³/p² = p
  } →
  lemma Prime_Order_Cyclic() {
    assert(|G/Z(G)| = p → G/Z(G) is_cyclic)
  } →
  apply(Prime_Order_Cyclic()) →
  lemma Quotient_Center_Cyclic_Implies_Abelian() {
    assert(G/Z(G) is_cyclic → G is_abelian)
  } →
  apply(Quotient_Center_Cyclic_Implies_Abelian()) →
  assert(G is_abelian → |Z(G)| = |G|) →
  assert(|Z(G)| = p³) →
  contradiction(|Z(G)| = p² ∧ |Z(G)| = p³) →
  conclude(|Z(G)| ≠ p²)
}