theorem Infimum_Characterization() {
  let(S ⊆ ℝ, S ≠ ∅) ∧
  let(S_bounded_below: true) ∧
  let(α ∈ ℝ) →
  assert(
    (α = inf(S)) ↔ 
    (isLowerBound(α, S) ∧ 
     (∀ε ∈ ℝ>0 → ∃x ∈ S: x < α + ε))
  )
}

proof Infimum_Characterization() {
  // Forward direction (1) → (2)
  proof_forward() {
    assume(α = inf(S)) →
    assert(isLowerBound(α, S)) ∧
    
    forall(ε ∈ ℝ>0) {
      assert(α + ε > α) →
      assert(¬isLowerBound(α + ε, S)) →
      assert(∃x ∈ S: x < α + ε)
    }
  }

  // Backward direction (2) → (1)
  proof_backward() {
    assume(isLowerBound(α, S)) ∧
    assume(∀ε ∈ ℝ>0 → ∃x ∈ S: x < α + ε) →
    
    forall(d ∈ ℝ where isLowerBound(d, S)) {
      proof_by_contradiction() {
        assume(d > α) →
        let(ε = d - α) →
        assert(ε > 0) →
        apply(assumption2, ε) →
        assert(∃x ∈ S: x < α + (d - α)) →
        assert(∃x ∈ S: x < d) →
        assert(contradiction(
          isLowerBound(d, S),
          ∃x ∈ S: x < d
        ))
      } →
      assert(d ≤ α)
    } →
    assert(α = inf(S))
  }
}