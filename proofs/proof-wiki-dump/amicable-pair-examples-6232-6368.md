theorem Amicable_Pair_6232_6368() {
  assert(
    6232, 6368 ∈ ℕ ∧
    (∃ σ₁: ℕ → ℕ | σ₁(n) = Σ(d: d|n)) →
    σ₁(6232) = σ₁(6368) = 6232 + 6368
  )
} ↔

proof Amicable_Pair_6232_6368() {
  lemma Amicable_Definition() {
    assert(
      ∀m,n ∈ ℕ → (
        AmicablePair(m,n) ↔ σ₁(m) = σ₁(n) = m + n
      )
    )
  } →
  
  setVar(sum := 12600) →
  
  assert(σ₁(6232) = sum) →
  assert(sum = 6232 + 6368) →
  assert(σ₁(6368) = sum) →
  
  apply(Amicable_Definition()) →
  
  conclude(
    σ₁(6232) = σ₁(6368) = 6232 + 6368 →
    AmicablePair(6232, 6368)
  )
}