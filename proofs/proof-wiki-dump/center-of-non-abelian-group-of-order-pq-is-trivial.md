theorem Center_Non_Abelian_Group_pq_Trivial() {
  assert(
    ∀p,q ∈ ℙ ∧ p ≠ q ∧
    ∀G: Group ∧ |G| = pq ∧ ¬isAbelian(G) ∧ e ∈ G isIdentity(e) ⇒
    Z(G) = {e}
  )
} ↔

proof Center_Non_Abelian_Group_pq_Trivial() {
  setVar(G: Group, p,q: ℙ, e: Element) →
  assert(Z(G) ⊴ G) by Center_Normal_Subgroup() →
  lemma Order_Options() {
    assert(|Z(G)| ∈ {1,p,q,pq}) by Lagrange_Theorem()
  } →
  assert(G ≠ Z(G)) by NotAbelian_NotEqual_Center() →
  assert(|Z(G)| ≠ pq) →
  lemma Quotient_Not_Cyclic() {
    assert(G/Z(G) ≠ Cyclic(n) ∀n > 1) by Quotient_Center_Cyclic_Implies_Abelian()
  } →
  assert(∀x ∈ G: C_x ⊂ G) where C_x = Centralizer(x) →
  lemma Prime_Order_Not_Possible() {
    assert(|Z(G)| ∉ {p,q}) by Prime_Group_Is_Cyclic() ∧ Quotient_Not_Cyclic()
  } →
  apply(Order_Options()) ∧ apply(Prime_Order_Not_Possible()) →
  assert(|Z(G)| = 1) →
  assert(Z(G) = {e})
}