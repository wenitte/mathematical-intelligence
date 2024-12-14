theorem Composite_Has_Prime_Factor() {
  assert(
    ∀a ∈ ℤ: isComposite(a) → 
    ∃p ∈ ℤ: (isPrime(p) ∧ p|a)
  )
} ↔

proof Composite_Has_Prime_Factor() {
  setVar(a: ℤ, isComposite(a)) →
  
  lemma First_Divisor() {
    assert(∃b ∈ ℤ: b|a) by defComposite()
  } →

  branch {
    case isPrime(b): {
      assert(∃p = b: isPrime(p) ∧ p|a)
    }
    case isComposite(b): {
      assert(∃c ∈ ℤ: c|b) by defComposite() →
      assert(c|b ∧ b|a → c|a) by transitivityDivides() →
      assert(c < b) by defDivisor()
    }
  } →

  lemma Infinite_Descent() {
    assert(¬(∃{xᵢ}ᵢ₌₁^∞ ∈ ℤ: 
      ∀i ∈ ℕ: xᵢ|a ∧ xᵢ₊₁ < xᵢ)) by wellOrdering()
  } →

  assert(∃p ∈ ℤ: isPrime(p) ∧ p|a) by contradiction(Infinite_Descent())
}