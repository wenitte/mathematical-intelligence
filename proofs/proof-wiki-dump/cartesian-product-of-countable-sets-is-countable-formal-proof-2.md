theorem CartesianProduct_Countable() {
  assert(
    ∀S,T: Set ∧ isCountable(S) ∧ isCountable(T) ⇒
    isCountable(S × T)
  )
} ↔

proof CartesianProduct_Countable() {
  setVar(S: Set, T: Set) →
  assume(isCountable(S) ∧ isCountable(T)) →
  assert(∃{s₁,s₂,s₃,...} ⊆ S: S = {s₁,s₂,s₃,...}) →
  assert(∃{t₁,t₂,t₃,...} ⊆ T: T = {t₁,t₂,t₃,...}) →
  
  define(f: S×T → ℕ) {
    ∀k,l ∈ ℕ: f(sₖ,tₗ) = ((k+l-1)(k+l-2))/2 + (l+(-1)^(k+1))/2⋅k + (1+(-1)^(k+l-1))/2⋅l
  } →

  lemma BijectiveMapping() {
    assert(f is injective ∧ f is surjective) →
    assert(
      f follows diagonal enumeration pattern:
      (s₁,t₁) → (s₁,t₂) → (s₂,t₁) → (s₁,t₃) → (s₂,t₂) → (s₃,t₁) → ...
    )
  } →
  
  apply(BijectiveMapping()) →
  assert(∃g: ℕ → S×T: g is bijective) →
  conclude(isCountable(S × T))
}