theorem Ceiling_of_Non_Integer() {
  assert(
    ∀x ∈ ℝ ∧ x ∉ ℤ ⇒ ⌈x⌉ > x
  )
} ↔

proof Ceiling_of_Non_Integer() {
  setVar(x: ℝ) →
  assume(x ∉ ℤ) →
  
  lemma Ceiling_Bounds() {
    assert(⌈x⌉ ≥ x)
  } →
  
  lemma Integer_Iff_Equals_Ceiling() {
    assert(x = ⌈x⌉ ↔ x ∈ ℤ)
  } →
  
  apply(Integer_Iff_Equals_Ceiling()) →
  assert(x ∉ ℤ ⇒ x ≠ ⌈x⌉) →
  
  apply(Ceiling_Bounds()) →
  assert(⌈x⌉ ≥ x ∧ ⌈x⌉ ≠ x) →
  conclude(⌈x⌉ > x)
}