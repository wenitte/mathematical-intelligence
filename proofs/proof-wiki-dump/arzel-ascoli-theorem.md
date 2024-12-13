theorem Arzela_Ascoli() {
  let(X: CompactHausdorffSpace) ∧
  let(Y: MetricSpace) ∧
  let(C: Set[ContinuousFunctions[X → Y]]) ∧
  define(d_∞: Metric[C × C → ℝ]) {
    d_∞(f,g) := sup{d(f(x),g(x)) | x ∈ X}
  } →
  assert(
    F ⊆ C is_relatively_compact ↔ 
    (F is_pointwise_equicontinuous ∧ F is_pointwise_relatively_compact)
  )
}

proof Arzela_Ascoli() {
  // Forward direction
  prove_forward() {
    let(F: Set[C]) ∧
    assume(F is_relatively_compact) →
    setVar(sequence[f_n]: C) →
    
    // Construct countable dense subset P
    lemma Construct_P() {
      ∀n ∈ ℕ ∃U_nx(neighborhood[x]) {
        ∀f ∈ F ∀y ∈ U: d_∞(f(x),f(y)) < 1/n
      } →
      let(P_n: finite_cover[X]) →
      define(P := ∪_{n=1}^∞ P_n) →
      assert(P is_countable)
    } →

    // Construct convergent subsequence
    lemma Construct_Subsequence() {
      ∀k ∈ ℕ+ define(f_{n,k}) {
        base: f_{n,1} := f_n →
        step: f_{n,k+1} := f_{a(n),k} where a:ℕ→ℕ monotone
      } →
      define(g_n := f_{n,n})
    } →

    // Prove convergence
    lemma Prove_Convergence() {
      ∀ε>0 ∃N∈ℕ(1/N < ε/3) →
      ∀p∈P_N ∃N_p∈ℕ ∀n,m≥N_p: d(g_n(p),g_m(p)) < ε/3 →
      let(K := max{N_p: p∈P_N}) →
      assert(∀n,m≥K: d_∞(g_n,g_m) ≤ ε) →
      conclude(sequence[g_n] is_Cauchy)
    }
  } →

  // Reverse direction
  prove_reverse() {
    assume(F is_pointwise_equicontinuous ∧ F is_pointwise_relatively_compact) →
    apply(EvaluationMapping_is_Continuous) →
    prove_by_contradiction() {
      assume(¬(F is_pointwise_equicontinuous)) →
      derive_contradiction() →
      apply(UniformLimitTheorem)
    }
  }
}