theorem ChainRule_RealValued_Corollary() {
  assert(
    ∀Ψ,y ∈ C¹(ℝ) ∧
    (Ψ = Ψ(x,y)) ∧
    (y = y(x)) ⇒
    (dΨ/dx = ∂Ψ/∂x + (∂Ψ/∂y)(dy/dx))
  )
} ↔

proof ChainRule_RealValued_Corollary() {
  setVar(Ψ: C¹(ℝ)) →
  setVar(y: C¹(ℝ)) →
  
  lemma ChainRule() {
    assert(
      dΨ/dx = (∂Ψ/∂x)(dx/dx) + (∂Ψ/∂y)(dy/dx)
    )
  } →
  
  lemma IdentityDerivative() {
    assert(dx/dx = 1)
  } →
  
  apply(ChainRule()) →
  apply(IdentityDerivative()) →
  
  assert(
    dΨ/dx = ∂Ψ/∂x + (∂Ψ/∂y)(dy/dx)
  )
}