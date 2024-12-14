theorem ClosureBallEquivalence() {
  assert(
    ∀(M: MetricSpace) ↔ [
      (∀x ∈ X, ∀r > 0: cl(B_r(x)) = B_r⁻(x)) ↔
      (∀ε > 0, ∀x,y ∈ X, x ≠ y → ∃z ∈ X: d(z,y) < ε ∧ d(x,z) < d(x,y))
    ]
  )
}

proof ClosureBallEquivalence() {
  // Forward direction (1) → (2)
  proof Forward() {
    assume(∀x ∈ X, ∀r > 0: cl(B_r(x)) = B_r⁻(x)) →
    setVar(ε > 0) →
    setVar(x,y ∈ X, x ≠ y) →
    setVar(r = d(x,y)) →
    assert(y ∈ cl(B_r(x))) →
    apply(ClosureDef()) →
    assert(B_ε(y) ∩ B_r(x) ≠ ∅) →
    setVar(z ∈ B_ε(y) ∩ B_r(x)) →
    conclude(d(z,y) < ε ∧ d(x,z) < d(x,y))
  }

  // Reverse direction (2) → (1)
  proof Backward() {
    assume(∀ε > 0, ∀x,y ∈ X, x ≠ y → ∃z: d(z,y) < ε ∧ d(x,z) < d(x,y)) →
    setVar(x ∈ X, r > 0) →
    
    lemma SubsetOne() {
      assert(cl(B_r(x)) ⊆ B_r⁻(x))
    } →
    
    lemma SubsetTwo() {
      assert(B_r⁻(x) ⊆ cl(B_r(x))) →
      setVar(y ∈ X: d(x,y) = r) →
      setVar(ε > 0) →
      apply(Assumption) →
      assert(∃z: d(x,z) < r ∧ d(z,y) < ε) →
      assert(z ∈ B_ε(y) ∧ z ∈ B_r(x)) →
      assert(B_ε(y) ∩ B_r(x) ≠ ∅) →
      apply(ClosureDef()) →
      conclude(y ∈ cl(B_r(x)))
    } →
    
    apply(SubsetOne()) →
    apply(SubsetTwo()) →
    conclude(cl(B_r(x)) = B_r⁻(x))
  }
}