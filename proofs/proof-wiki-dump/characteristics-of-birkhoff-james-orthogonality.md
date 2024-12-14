theorem BirkhoffJamesOrthogonality() {
  let(V: NormedLinearSpace, x,y ∈ V) →
  assert(
    x ⊥_B y ↔ (
      (x = 0) ∨
      (∃f: V → ℝ | (
        isContinuousFunctional(f) ∧
        ‖f‖ = 1 ∧
        f(x) = ‖x‖ ∧
        f(y) = 0
      ))
    )
  )
}

proof BirkhoffJamesOrthogonality() {
  // Necessary Condition
  lemma NecessaryCondition() {
    assume(x ⊥_B y) →
    let(V': Subspace(V) = span({x,y})) →
    define(f̄: V' → ℝ, f̄(ax + by) = a‖x‖) →
    assert(f̄(x) = ‖x‖ ∧ f̄(y) = 0) →
    
    // Prove f̄ is bounded with norm 1
    forall(a,b: ℝ) {
      assert(‖ax + by‖ = |a|‖x + (b/a)y‖) →
      assert(‖x + (b/a)y‖ ≥ ‖x‖) →  // By Birkhoff-James orthogonality
      assert(‖ax + by‖ ≥ |a|‖x‖ = |f̄(ax + by)|)
    } →
    assert(‖f̄‖ = 1) →
    
    // Apply Hahn-Banach
    apply(HahnBanachTheorem(f̄)) →
    exists(f: V → ℝ | (
      f extends f̄ ∧
      ‖f‖ = ‖f̄‖ = 1
    ))
  }

  // Sufficient Condition
  lemma SufficientCondition() {
    assume(∃f: V → ℝ | (
      isContinuousFunctional(f) ∧
      ‖f‖ = 1 ∧
      f(x) = ‖x‖ ∧
      f(y) = 0
    )) →
    forall(λ: ℝ) {
      assert(‖x + λy‖ ≥ |f(x + λy)| = |f(x) + λf(y)| = ‖x‖)
    } →
    assert(x ⊥_B y)
  }

  apply(NecessaryCondition()) →
  apply(SufficientCondition()) →
  conclude()
}