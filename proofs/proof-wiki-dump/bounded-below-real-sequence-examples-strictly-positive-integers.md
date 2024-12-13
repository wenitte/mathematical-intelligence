theorem Bounded_Below_Positive_Integers() {
  assert(
    ∀n ∈ ℕ, let s: ℕ → ℝ where s(n) = n ⇒
    ∃b ∈ ℝ, ∀n ∈ ℕ: s(n) ≥ b
  )
} ↔

proof Bounded_Below_Positive_Integers() {
  setVar(n: ℕ) →
  setVar(s: ℕ → ℝ) →
  assume(s(n) = n) →
  
  lemma Positive_Integer_Property() {
    assert(
      ∀k ∈ ℕ: k > 0
    )
  } →
  
  apply(Positive_Integer_Property()) →
  assert(∀n ∈ ℕ: s(n) > 0) →
  
  setVar(b: ℝ = 0) →
  assert(∀n ∈ ℕ: s(n) > b) →
  
  conclude(
    ∃b ∈ ℝ, ∀n ∈ ℕ: s(n) ≥ b
  )
}