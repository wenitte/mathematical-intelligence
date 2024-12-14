theorem Convex_Absorbing_Set_Characterization() {
  let(𝔽 ∈ {ℝ,ℂ}) ∧
  let(X: VectorSpace(𝔽)) ∧
  let(C ⊆ X, C: Convex) →
  assert(
    C.isAbsorbing() ↔ (∀x ∈ X ∃t ∈ ℝ₊: x ∈ tC)
  )
}

proof Convex_Absorbing_Set_Characterization() {
  // Necessary condition
  proof Forward() {
    assume(C.isAbsorbing()) →
    assert(∀x ∈ X ∃s ∈ ℝ₊: ∀t ∈ ℂ (|t| ≥ s → x ∈ tC)) →
    conclude(∀x ∈ X ∃t ∈ ℝ₊: x ∈ tC)
  }

  // Sufficient condition
  proof Reverse() {
    assume(∀x ∈ X ∃t ∈ ℝ₊: x ∈ tC) →
    assert(∃t ∈ ℝ₊: 0_X ∈ tC) →
    assert(0_X ∈ C) →

    // Real case
    case(𝔽 = ℝ) {
      let(x ∈ X) →
      let(t₁,t₂ ∈ ℝ₊: x ∈ t₁C ∧ -x ∈ t₂C) →
      let(t = max{t₁,t₂}) →
      assert(∀i ∈ {1,2}: tᵢ/t ∈ [0,1]) →
      apply(Convex_Set_Dilation_Theorem()) →
      assert(∀i ∈ {1,2}: tᵢC ⊆ tC) →
      let(α ∈ ℂ: |α| > t) →
      let(c = α/|α|) →
      assert(1/α·x = (t/(c|α|))·(1/t·x)) →
      assert(t/|α| < 1) →
      conclude(x ∈ αC)
    }

    // Complex case
    case(𝔽 = ℂ) {
      let(x ∈ X) →
      let(t₁,t₂,t₃,t₄ ∈ ℝ₊: 
        x ∈ t₁C ∧ -x ∈ t₂C ∧ ix ∈ t₃C ∧ -ix ∈ t₄C) →
      let(t = max{t₁,t₂,t₃,t₄}) →
      assert(∀i ∈ {1,2,3,4}: tᵢ/t ∈ [0,1]) →
      apply(Convex_Set_Dilation_Theorem()) →
      let(α ∈ ℂ: |α| > 2t) →
      assert(α/t = c₁α₁ + ic₂α₂) where(
        α₁,α₂ ∈ [0,∞), c₁,c₂ ∈ {-1,1}
      ) →
      assert(1/α·x = (α₁+α₂)·(
        (α₁/(α₁+α₂))·(c₁/t·x) + (α₂/(α₁+α₂))·(ic₂/t·x)
      )) →
      assert(α₁/(α₁+α₂) + α₂/(α₁+α₂) = 1) →
      assert(α₁+α₂ < 1) →
      conclude(x ∈ αC)
    }
  }
}