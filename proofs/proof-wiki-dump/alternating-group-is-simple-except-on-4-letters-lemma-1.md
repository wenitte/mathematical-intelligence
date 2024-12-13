theorem Alternating_Group_Fixed_Point() {
  assert(
    ∀n ∈ ℤ : (n ≥ 5) ∧
    ∀α ∈ Aₙ : (α(1) = 2) ∧
    let β = (3,4,5) →
    β⁻¹α⁻¹βα(1) = 1
  )
} ↔

proof Alternating_Group_Fixed_Point() {
  setVar(n: ℤ, α: Aₙ, β: Sₙ) →
  assume(n ≥ 5) →
  assume(α(1) = 2) →
  assume(β = (3,4,5)) →
  
  lemma Composition_Steps() {
    assert(β⁻¹α⁻¹βα(1)
      = (3,5,4)α⁻¹(3,4,5)(α(1))
      = (3,5,4)α⁻¹(3,4,5)(2)
      = (3,5,4)α⁻¹(2)
      = (3,5,4)(1)
      = 1
    )
  } →

  apply(Composition_Steps()) →
  
  justify([
    step2: "(3,4,5)(2) = 2 as 2 is fixed by (3,4,5)",
    step3: "α⁻¹(2) = 1 as α(1) = 2",
    step4: "(3,5,4)(1) = 1 as 1 is fixed by (3,5,4)"
  ]) →

  assert(β⁻¹α⁻¹βα(1) = 1)
}