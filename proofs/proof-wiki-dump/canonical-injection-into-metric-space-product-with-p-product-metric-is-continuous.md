theorem Canonical_Injection_Continuous() {
  assert(
    ∀M₁(A₁,d), M₂(A₂,d') ∈ MetricSpace ∧
    let 𝔸 = A₁ × A₂ ∧
    let ℳ = (𝔸,dₚ) where dₚ: 𝔸 → ℝ is p-product metric ∧
    dₚ(x,y) = {
      (d(x₁,y₁)ᵖ + d'(x₂,y₂)ᵖ)^(1/p) if p ∈ ℤ₊
      max(d(x₁,y₁), d'(x₂,y₂)) if p = ∞
    } ∧
    ∀a ∈ A₁, b ∈ A₂ ∧
    let iᵦ: A₁ → 𝔸, iᵦ(x) = (x,b) ∧
    let iₐ: A₂ → 𝔸, iₐ(y) = (a,y)
    ⇒ iᵦ continuous in M₁ ∧ iₐ continuous in M₂
  )
}

proof Canonical_Injection_Continuous() {
  // Proof 1 (using composition)
  setProjections(pr₁: ℳ → M₁, pr₂: ℳ → M₂) →
  lemma Projections_Continuous() {
    assert(pr₁, pr₂ are continuous)
  } →
  apply(Continuous_Mapping_Product_Space) →
  
  // Proof 2 (direct proof)
  // For iᵦ
  assert(
    ∀c₁ ∈ A₁, ∀ε > 0, ∃δ > 0:
    ∀x ∈ A₁: d(x,c₁) < δ ⇒ dₚ(iᵦ(x),iᵦ(c₁)) < ε
  ) →
  setVar(δ = ε) →
  compute(
    dₚ(iᵦ(x),iᵦ(c₁)) =
    dₚ((x,b),(c₁,b)) =
    {
      (d(x,c₁)ᵖ + d'(b,b)ᵖ)^(1/p) if p ∈ ℤ₊
      max(d(x,c₁), d'(b,b)) if p = ∞
    } =
    d(x,c₁) < ε
  ) →

  // For iₐ
  assert(
    ∀c₂ ∈ A₂, ∀ε > 0, ∃δ > 0:
    ∀y ∈ A₂: d'(y,c₂) < δ ⇒ dₚ(iₐ(y),iₐ(c₂)) < ε
  ) →
  setVar(δ = ε) →
  compute(
    dₚ(iₐ(y),iₐ(c₂)) =
    dₚ((a,y),(a,c₂)) =
    {
      (d(a,a)ᵖ + d'(y,c₂)ᵖ)^(1/p) if p ∈ ℤ₊
      max(d(a,a), d'(y,c₂)) if p = ∞
    } =
    d'(y,c₂) < ε
  ) →
  conclude(iᵦ continuous in M₁ ∧ iₐ continuous in M₂)
}