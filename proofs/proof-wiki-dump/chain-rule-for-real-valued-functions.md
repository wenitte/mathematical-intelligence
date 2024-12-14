theorem ChainRule() {
  assume(
    f: ℝⁿ → ℝ is differentiable ∧
    x = [x₁, x₂, ..., xₙ]ᵀ ∈ ℝⁿ ∧
    ∀i ∈ [1,n]: xᵢ is differentiable w.r.t. t
  ) →
  assert(
    dz/dt = ∑ᵢ₌₁ⁿ (∂z/∂xᵢ)(dxᵢ/dt)
  )
}

proof ChainRule() {
  setVar(f, x, z: f(x) = z) →
  lemma Differentiability() {
    assert(
      Δz = ∑ᵢ₌₁ⁿ (∂z/∂xᵢ)Δxᵢ + ∑ᵢ₌₁ⁿ εᵢΔxᵢ ∧
      ∀i: εᵢ → 0 as Δxᵢ → 0
    )
  } →
  apply(Differentiability()) →
  
  assert(
    Δz/Δt = ∑ᵢ₌₁ⁿ (∂z/∂xᵢ)(Δxᵢ/Δt) + ∑ᵢ₌₁ⁿ εᵢ(Δxᵢ/Δt) ∧
    Δt ≠ 0
  ) →
  
  lemma LimitExists() {
    assert(
      ∀i: xᵢ differentiable w.r.t. t →
      Δxᵢ → 0 as Δt → 0 →
      dxᵢ/dt exists
    )
  } →
  apply(LimitExists()) →
  
  assert(
    lim[Δt→0](Δz/Δt) = ∑ᵢ₌₁ⁿ (∂z/∂xᵢ)(dxᵢ/dt) + ∑ᵢ₌₁ⁿ 0(dxᵢ/dt)
  ) →
  
  conclude(
    dz/dt = ∑ᵢ₌₁ⁿ (∂z/∂xᵢ)(dxᵢ/dt)
  )
}

corollary ChainRuleTwoVar() {
  assume(
    Ψ differentiable in x,y ∧
    y differentiable in x
  ) →
  assert(
    dΨ/dx = ∂Ψ/∂x + (∂Ψ/∂y)(dy/dx)
  )
}