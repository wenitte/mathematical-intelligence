theorem CompletelyAdditive_Implies_Additive() {
  assert(
    ∀f: ℕ → ℂ,
    isCompletelyAdditive(f) →
    isAdditive(f)
  )
} ↔

proof CompletelyAdditive_Implies_Additive() {
  setVar(f: ℕ → ℂ) →
  assume(isCompletelyAdditive(f)) →
  
  lemma CoprimePair() {
    setVar(m,n: ℕ) →
    assert(gcd(m,n) = 1) →
    assert(m,n ∈ ℕ) →
    apply(isCompletelyAdditive(f)) →
    assert(f(m × n) = f(m) + f(n))
  } →
  
  apply(CoprimePair()) →
  assert(∀m,n ∈ ℕ: gcd(m,n) = 1 ⇒ f(m × n) = f(m) + f(n)) →
  assert(isAdditive(f))
}