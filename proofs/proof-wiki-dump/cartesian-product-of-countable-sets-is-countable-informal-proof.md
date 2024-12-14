theorem CartesianProduct_Countable() {
  assert(
    ∀S,T[isCountable(S) ∧ isCountable(T) → isCountable(S × T)]
  )
} ↔

proof CartesianProduct_Countable() {
  setVar(S: Set, T: Set) →
  assume(isCountable(S) ∧ isCountable(T)) →
  assert(∃{s₀,s₁,s₂,...} ∈ S ∧ ∃{t₀,t₁,t₂,...} ∈ T) →
  
  lemma FiniteCase() {
    assert(
      [isFinite(S) ∧ isFinite(T)] → isCountable(S × T)
    )
  } →

  lemma InfiniteCase() {
    assert(
      constructTable(S,T) ↔ {
        (s₀,t₀) (s₀,t₁) (s₀,t₂) ...
        (s₁,t₀) (s₁,t₁) (s₁,t₂) ...
        (s₂,t₀) (s₂,t₁) (s₂,t₂) ...
        ...     ...     ...     ⋱
      }
    ) →
    assert(
      ∃f:ℕ→(S×T)[
        f(0) = (s₀,t₀) ∧
        f(1) = (s₀,t₁) ∧ f(2) = (s₁,t₀) ∧
        f(3) = (s₀,t₂) ∧ f(4) = (s₁,t₁) ∧ f(5) = (s₂,t₀) ∧
        ∀x∈(S×T)∃n∈ℕ[f(n)=x]
      ]
    )
  } →

  apply(FiniteCase()) →
  apply(InfiniteCase()) →
  
  assert(
    [∃f:ℕ→(S×T)] ↔ isCountable(S × T)
  )
}