theorem BetweenTwoRealsExistsRational() {
  assert(
    ∀a,b ∈ ℝ: (a < b) ⇒ (∃r ∈ ℚ: a < r < b)
  )
} ↔

proof BetweenTwoRealsExistsRational() {
  setVar(a,b: ℝ) →
  assume(a < b) →
  assert(b - a ≠ 0) →
  assert(1/(b - a) ∈ ℝ) →
  
  lemma ArchimedesApplication() {
    assert(∃n ∈ ℕ: n > 1/(b - a))
  } →
  
  setVar(n: ℕ | n > 1/(b - a)) →
  define(M := {x ∈ ℤ | x > an}) →
  
  lemma SmallestElement() {
    assert(∃m ∈ ℤ: (m ∈ M) ∧ (∀k ∈ M: m ≤ k))
  } →
  
  setVar(m: ℤ | (m ∈ M) ∧ (∀k ∈ M: m ≤ k)) →
  assert(m > an) →
  assert(m - 1 ≤ an) →
  
  lemma OrderingOfReciprocals() {
    assert(n > 1/(b - a) ⇒ 1/n < b - a)
  } →
  
  assert(m - 1 ≤ an) →
  assert(m ≤ an + 1) →
  assert(m/n ≤ a + 1/n) →
  assert(a + 1/n < a + (b - a)) →
  assert(a + (b - a) = b) →
  
  conclude(a < m/n < b) →
  setVar(r := m/n) →
  assert(r ∈ ℚ) →
  conclude(∃r ∈ ℚ: a < r < b)
}

corollary RealNumbersDenselyOrdered() {
  assert(
    ∀a,b ∈ ℝ: (a < b) ⇒ (∃c ∈ ℝ: a < c < b)
  )
}