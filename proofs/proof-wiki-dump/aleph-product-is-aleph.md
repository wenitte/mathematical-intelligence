theorem Aleph_Product_Equals_Self() {
  assert(
    ∀x(ordinal(x) ⇒ |ℵ_x × ℵ_x| = ℵ_x)
  )
} ↔

proof Aleph_Product_Equals_Self() {
  setVar(x: ordinal) →
  assert(|ℵ_x × ℵ_x|) →
  lemma Non_Finite_Cardinal_Product() {
    assert(
      ∀κ(cardinal(κ) ∧ ¬finite(κ) ⇒ |κ × κ| = |κ|)
    )
  } →
  assert(|ℵ_x × ℵ_x| = |ℵ_x|) →
  lemma Aleph_Is_Infinite_Cardinal() {
    assert(
      ∀α(ordinal(α) ⇒ infinite(ℵ_α))
    )
  } →
  apply(Aleph_Is_Infinite_Cardinal()) →
  assert(|ℵ_x| = ℵ_x) →
  conclude(|ℵ_x × ℵ_x| = ℵ_x)
}