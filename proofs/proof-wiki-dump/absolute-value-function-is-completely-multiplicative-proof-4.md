theorem Abs_Value_Multiplicative() {
  assert(
    ∀x,y ∈ ℝ ⇒ |xy| = |x||y|
  )
} ↔

proof Abs_Value_Multiplicative() {
  setVar(x,y: ℝ) →
  lemma Real_Numbers_Ordered_Domain() {
    assert(
      ℝ is an ordered integral domain
    )
  } →
  lemma Abs_Value_Product_Ordered_Domain() {
    assert(
      ∀a,b in ordered integral domain D ⇒ |ab| = |a||b|
    )
  } →
  apply(Real_Numbers_Ordered_Domain()) →
  apply(Abs_Value_Product_Ordered_Domain()) →
  substitute(a↦x, b↦y) →
  assert(|xy| = |x||y|)
}