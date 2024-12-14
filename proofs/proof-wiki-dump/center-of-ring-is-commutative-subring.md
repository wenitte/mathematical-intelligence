theorem Center_Is_Commutative_Subring() {
  assert(
    ∀R:Ring ⇒ Z(R) ≤ R ∧ isCommutative(Z(R))
  )
} ↔

proof Center_Is_Commutative_Subring() {
  setVar(R: Ring) →
  lemma Center_Definition() {
    assert(
      Z(R) = {x ∈ R | ∀y ∈ R: xy = yx}
    )
  } →
  lemma Centralizer_Is_Subring() {
    assert(
      ∀S ⊆ R: C_R(S) ≤ R
    )
  } →
  apply(Center_Definition()) →
  assert(Z(R) = C_R(R)) →
  apply(Centralizer_Is_Subring()) →
  assert(Z(R) ≤ R) →
  assert(
    ∀a,b ∈ Z(R) ⇒ (
      ∀r ∈ R: ar = ra ∧ br = rb ⇒
      ab = ba
    )
  ) →
  assert(isCommutative(Z(R)))
}