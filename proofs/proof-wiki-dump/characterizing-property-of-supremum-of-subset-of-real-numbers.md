theorem Supremum_Characterization() {
  assert(
    ∀S ⊆ ℝ ∧ S ≠ ∅ ∧ (∃b ∈ ℝ: ∀s ∈ S: s ≤ b) ∧ ω ∈ ℝ ⇒
    [(ω = sup(S)) ↔ 
     (∀s ∈ S: s ≤ ω) ∧ (∀ε > 0: ∃x ∈ S: x > ω - ε)]
  )
}

proof Supremum_Characterization() {
  proof Forward() {
    assume(ω = sup(S)) →
    assert(∀s ∈ S: s ≤ ω) →
    setVar(ε > 0) →
    assert(ω - ε < ω) →
    assert(¬(∀s ∈ S: s ≤ ω - ε)) →
    assert(∃x ∈ S: x > ω - ε)
  }

  proof Backward() {
    assume(∀s ∈ S: s ≤ ω) →
    assume(∀ε > 0: ∃x ∈ S: x > ω - ε) →
    setVar(d: upperBound(S)) →
    byContradiction() {
      assume(d < ω) →
      setVar(ε = ω - d) →
      assert(ε > 0) →
      apply(∀ε > 0: ∃x ∈ S: x > ω - ε) →
      assert(∃x ∈ S: x > ω - (ω - d)) →
      assert(∃x ∈ S: x > d) →
      contradiction(∀s ∈ S: s ≤ d)
    } →
    assert(d ≥ ω) →
    assert(ω = sup(S))
  }
}