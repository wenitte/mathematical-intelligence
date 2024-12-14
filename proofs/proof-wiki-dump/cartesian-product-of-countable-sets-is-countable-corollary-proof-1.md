theorem CartesianProduct_Countable_k_Sets() {
  assume(k ∈ ℤ ∧ k > 1) →
  assert(
    ∀S₁,S₂,...,Sₖ [
      (∀i ∈ {1,...,k}: Sᵢ is countable) →
      (S₁ × S₂ × ... × Sₖ is countable)
    ]
  )
}

proof CartesianProduct_Countable_k_Sets() {
  setVar(k: ℤ, k > 1) →
  setVar(S₁,S₂,...,Sₖ: Sets) →
  
  lemma CountableSetInjection() {
    assert(
      ∀i ∈ {1,...,k} ∃fᵢ: Sᵢ → ℕ
      [fᵢ is injective]
    )
  } →

  define(g: S₁ × S₂ × ... × Sₖ → ℕᵏ) {
    g(x₁,x₂,...,xₖ) = (f₁(x₁),f₂(x₂),...,fₖ(xₖ))
    where xᵢ ∈ Sᵢ
  } →
  
  assert(g is injective) →
  
  setVar(p₁,p₂,...,pₖ: first k prime numbers) →
  
  define(f: ℕᵏ → ℕ) {
    f(n₁,n₂,...,nₖ) = p₁^(n₁) × p₂^(n₂) × ... × pₖ^(nₖ)
  } →
  
  lemma FundamentalTheoremArithmetic() {
    assert(f is injective)
  } →
  
  lemma CompositeInjection() {
    assert(
      (f is injective ∧ g is injective) →
      (f ∘ g is injective)
    )
  } →
  
  conclude(
    ∃h: S₁ × S₂ × ... × Sₖ → ℕ
    [h = f ∘ g ∧ h is injective] →
    S₁ × S₂ × ... × Sₖ is countable
  )
}