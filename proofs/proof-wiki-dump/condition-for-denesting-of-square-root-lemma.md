theorem Denesting_Square_Root_Lemma() {
  assert(
    ∀a,b,c,d ∈ ℚ≥0 ∧ √b ∉ ℚ →
    (√(a + √b) = √(c + √d) → (a = c ∧ b = d))
  )
} ↔

proof Denesting_Square_Root_Lemma() {
  setVar(a,b,c,d: ℚ≥0) →
  assume(√b ∉ ℚ) →
  assume(√(a + √b) = √(c + √d)) →
  
  assert(√(a + √b) = √(c + √d)) →
  assert(a + √b = c + √d) →
  assert(a - c = √d - √b) →
  assert(√d - √b ∈ ℚ) →

  lemma Contradiction() {
    assume(b ≠ d) →
    assert(√d - √b ≠ 0) →
    assert(d - b = (√d - √b)(√d + √b)) →
    assert(√d + √b = (d - b)/(√d - √b) ∈ ℚ) →
    assert(2√b = (√d + √b) - (√d - √b) ∈ ℚ) →
    assert(√b ∈ ℚ) →
    contradiction(√b ∉ ℚ)
  } →

  apply(Contradiction()) →
  assert(b = d) →
  assert(a - c = √d - √b = 0) →
  assert(a = c) →
  conclude((a = c ∧ b = d))
}