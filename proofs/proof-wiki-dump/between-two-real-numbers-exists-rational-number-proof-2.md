theorem Between_Two_Reals_Exists_Rational() {
  assert(
    ∀a,b ∈ ℝ: (a < b) → ∃r ∈ ℚ: (a < r < b)
  )
} ↔

proof Between_Two_Reals_Exists_Rational() {
  setVar(a,b: ℝ) →
  assume(a < b) →
  assert(a ≠ b ∧ b - a ≠ 0) →
  assert(1/(b-a) ∈ ℝ) →
  
  lemma Archimedean_Property() {
    assert(∀x ∈ ℝ⁺ → ∃n ∈ ℕ: n > x)
  } →
  
  apply(Archimedean_Property(), x = 1/(b-a)) →
  assert(∃n ∈ ℕ: n > 1/(b-a)) →
  
  define(M = {x ∈ ℤ: x > an}) →
  
  lemma Integers_Bounded_Below() {
    assert(∀S ⊆ ℤ: (S ≠ ∅ ∧ S bounded below) → ∃m ∈ S: ∀x ∈ S: m ≤ x)
  } →
  
  apply(Integers_Bounded_Below(), S = M) →
  assert(∃m ∈ ℤ: (m > an ∧ m-1 ≤ an)) →
  
  assert(n > 1/(b-a) → 1/n < b-a) →
  assert(m-1 ≤ an → m ≤ an + 1) →
  assert(m ≤ an + 1 → m/n ≤ a + 1/n) →
  assert(1/n < b-a → a + 1/n < a + (b-a)) →
  assert(a + (b-a) = b) →
  
  therefore(a < m/n < b) →
  setVar(r = m/n) →
  assert(r ∈ ℚ ∧ a < r < b) →
  conclude(∃r ∈ ℚ: a < r < b)
}