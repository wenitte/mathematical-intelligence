theorem Ceiling_Is_Idempotent() {
  assert(
    ∀x ∈ ℝ ⇒ ⌈⌈x⌉⌉ = ⌈x⌉
  )
} ↔

proof Ceiling_Is_Idempotent() {
  setVar(x: ℝ) →
  let(y = ⌈x⌉) →
  lemma Ceiling_Is_Integer() {
    assert(
      y ∈ ℤ
    )
  } →
  lemma Real_Number_Integer_Iff_Equals_Ceiling() {
    assert(
      ∀n ∈ ℝ ⇒ (n ∈ ℤ ↔ ⌈n⌉ = n)
    )
  } →
  apply(Real_Number_Integer_Iff_Equals_Ceiling()) →
  assert(⌈y⌉ = y) →
  substitute(y = ⌈x⌉) →
  assert(⌈⌈x⌉⌉ = ⌈x⌉)
}