theorem Bound_C0_Semigroup() {
  let(GF ∈ {ℝ, ℂ}) ∧
  let(X: BanachSpace(over: GF)) ∧
  let(T_t: C0Semigroup, t ≥ 0) ∧
  let(B(X): BoundedLinearTransformationSpace(norm: ∥·∥)) →
  assert(
    ∃M ≥ 1, ∃ω ≥ 0: ∀t ∈ [0,∞) → ∥T_t∥_B(X) ≤ M·e^(ωt)
  )
}

proof Bound_C0_Semigroup() {
  // Part 1: Prove boundedness on finite interval
  lemma Bounded_On_Interval() {
    assume(¬∃δ > 0: bounded(∥T_t∥_B(X) on [0,δ])) →
    assert(∀n ∈ ℕ: ∃t_n ∈ [0,1/n]: ∥T_t_n∥_B(X) ≥ n) →
    assert(sup{∥T_t_n∥_B(X): n ∈ ℕ} = ∞) →
    apply(PrincipleOfCondensationOfSingularities()) →
    assert(∃x ∈ X: sup{∥T_t_n·x∥: n ∈ ℕ} = ∞) ∧
    assert(lim(t→0⁺) T_t·x = x) ∧
    assert(lim(n→∞) t_n = 0) →
    apply(ConvergentSequenceBounded()) →
    assert(sup{∥T_t_n·x∥: n ∈ ℕ} < ∞) →
    contradiction()
  } →
  
  // Part 2: Establish bound on [0,δ]
  setVar(δ > 0, M ≥ 1: ∀t ∈ [0,δ] → ∥T_t∥_B(X) ≤ M) →
  
  // Part 3: Extend to general case
  let(t ≥ 0) →
  assert(∃N ∈ ℤ≥0, ∃r ∈ [0,δ): t = N·δ + r) →
  compute(
    ∥T_t∥_B(X) 
    = ∥T_(N·δ + r)∥_B(X)
    = ∥(T_δ)^N · T_r∥_B(X)
    ≤ ∥T_δ∥_B(X)^N · ∥T_r∥_B(X)
    ≤ M^(N+1)
    ≤ M·M^(t/δ)
    = M·e^((t/δ)·log(M))
  ) →
  
  setVar(ω = (log(M))/δ) →
  assert(∀t ∈ [0,∞) → ∥T_t∥_B(X) ≤ M·e^(ωt))
}