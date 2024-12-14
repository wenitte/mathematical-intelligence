theorem BanachSpaceInjective() {
  let X, Y be BanachSpace
  let T: X → Y be BoundedLinearTransformation
  assert(
    (T.isInjective ∧ T.image.isClosed) ↔
    (∃c > 0, ∀x ∈ X: ∥T(x)∥_Y ≥ c∥x∥_X)
  )
}

proof BanachSpaceInjective() {
  // Sufficient condition (→)
  block SufficientCondition {
    assume(∃c > 0, ∀x ∈ X: ∥T(x)∥_Y ≥ c∥x∥_X) →
    
    // Show injection
    block ProveInjective {
      setVar(x ∈ X) →
      assume(T(x) = 0_Y) →
      assert(c∥x∥_X ≤ 0) →
      assert(c > 0 ∧ ∥x∥_X ≥ 0) →
      assert(∥x∥_X = 0) →
      apply(NormAxiom_N1) →
      assert(x = 0_X) →
      conclude(T.isInjective)
    }

    // Show closed image
    block ProveClosed {
      setVar(y_n: sequence(Y)) →
      assume(y_n ∈ T.image ∧ y_n → y) →
      setVar(x_n: sequence(X), ∀n: y_n = T(x_n)) →
      assert(∥x_n - x_m∥_X ≤ c⁻¹∥T(x_n) - T(x_m)∥_Y) →
      assert(∥x_n - x_m∥_X ≤ c⁻¹∥y_n - y_m∥_Y) →
      
      lemma SequenceCauchy {
        setVar(ε > 0) →
        assert(∃N ∈ ℕ, ∀n,m ≥ N: ∥y_n - y_m∥_Y < cε) →
        assert(∀n,m ≥ N: ∥x_n - x_m∥_X < ε)
      } →
      
      apply(BanachSpaceComplete) →
      assert(∃x ∈ X: x_n → x) →
      apply(ContinuousMapping) →
      assert(T(x_n) → T(x)) →
      assert(y = T(x)) →
      conclude(T.image.isClosed)
    }
  }

  // Necessary condition (←)
  block NecessaryCondition {
    assume(T.isInjective ∧ T.image.isClosed) →
    assert(T: X ↔ T.image is LinearIsomorphism) →
    apply(ClosedSubspaceBanach) →
    apply(BanachIsomorphismTheorem) →
    assert(∃M > 0, ∀y ∈ T.image: ∥T⁻¹(y)∥_X ≤ M∥y∥_Y) →
    setVar(x ∈ X) →
    assert(∥x∥_X ≤ M∥T(x)∥_Y) →
    conclude(∥T(x)∥_Y ≥ M⁻¹∥x∥_X)
  }
}