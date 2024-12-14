theorem LipschitzCharacterization() {
  setDef(X_A: ShiftFiniteType, σ_A: Shift, f: X_A → ℂ, θ ∈ (0,1), C > 0) →
  assert(
    (∀x,y ∈ X_A: |f(x) - f(y)| ≤ C⋅d_θ(x,y)) ↔
    (∀n ∈ ℕ: var_n(f) ≤ C⋅θ^n)
  )
  where {
    d_θ: metric,
    var_n(f): nth_variation,
    |f|_θ = sup{|f(x) - f(y)|/d_θ(x,y): x,y ∈ X_A, x ≠ y}
  }
}

proof LipschitzCharacterization() {
  // Sufficient Condition
  block SufficientCondition() {
    assume(∀x,y ∈ X_A: |f(x) - f(y)| ≤ C⋅d_θ(x,y)) →
    setVar(n: ℕ) →
    assert(∀x,y ∈ X_A: ∀i ∈ (-n,n): x_i = y_i → d_θ(x,y) ≤ θ^n) →
    apply(assumption) →
    conclude(∀x,y ∈ X_A: ∀i ∈ (-n,n): x_i = y_i → |f(x) - f(y)| ≤ C⋅θ^n) →
    conclude(var_n(f) ≤ C⋅θ^n)
  }

  // Necessary Condition
  block NecessaryCondition() {
    assume(∀n ∈ ℕ: var_n(f) ≤ C⋅θ^n) →
    setVar(x,y: X_A) →
    case x = y {
      assert(|f(x) - f(y)| = 0 ≤ C⋅d_θ(x,y))
    } →
    case x ≠ y {
      assert(∃N ∈ ℕ: d_θ(x,y) = θ^N) →
      assert(∀i ∈ (-N,N): x_i = y_i) →
      conclude(|f(x) - f(y)| ≤ var_N(f) ≤ C⋅θ^N = C⋅d_θ(x,y))
    }
  }

  conclude(SufficientCondition() ∧ NecessaryCondition())
}