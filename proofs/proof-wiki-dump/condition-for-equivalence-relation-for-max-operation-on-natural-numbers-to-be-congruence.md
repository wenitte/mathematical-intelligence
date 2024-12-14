theorem EquivalenceRelation_MaxCongruence() {
  assert(
    ∀R[R is equivalence relation on ℕ] ∧
    ∀a,b ∈ ℕ[a ∨ b := max{a,b}] →
    (R is congruence relation for ∨ on ℕ ↔ 
     ∀C[C is equivalence class under R → C is convex subset of ℕ])
  )
}

proof EquivalenceRelation_MaxCongruence() {
  // Necessary condition
  proof NecessaryCondition() {
    assume(∀C[C is equivalence class under R → C is convex subset of ℕ]) →
    setVar(x₁,x₂,y₁,y₂ ∈ ℕ) →
    assume(x₁ R x₂ ∧ y₁ R y₂) →
    assume(x₁ ≤ x₂ ∧ y₁ ≤ y₂ ∧ x₁ ≤ y₁) →

    case1(y₁ ≤ x₂) {
      assert(x₁ ≤ y₁ ≤ x₂) →
      apply(ConvexSubset(x₁,x₂)) →
      assert(y₁ ∈ [x₁]ᴿ) →
      assert([x₁]ᴿ = [y₁]ᴿ) →
      assert((x₁ ∨ y₁) R (x₂ ∨ y₂))
    }

    case2(x₂ ≤ y₁) {
      assert(x₁ ≤ x₂ ≤ y₁ ≤ y₂) →
      assert(x₁ ∨ y₁ = y₁) →
      assert(x₂ ∨ y₂ = y₂) →
      assert(y₁ R y₂) →
      assert((x₁ ∨ y₁) R (x₂ ∨ y₂))
    }

    conclude(R is congruence relation for ∨ on ℕ)
  }

  // Sufficient condition
  proof SufficientCondition() {
    assume(R is congruence relation for ∨ on ℕ) →
    setVar(x,y,z ∈ ℕ) →
    assume(x,z ∈ [z]ᴿ ∧ x ≤ y ≤ z) →
    assert(x R z) →
    assert(y R y) by ReflexiveProperty →
    assert((x ∨ y) R (z ∨ y)) by CongruenceProperty →
    assert(y R z) by MaxOperation →
    assert(y ∈ [z]ᴿ) →
    conclude(∀C[C is equivalence class under R → C is convex subset of ℕ])
  }
}