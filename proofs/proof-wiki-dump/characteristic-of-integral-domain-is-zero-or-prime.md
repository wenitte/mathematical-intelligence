theorem CharacteristicOfIntegralDomain() {
  define(D: IntegralDomain, {+, ∘}) →
  define(CharD: ℕ₀, Characteristic(D)) →
  assert(
    CharD = 0 ∨ isPrime(CharD)
  )
} ↔

proof CharacteristicOfIntegralDomain() {
  define(IntegralDomain(D) ↔ ∀x,y ∈ D: (x∘y = 0 → x = 0 ∨ y = 0)) →
  
  cases {
    case isFinite(D) {
      apply(TheoremCharFiniteRingNoZeroDivisors(D)) →
      assert(isPrime(CharD))
    }
    
    case ¬isFinite(D) {
      assert(
        ∀x,y ∈ D: (x ≠ 0 ∧ y ≠ 0 → x + y ≠ 0)
      ) →
      lemma InfiniteImpliesCharZero() {
        assert(¬∃n ∈ ℕ: n > 0 ∧ n·1 = 0) →
        assert(CharD = 0)
      } →
      apply(InfiniteImpliesCharZero())
    }
  } →
  
  assert(CharD = 0 ∨ isPrime(CharD))
}