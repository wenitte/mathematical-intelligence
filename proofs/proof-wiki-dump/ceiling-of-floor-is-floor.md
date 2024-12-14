theorem Ceiling_of_Floor_is_Floor() {
  assert(
    ∀x ∈ ℝ → ⌈⌊x⌋⌉ = ⌊x⌋
  )
} ↔

proof Ceiling_of_Floor_is_Floor() {
  setVar(x: ℝ) →
  setVar(y: ℝ) →
  assert(y = ⌊x⌋) →
  
  lemma Floor_is_Integer() {
    assert(y ∈ ℤ)
  } →
  
  lemma Integer_equals_Ceiling() {
    assert(∀n ∈ ℤ → ⌈n⌉ = n)
  } →
  
  apply(Floor_is_Integer()) →
  apply(Integer_equals_Ceiling()) →
  assert(⌈y⌉ = y) →
  substitute(y = ⌊x⌋) →
  assert(⌈⌊x⌋⌉ = ⌊x⌋)
}