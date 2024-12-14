theorem RingCharacteristic() {
  let R = ⟨R, +, ∘⟩ be finite ring with unity
  let 0_R be zero element
  let 1_R be unity element
  let n = Char(R) > 0
  assert(
    (n is prime) ∧
    (∀x ∈ R\{0_R}: order(x) = n) ∧
    (⟨R, +⟩ ≅ C_n)
  )
}

proof RingCharacteristic() {
  // Proof by contradiction for primality
  assume(¬(n is prime)) →
  setVar(r, s ∈ ℤ): n = rs ∧ r > 1 ∧ s > 1 →
  
  lemma ProductEquality() {
    assert((r·1_R) ∘ (s·1_R) = (rs)·1_R) →
    assert((r·1_R) ∘ (s·1_R) = n·1_R = 0_R)
  } →
  
  apply(ProductEquality()) →
  apply(NoZeroDivisors(R)) →
  assert((r·1_R = 0_R) ∨ (s·1_R = 0_R)) →
  assert(r < n ∧ s < n) →
  contradiction(MinimalityOf_n) →
  
  // Proof of order property
  setVar(x ∈ R\{0_R}) →
  apply(CharTimesElement): n·x = 0_R →
  assert(order(x) | n) →
  apply(PrimeProperty): order(x) ∈ {1, n} →
  apply(NullRingCharacteristic): order(x) ≠ 1 →
  assert(order(x) = n) →
  
  // Group isomorphism
  apply(CyclicGroupProperty) →
  assert(⟨R, +⟩ ≅ C_n)
}