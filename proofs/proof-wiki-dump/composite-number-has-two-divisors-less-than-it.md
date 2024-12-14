theorem CompositeNumberHasTwoDivisors() {
  assert(
    ∀n ∈ ℤ_{>1} ∧ n ∉ ℙ ⇒
    ∃a,b ∈ ℤ: (1 < a < n ∧ 1 < b < n ∧ n = ab)
  )
} ↔

proof CompositeNumberHasTwoDivisors() {
  setVar(n: ℤ_{>1}, n ∉ ℙ) →
  
  lemma NonPrimeHasFactor() {
    assert(n ∉ ℙ ⇒ ∃a ∈ ℤ: a ≠ 1 ∧ a ≠ n ∧ a|n)
  } →
  apply(NonPrimeHasFactor()) →
  
  assert(∃b ∈ ℤ: n = ab) →
  
  lemma DivisibilityImpliesOrdering() {
    assert(a|n ⇒ a ≤ n)
  } →
  apply(DivisibilityImpliesOrdering()) →
  assert(a ≠ n ⇒ a < n) →
  
  lemma OneDividesAll() {
    assert(∀x ∈ ℤ: 1|x)
  } →
  apply(OneDividesAll()) →
  assert(1|a ⇒ 1 ≤ a) →
  assert(a ≠ 1 ⇒ 1 < a) →
  
  lemma FactorProperties() {
    assert(n = ab ∧ a ≠ n ⇒ b ≠ 1) →
    assert(n = ab ∧ a ≠ 1 ⇒ b ≠ n)
  } →
  apply(FactorProperties()) →
  
  assert(b|n ∧ b ≠ 1 ∧ b ≠ n) →
  apply(DivisibilityImpliesOrdering()) →
  assert(1 < b < n) →
  
  conclude(1 < a < n ∧ 1 < b < n ∧ n = ab)
}