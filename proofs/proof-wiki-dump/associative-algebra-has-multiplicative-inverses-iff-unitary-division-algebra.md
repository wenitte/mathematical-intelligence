theorem AssociativeAlgebraInverses() {
  assert(
    ∀A_R(AssociativeAlgebra(A_R) ⇒
      (∀a ∈ A_R\{0}: ∃!b ∈ A_R: a ⊗ b = 1 ∧ b ⊗ a = 1) ↔
      UnitaryDivisionAlgebra(A_R)
    )
  )
} ↔

proof AssociativeAlgebraInverses() {
  // Forward direction
  setVar(A_R: AssociativeAlgebra) →
  assume(UnitaryDivisionAlgebra(A_R)) →
  assert(∀a ∈ A_R, a ≠ 0_A: a ⊗ 1 = a = 1 ⊗ a) →
  assert(∀a,b ∈ A_R, b ≠ 0_A: ∃!x,y ∈ A_R: b ⊗ x = a = y ⊗ b) →
  
  lemma InverseExists() {
    setVar(b: A_R\{0_A}) →
    assert(∃!x,y ∈ A_R: b ⊗ x = 1 = y ⊗ b) →
    assert(y ⊗ 1 = y ⊗ (b ⊗ x)) →
    assert(y ⊗ 1 = (y ⊗ b) ⊗ x) → // Associativity
    assert(y ⊗ 1 = 1 ⊗ x) →
    assert(y = x)
  } →
  
  // Backward direction
  assume(∀a ∈ A_R\{0}: ∃!b ∈ A_R: a ⊗ b = 1 ∧ b ⊗ a = 1) →
  
  lemma DivisionProperty() {
    setVar(a,b: A_R, b ≠ 0_A) →
    setVar(b⁻¹: A_R) where(b ⊗ b⁻¹ = 1 ∧ b⁻¹ ⊗ b = 1) →
    setVar(x: A_R) := a ⊗ b⁻¹ →
    assert((a ⊗ b⁻¹) ⊗ b = a ⊗ (b⁻¹ ⊗ b)) → // Associativity
    assert((a ⊗ b⁻¹) ⊗ b = a ⊗ 1) →
    assert((a ⊗ b⁻¹) ⊗ b = a)
  } →

  lemma UniquenessProperty() {
    setVar(x₁,x₂: A_R) →
    assume(x₁ ⊗ b = a ∧ x₂ ⊗ b = a) →
    assert((x₁ ⊗ b) ⊗ b⁻¹ = (x₂ ⊗ b) ⊗ b⁻¹) →
    assert(x₁ ⊗ (b ⊗ b⁻¹) = x₂ ⊗ (b ⊗ b⁻¹)) →
    assert(x₁ = x₂)
  } →
  
  assert(UnitaryDivisionAlgebra(A_R))
}