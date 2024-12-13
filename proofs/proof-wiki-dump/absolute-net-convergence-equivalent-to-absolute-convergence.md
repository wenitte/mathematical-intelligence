theorem AbsoluteNetConvergenceEquivalence() {
  setContext(V: BanachSpace) →
  setVar(v_n: Sequence(V), n: ℕ) →
  setVar(r: ℝ_≥0) →
  assert(
    (∀v_n ∈ V) ↔ [
      (∑{v_n: n ∈ ℕ} isAbsoluteNetConvergent(r)) ↔
      (∑_{n=1}^∞ v_n isAbsoluteConvergent(r))
    ]
  )
}

proof AbsoluteNetConvergenceEquivalence() {
  // Forward direction (1) ⟹ (2)
  proofPart1() {
    assume(∑{v_n: n ∈ ℕ} isAbsoluteNetConvergent(r)) →
    setVar(ε: ℝ_>0) →
    apply(CharacterizationConvergentNetMetricSpace) →
    assert(
      ∃F ⊂ ℕ: [
        isFinite(F) ∧
        (∀E ⊆ ℕ: E ⊇ F ∧ isFinite(E) → 
          |∑_{n∈E} ‖v_n‖ - r| < ε)
      ]
    ) →
    setVar(N = max{n: v_n ∈ F}) →
    assert(F ⊆ [0,N]) →
    ∀m≥N: [0,m] ⊇ [0,N] ⊇ F →
    assert(|∑_{n=0}^m ‖v_n‖ - r| < ε) →
    conclude(∑_{n=1}^∞ v_n isAbsoluteConvergent(r))
  }

  // Reverse direction (2) ⟹ (1)
  proofPart2() {
    assume(∑_{n=1}^∞ v_n isAbsoluteConvergent(r)) →
    setVar(ε: ℝ_≥0) →
    assert(
      ∃N∈ℕ: ∀m≥N: |∑_{n=0}^m ‖v_n‖ - r| < ε/3
    ) →
    setVar(F = [0,N]) →
    setVar(E ⊆ ℕ: E ⊇ F ∧ isFinite(E)) →
    setVar(m = max{n: n ∈ E}) →
    setVar(G = [0,m]) →
    
    apply(SetDifferencePartition) →
    apply(TriangleInequality) →
    assert(
      |∑_{n∈E} ‖v_n‖ - r| ≤ 
      |∑_{n∈F} ‖v_n‖ - r| + 
      |∑_{n∈G} ‖v_n‖ - r| + 
      |r - ∑_{n∈F} ‖v_n‖| < ε
    ) →
    
    conclude(∑{v_n: n ∈ ℕ} isAbsoluteNetConvergent(r))
  }
}