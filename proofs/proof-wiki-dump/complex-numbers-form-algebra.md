theorem ComplexNumbersFormAlgebra() {
  assert(
    ℂ forms {
      associativeAlgebra ∧
      commutativeAlgebra ∧
      normedDivisionAlgebra ∧
      nicelyNormedStarAlgebra ∧
      ¬realStarAlgebra
    }
  )
} ↔

proof ComplexNumbersFormAlgebra() {
  assert(ℂ = CayleyDicksonConstruction(ℝ)) →
  
  lemma RealAlgebraProperties() {
    assert(
      ℝ forms {
        associativeAlgebra ∧
        commutativeAlgebra ∧
        normedDivisionAlgebra ∧
        nicelyNormedStarAlgebra ∧
        realStarAlgebra
      }
    )
  } →
  
  apply(CayleyDicksonConstructionFormsStarAlgebra()) →
  apply(CayleyDicksonConstructionIsNicelyNormed()) →
  apply(CayleyDicksonConstructionIsCommutative()) →
  apply(CayleyDicksonConstructionIsAssociative()) →
  apply(CayleyDicksonConstructionNotRealStarAlgebra()) →
  
  lemma NormedDivisionAlgebra() {
    setVar(x₁, x₂: ℝ) →
    assert(⟨1,0⟩ × ⟨x₁,x₂⟩ = ⟨x₁×1 - 0×x₂, x₁×0 + x₂×1⟩) →
    assert(⟨1,0⟩ × ⟨x₁,x₂⟩ = ⟨x₁,x₂⟩) →
    assert(isUnitary(ℝ²,×)) →
    
    define(norm: ∀a∈ℝ² → ‖a‖ = √(a₁² + a₂²)) →
    assert(
      ∀x∈ℝ² → (‖x‖ = 0 ↔ x = 0) ∧
      ∀x∈ℝ² → ∀λ∈ℝ → ‖λx‖ = |λ|‖x‖ ∧
      ∀x,y,z∈ℝ² → ‖x-y‖ ≤ ‖x-z‖ + ‖z-y‖
    ) →
    assert(∀x,y∈ℝ → ‖x×y‖ = ‖x‖×‖y‖)
  } →
  
  conclude(ℂ forms normedDivisionAlgebra)
}