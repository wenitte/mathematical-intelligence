theorem Cartesian_Product_Intervals_Simply_Connected() {
  let(n: ℕ) →
  assert(
    ∀k ∈ {1,...,n} →
    ∃Iₖ: RealInterval ∧
    let(τ₀: SubspaceTopology(I₁ × ... × Iₙ, ℝⁿ)) →
    isSimplyConnected(⟨I₁ × ... × Iₙ, τ₀⟩)
  )
} ↔

proof Cartesian_Product_Intervals_Simply_Connected() {
  reference(Cartesian_Product_Intervals_Convex) →
  lemma L1() {
    assert(isConvex(I₁ × ... × Iₙ))
  } →
  reference(Convex_Set_Simply_Connected) →
  lemma L2() {
    assert(
      isConvex(X) → isSimplyConnected(X)
    )
  } →
  apply(L1()) →
  apply(L2()) →
  assert(isSimplyConnected(⟨I₁ × ... × Iₙ, τ₀⟩))
}