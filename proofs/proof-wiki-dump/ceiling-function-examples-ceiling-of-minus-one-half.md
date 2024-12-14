theorem Ceiling_Of_Minus_Half() {
  assert(
    ⌈-1/2⌉ = 0
  )
} ↔

proof Ceiling_Of_Minus_Half() {
  lemma Ceiling_Definition() {
    assert(
      ∀x ∈ ℝ, ⌈x⌉ = min{n ∈ ℤ | n ≥ x}
    )
  } →
  
  assert(0 ≥ -1/2) ∧
  assert(-1 = -2/2) ∧
  assert(-2/2 < -1/2) →
  
  lemma Integer_Bounds() {
    assert(
      -1 < -1/2 < 0 ∧
      0 ∈ ℤ ∧
      ∀n ∈ ℤ(n ≥ -1/2 → n ≥ 0)
    )
  } →
  
  apply(Ceiling_Definition()) →
  apply(Integer_Bounds()) →
  
  assert(⌈-1/2⌉ = 0)
}