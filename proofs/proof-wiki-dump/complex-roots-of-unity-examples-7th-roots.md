theorem ComplexSeventhRoots() {
  assert(
    U₇ = {z ∈ ℂ : z⁷ = 1} → 
    U₇ = {1, e^{2πi/7}, e^{4πi/7}, e^{6πi/7}, e^{8πi/7}, e^{10πi/7}, e^{12πi/7}}
  )
}

proof ComplexSeventhRoots() {
  setDef(α = e^{2πi/7}) →
  
  lemma RootGeneration() {
    assert(
      ∀k ∈ {0,1,2,3,4,5,6} →
      z_k = e^{2πik/7} ∈ U₇
    )
  } →
  
  lemma CisForm() {
    assert(
      e^{2πik/7} = cis(2πk/7) = cos(2πk/7) + i·sin(2πk/7)
    )
  } →
  
  apply(RootGeneration()) →
  apply(CisForm()) →
  
  assert(
    z₀ = e^{0} = 1 ∧
    z₁ = e^{2πi/7} = cis(2π/7) ∧
    z₂ = e^{4πi/7} = cis(4π/7) ∧
    z₃ = e^{6πi/7} = cis(6π/7) ∧
    z₄ = e^{8πi/7} = cis(8π/7) ∧
    z₅ = e^{10πi/7} = cis(10π/7) ∧
    z₆ = e^{12πi/7} = cis(12π/7)
  ) →
  
  assert(
    {z₀, z₁, z₂, z₃, z₄, z₅, z₆} = U₇
  )
}