theorem Binomial_Coefficient_Prime() {
  assert(
    ∀p ∈ ℕ (isPrime(p) → 
      (∀k ∈ ℤ ((0 < k < p) → 
        (⌈p k⌉ ≡ 0 (mod p))
      ))
    )
  )
} ↔

proof Binomial_Coefficient_Prime() {
  setVar(p: ℕ, isPrime(p)) →
  setVar(k: ℤ, 0 < k < p) →
  
  lemma Lucas_Theorem() {
    assert(
      ∀n,k ∈ ℕ (
        ⌈n k⌉ ≡ ⌈⌊n/p⌋ ⌊k/p⌋⌉ × ⌈(n mod p) (k mod p)⌉ (mod p)
      )
    )
  } →

  apply(Lucas_Theorem(), n ← p) →
  assert(⌈p k⌉ ≡ ⌈⌊p/p⌋ ⌊k/p⌋⌉ × ⌈(p mod p) (k mod p)⌉ (mod p)) →
  
  lemma Mod_Properties() {
    assert(p mod p = 0) ∧
    assert((0 < k < p) → (k mod p ≠ 0))
  } →
  
  apply(Mod_Properties()) →
  assert(⌈(p mod p) (k mod p)⌉ = ⌈0 (k mod p)⌉) →
  assert(⌈0 (k mod p)⌉ = 0) →
  
  conclude(⌈p k⌉ ≡ 0 (mod p))
}