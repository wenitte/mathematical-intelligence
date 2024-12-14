theorem Cartesian_Product_Countable() {
  assert(
    ∀S,T | (isCountable(S) ∧ isCountable(T)) → isCountable(S × T)
  )
} ↔

proof Cartesian_Product_Countable() {
  setVar(S: Set, T: Set) →
  assume(isCountable(S) ∧ isCountable(T)) →
  
  lemma Countable_To_Natural() {
    assert(∃h₁: S → ℕ, h₂: T → ℕ | isInjective(h₁) ∧ isInjective(h₂))
  } →
  
  define(g: S × T → ℕ², g = (h₁, h₂)) →
  assert(isInjective(g)) →
  
  lemma Prime_Decomposition() {
    assert(∀n ∈ ℕ, n > 1 → ∃!p₁,...,pₖ | n = p₁ᵃ¹...pₖᵃᵏ)
  } →
  
  define(f: ℕ² → ℕ, f(n,m) = 2ⁿ3ᵐ) →
  
  lemma Injection_F() {
    assert(
      ∀n,m,r,s ∈ ℕ | f(n,m) = f(r,s) → (n = r ∧ m = s)
    ) →
    conclude(isInjective(f))
  } →
  
  apply(Composite_Injections_Theorem()) →
  assert(isInjective(f ∘ g)) →
  
  define(h: S × T → ℕ, h = f ∘ g) →
  assert(isInjective(h)) →
  conclude(isCountable(S × T))
}