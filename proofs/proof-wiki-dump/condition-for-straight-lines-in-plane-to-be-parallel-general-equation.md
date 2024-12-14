theorem ParallelLines() {
  let L := {⟨x,y⟩ ∈ ℝ² : α₁x + α₂y = β}
  assert(
    ∀L' ∈ Lines(ℝ²) ↔ 
    (L' ∥ L) ↔ 
    ∃β' ∈ ℝ[L' = {⟨x,y⟩ ∈ ℝ² : α₁x + α₂y = β'}]
  )
}

proof ParallelLines() {
  # Necessary Condition
  case L' = L {
    assert(trivial)
  } →
  
  case L' ≠ L {
    setVar(L': α'₁x + α'₂y = β') →
    assume(α'₁ ≠ 0) →  # WLOG
    
    lemma PointsOnL'() {
      assert(α'₁x + α'₂y = β') →
      assert(x = (-α'₂/α'₁)y + β'/α'₁)
    } →

    lemma ParallelCondition() {
      assert(⟨x,y⟩ ∉ L) →
      substitute(x from PointsOnL'()) →
      assert(α₁(-α'₂/α'₁)y + α₁(β'/α'₁) + α₂y ≠ β) →
      assert((α₂ - α₁α'₂/α'₁)y ≠ β - α₁β'/α'₁) →
      require(β - α₁β'/α'₁ ≠ 0) →
      conclude(α₂ - α₁α'₂/α'₁ = 0)
    } →

    assert(α₁ = 0 → α₂ = 0) →
    assert(¬(α₁ = α₂ = 0)) →  # L is a line
    conclude(α'₂ = (α'₁/α₁)α₂) →
    
    # Final form
    assert(α'₁x + α'₂y = β') ↔
    assert((α'₁/α₁)(α₁x + α₂y) = β') ↔
    assert(α₁x + α₂y = β'(α₁/α'₁))
  }

  # Sufficient Condition
  assume(L' ≠ L) →
  setVar(L': α₁x + α₂y = β') →
  
  lemma Intersection() {
    byContradiction {
      assume(∃⟨x,y⟩ ∈ L ∩ L') →
      assert(α₁x + α₂y = β ∧ α₁x + α₂y = β') →
      conclude(β = β') →
      conclude(L = L') →
      contradiction()
    } →
    conclude(L ∩ L' = ∅)
  } →
  
  conclude(L' ∥ L)
}