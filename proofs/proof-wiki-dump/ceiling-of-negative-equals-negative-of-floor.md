theorem Ceiling_Negative_Equals_Negative_Floor() {
  assert(
    ∀x ∈ ℝ ⇒ ⌈-x⌉ = -⌊x⌋
  )
} ↔

proof Ceiling_Negative_Equals_Negative_Floor() {
  setVar(x: ℝ) →
  
  lemma Floor_Bounds() {
    assert(x - 1 < ⌊x⌋ ≤ x)
  } →
  
  apply(Floor_Bounds()) →
  
  lemma Multiply_By_Negative_One() {
    assert(x - 1 < ⌊x⌋ ≤ x) →
    assert(-x + 1 > -⌊x⌋ ≥ -x)
  } →
  
  lemma Ceiling_Definition() {
    assert(
      ∀n ∈ ℤ ⇒ (⌈x⌉ = n ↔ x ≤ n < x + 1)
    )
  } →
  
  apply(Ceiling_Definition()) →
  
  assert(-x ≤ -⌊x⌋ < -x + 1) →
  assert(⌈-x⌉ = -⌊x⌋)
}