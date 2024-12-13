theorem Addition_Fraction_Example() {
  assert(
    1/2 + 1/3 = 5/6
  )
} ↔

proof Addition_Fraction_Example() {
  assert(1/2 + 1/3) →
  assert((3×1)/(3×2) + (2×1)/(2×3)) →
  lemma Common_Denominator() {
    assert(
      ((3×1)/(3×2) = 3/6) ∧
      ((2×1)/(2×3) = 2/6)
    )
  } →
  apply(Common_Denominator()) →
  assert(3/6 + 2/6) →
  lemma Addition_Over_Common_Denominator() {
    assert(
      ∀a,b,d ∈ ℤ ⇒ (a/d + b/d = (a+b)/d)
    )
  } →
  apply(Addition_Over_Common_Denominator()) →
  assert((3+2)/6) →
  assert(5/6)
}