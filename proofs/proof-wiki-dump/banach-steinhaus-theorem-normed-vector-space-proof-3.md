theorem Banach_Steinhaus() {
  let X: BanachSpace,
  let Y: NormedVectorSpace,
  let T_α: BoundedLinearTransformation(X → Y, α ∈ A)
  assert(
    (∀x ∈ X: sup{α∈A} ||T_α(x)||_Y < ∞) →
    (sup{α∈A} ||T_α|| < ∞)
  )
} ↔

proof Banach_Steinhaus() {
  lemma SufficientCondition() {
    assert(
      ∃x₀ ∈ X, ∃r ∈ ℝ₊: 
      K := sup{x∈Br(x₀)} sup{α∈A} ||T_α(x)||_Y < ∞
    )
  } →

  lemma NormBound() {
    assert(
      ∀x ∈ X\{0}, ∀α ∈ A:
      (r/2)(||T_α(x)||_Y/||x||_X) = 
      ||T_α(x₀ + (r/(2||x||_X))x) - T_α(x₀)||_Y ≤
      ||T_α(x₀ + (r/(2||x||_X))x)||_Y + ||T_α(x₀)||_Y ≤ 2K
    ) →
    conclude(||T_α|| ≤ 4K/r)
  } →

  proof_by_contradiction() {
    assume(
      ∀x₀ ∈ X, ∀r ∈ ℝ₊:
      sup{x∈Br(x₀)} sup{α∈A} ||T_α(x)||_Y = ∞
    ) →
    
    construct_sequence() {
      assert(
        ∃{Br_k(xk)}k∈ℕ, ∃{αk}k∈ℕ ⊆ A:
        (Br₁(x₁) ⊇ Br₂(x₂) ⊇ ...) ∧
        (∀k: inf{x∈Br_k(xk)} ||T_αk(x)||_Y ≥ k) ∧
        (∀k: 0 < rk < 1/k)
      )
    } →

    lemma CauchySequence() {
      assert(
        ∀N ∈ ℕ₊, ∀k,l ≥ N:
        ||xk - xl||_X ≤ 2rN ≤ 2/N
      )
    } →

    setVar(z := lim{k→∞} xk) →
    assert(z ∈ ⋂{k∈ℕ₊} cl(Br_k(xk))) →
    assert(∀k ∈ ℕ₊: ||T_αk(z)||_Y ≥ k) →
    conclude(sup{α∈A} ||T_α(z)||_Y = ∞) →
    contradiction()
  }
}