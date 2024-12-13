theorem Continuous_Canonical_Injection_Product_Metric() {
  assert(
    ∀(M₁ = ⟨A₁,d⟩: MetricSpace, M₂ = ⟨A₂,d'⟩: MetricSpace) →
    let(𝔸 := A₁ × A₂) →
    let(ℳ = ⟨𝔸,dₚ⟩) →
    let(dₚ(x,y) := cases(
      p ∈ ℤ₊: ((d(x₁,y₁))ᵖ + (d'(x₂,y₂))ᵖ)^(1/p),
      p = ∞: max(d(x₁,y₁), d'(x₂,y₂))
    )) →
    ∀(a ∈ A₁, b ∈ A₂) →
    let(iₐ: A₂ → 𝔸, iᵦ: A₁ → 𝔸) →
    ∀(x ∈ A₁): iᵦ(x) = ⟨x,b⟩ ∧
    ∀(y ∈ A₂): iₐ(y) = ⟨a,y⟩ →
    isContinuous(iᵦ,M₁) ∧ isContinuous(iₐ,M₂)
  )
}

proof Continuous_Canonical_Injection_Product_Metric() {
  setVars(a ∈ A₁, b ∈ A₂) →
  
  lemma Continuity_iᵦ() {
    assert(
      ∀(c₁ ∈ A₁, ε > 0) →
      ∃(δ > 0): ∀(x ∈ A₁):
      d(x,c₁) < δ → dₚ(iᵦ(x),iᵦ(c₁)) < ε
    ) →
    let(δ := ε) →
    assert(
      dₚ(iᵦ(x),iᵦ(c₁)) 
      = dₚ(⟨x,b⟩,⟨c₁,b⟩)
      = cases(
        p ∈ ℤ₊: ((d(x,c₁))ᵖ + 0ᵖ)^(1/p),
        p = ∞: max(d(x,c₁),0)
      )
      = d(x,c₁)
      < ε
    )
  }

  lemma Continuity_iₐ() {
    assert(
      ∀(c₂ ∈ A₂, ε > 0) →
      ∃(δ > 0): ∀(y ∈ A₂):
      d'(y,c₂) < δ → dₚ(iₐ(y),iₐ(c₂)) < ε
    ) →
    let(δ := ε) →
    assert(
      dₚ(iₐ(y),iₐ(c₂))
      = dₚ(⟨a,y⟩,⟨a,c₂⟩)
      = cases(
        p ∈ ℤ₊: (0ᵖ + (d'(y,c₂))ᵖ)^(1/p),
        p = ∞: max(0,d'(y,c₂))
      )
      = d'(y,c₂)
      < ε
    )
  }

  apply(Continuity_iᵦ()) →
  apply(Continuity_iₐ()) →
  assert(isContinuous(iᵦ,M₁) ∧ isContinuous(iₐ,M₂))
}