theorem Canonical_Injection_Continuous() {
  assert(
    ∀M₁(A₁,d), M₂(A₂,d') ∈ MetricSpace ∧
    let 𝔸 := A₁ × A₂ ∧
    let ℳ := (𝔸,dₚ) where
    dₚ(x,y) = {
      (d(x₁,y₁)ᵖ + d'(x₂,y₂)ᵖ)^(1/p) if p ∈ ℤ₊
      max(d(x₁,y₁), d'(x₂,y₂)) if p = ∞
    } ∧
    ∀a ∈ A₁, b ∈ A₂ ∧
    let iᵦ: A₁ → 𝔸 where iᵦ(x) = (x,b) ∧
    let iₐ: A₂ → 𝔸 where iₐ(y) = (a,y)
    ⇒
    iᵦ is continuous in M₁ ∧
    iₐ is continuous in M₂
  )
} ↔

proof Canonical_Injection_Continuous() {
  setVar(pr₁: ℳ → M₁, pr₂: ℳ → M₂) →
  
  lemma Projection_Continuous() {
    assert(
      pr₁ is continuous ∧
      pr₂ is continuous
    )
  } →
  
  apply(Projection_Continuous()) →
  
  lemma Continuous_Product_Space() {
    assert(
      ∀f,g continuous ⇒
      h(x) = (f(x),g(x)) is continuous
    )
  } →
  
  apply(Continuous_Product_Space()) →
  
  assert(
    iᵦ = (id_A₁, const_b) is continuous ∧
    iₐ = (const_a, id_A₂) is continuous
  )
}