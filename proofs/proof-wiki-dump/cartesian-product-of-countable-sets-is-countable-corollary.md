theorem Cartesian_Product_k_Countable_Sets() {
  assert(
    ∀k ∈ ℤ, k > 1 ⇒
    ∀S₁,...,Sₖ[countable(S₁) ∧ ... ∧ countable(Sₖ) ⇒ 
      countable(S₁ × S₂ × ... × Sₖ)]
  )
}

proof Cartesian_Product_k_Countable_Sets_Direct() {
  setVar(k: ℤ, k > 1) →
  setVar(S₁,...,Sₖ: Set) →
  assert(∀i ∈ {1,...,k} ∃fᵢ: Sᵢ → ℕ[injective(fᵢ)]) →
  define(g: S₁×...×Sₖ → ℕᵏ) {
    g(x₁,...,xₖ) = (f₁(x₁),...,fₖ(xₖ))
  } →
  assert(injective(g)) →
  setVar(p₁,...,pₖ: prime_numbers[1..k]) →
  define(f: ℕᵏ → ℕ) {
    f(n₁,...,nₖ) = p₁^n₁ × ... × pₖ^nₖ
  } →
  lemma Fund_Theorem_Arithmetic() {
    assert(injective(f))
  } →
  apply(Composite_Injections_Is_Injection(f,g)) →
  assert(injective(f∘g)) →
  assert(countable(S₁×...×Sₖ))
}

proof Cartesian_Product_k_Countable_Sets_Inductive() {
  // Base case
  assert(k = 2 ⇒ countable(S₁×S₂)) →
  
  // Inductive hypothesis
  setVar(k: ℤ, k ≥ 2) →
  assume(∃fₖ: S₁×...×Sₖ → ℕ[injective(fₖ)]) →
  
  // Inductive step
  assert(countable(S₁×...×Sₖ)) →
  assert(countable(Sₖ₊₁)) →
  define(g: (S₁×...×Sₖ)×Sₖ₊₁ → ℕ×ℕ) →
  assert(injective(g)) →
  lemma Countable_Pairs() {
    assert(∃r: ℕ×ℕ → ℕ[injective(r)])
  } →
  define(fₖ₊₁: S₁×...×Sₖ×Sₖ₊₁ → ℕ) {
    fₖ₊₁ = r∘g
  } →
  apply(Composite_Injections_Is_Injection(r,g)) →
  assert(injective(fₖ₊₁)) →
  assert(∀k > 1: countable(S₁×...×Sₖ))
}