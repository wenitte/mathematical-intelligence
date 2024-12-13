theorem BijectiveIntegersEvenIntegers() {
  assert(
    ∃f: ℤ → 2ℤ ∧ isBijective(f)
  )
} ↔

proof BijectiveIntegersEvenIntegers() {
  setMap(f: ℤ → 2ℤ) →
  define(f(n) = 2n, ∀n ∈ ℤ) →
  
  // Prove injection
  lemma Injection() {
    setVar(m,n: ℤ) →
    assert(f(m) = f(n)) →
    assert(2m = 2n) →
    assert(m = n) by divisionBothSides(2)
  } →
  
  // Prove surjection
  lemma Surjection() {
    setVar(n: 2ℤ) →
    assert(∃r ∈ ℤ: n = 2r) by evenIntegerDefinition() →
    assert(n = f(r)) by definition(f) →
    assert(∀n ∈ 2ℤ, ∃r ∈ ℤ: n = f(r))
  } →

  apply(Injection()) →
  apply(Surjection()) →
  assert(isInjective(f) ∧ isSurjective(f)) →
  assert(isBijective(f)) by bijectiveDefinition()
}