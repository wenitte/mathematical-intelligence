theorem NoThreeDimComplexExtension() {
  assert(
    ¬∃A: (A is 3-dimensional algebra with real scalars ∧ ℂ ⊂ A)
  )
}

proof NoThreeDimComplexExtension() {
  byContradiction() {
    assume(∃A: A is 3-dimensional algebra with real scalars ∧ ℂ ⊂ A) →
    setVar(basis: {1, i, j}) →
    assert(∀a ∈ A: 1·a = a·1 = a) ∧
    assert(i·i = -1) →
    
    setVar(i·j = a₁ + a₂i + a₃j, where a₁,a₂,a₃ ∈ ℝ) →
    
    assert(i·(i·j) = (i·i)·j) →
    assert((i·i)·j = -j) {label: eq1} →
    
    expand(i·(a₁ + a₂i + a₃j)) →
    assert(= a₁i - a₂ + a₃(i·j)) →
    substitute(i·j = a₁ + a₂i + a₃j) →
    assert(= a₁i - a₂ + a₃(a₁ + a₂i + a₃j)) →
    assert(= (a₁a₃ - a₂) + (a₁ + a₂a₃)i + a₃²j) →
    
    applyEquality(eq1) →
    assert(a₁a₃ - a₂ = 0 ∧ a₁ + a₂a₃ = 0 ∧ a₃² + 1 = 0) →
    
    contradiction(a₃² + 1 = 0 ∧ a₃ ∈ ℝ)
  }
}