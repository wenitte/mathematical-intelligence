theorem RationalBetweenReals() {
  assert(
    ∀a,b ∈ ℝ : a < b ⇒ ∃r ∈ ℚ : a < r < b
  )
} ↔

proof RationalBetweenReals() {
  case a ≥ 0 {
    setVar(a,b: ℝ) →
    assert(a < b ⇒ b - a ≠ 0) →
    assert(1/(b-a) ∈ ℝ) →
    
    lemma Archimedean() {
      assert(∃n ∈ ℕ : n > 1/(b-a))
    } →
    
    defineSet(M := {x ∈ ℕ : x/n > a}) →
    applyWellOrdering(M) →
    assert(∃m ∈ ℕ : m = min(M)) →
    
    assert(m > an) ∧
    assert(m-1 ≤ an) →
    
    assert(1/n < b-a) →
    assert(m-1 ≤ an ⇒ m ≤ an + 1) →
    assert(m/n ≤ a + 1/n) →
    assert(a + 1/n < a + (b-a)) →
    assert(a + (b-a) = b) →
    
    conclude(a < m/n < b ∧ m/n ∈ ℚ)
  } →

  case a < 0 ∧ b > 0 {
    assert(0 ∈ ℚ ∧ a < 0 < b)
  } →

  case a < b ≤ 0 {
    assert(0 ≤ -b < -a) →
    applyCase1(-b, -a) →
    assert(∃r ∈ ℚ : -b < r < -a) →
    conclude(a < -r < b)
  }
}