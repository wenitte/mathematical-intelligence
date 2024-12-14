theorem CartesianProduct_Countable() {
  assert(
    ∀S,T[Countable(S) ∧ Countable(T) → Countable(S × T)]
  )
} ↔

proof CartesianProduct_Countable() {
  setVar(S: Set, T: Set) →
  assume(Countable(S) ∧ Countable(T)) →
  
  lemma FiniteCase() {
    assert(
      Finite(S) ∧ Finite(T) → Countable(S × T)
    )
  } →

  lemma CountableEnumeration() {
    assert(
      ∃{s₀,s₁,...} ∈ S, ∃{t₀,t₁,...} ∈ T →
      S × T = {(sᵢ,tⱼ) | i,j ∈ ℕ}
    )
  } →

  lemma DiagonalMapping() {
    setVar(f: S×T → ℕ) →
    assert(
      f((sₖ,tₗ)) = ((k+l-1)(k+l-2))/2 + (l+(-1)^(k+1))/2⋅k + (1+(-1)^(k+l-1))/2⋅l
    ) →
    assert(Injective(f))
  } →

  apply(DiagonalMapping()) →
  assert(∃f: S×T → ℕ [Injective(f)]) →
  conclude(Countable(S × T))
} ↔

corollary CartesianProduct_k_Countable() {
  assert(
    ∀k∈ℕ[k>1 → ∀Sᵢ(1≤i≤k)[Countable(Sᵢ) → Countable(S₁×S₂×...×Sₖ)]]
  )
} ↔

proof CartesianProduct_k_Countable() {
  setVar(k: ℕ) →
  assume(k > 1) →
  induct(k) {
    base: apply(CartesianProduct_Countable()) →
    step: assume(Countable(S₁×...×Sₙ)) →
          apply(CartesianProduct_Countable()) →
          conclude(Countable(S₁×...×Sₙ₊₁))
  } →
  conclude(∀k>1[Countable(S₁×S₂×...×Sₖ)])
}