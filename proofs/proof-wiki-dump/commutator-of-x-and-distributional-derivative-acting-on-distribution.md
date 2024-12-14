theorem Commutator_x_Distributional_Derivative() {
  assert(
    ∀T ∈ 𝒟'(ℝ) ∧
    let([x, d/dx]T := x(dT/dx) - d(xT)/dx) ⇒
    [x, d/dx]T = -T
  )
} ↔

proof Commutator_x_Distributional_Derivative() {
  setVar(φ ∈ 𝒟(ℝ)) →
  assert(⟨[x, d/dx]T, φ⟩ = ⟨x(dT/dx) - d(xT)/dx, φ⟩) →
  apply(Linearity_Distribution) →
  assert(⟨x(dT/dx), φ⟩ - ⟨d(xT)/dx, φ⟩) →
  apply(Multiplication_Distribution_Smooth_Function) →
  assert(⟨dT/dx, xφ⟩ - ⟨d(xT)/dx, φ⟩) →
  apply(Definition_Distributional_Derivative) →
  assert(-⟨T, (xφ)'⟩ + ⟨xT, φ'⟩) →
  apply(Multiplication_Distribution_Smooth_Function) →
  assert(-⟨T, (xφ)'⟩ + ⟨T, xφ'⟩) →
  apply(Chain_Rule) →
  assert(⟨T, -φ - xφ' + xφ'⟩) →
  apply(Linearity_Distribution) →
  assert(⟨T, -φ⟩) →
  apply(Linearity_Distribution) →
  assert(-⟨T, φ⟩) →
  conclude([x, d/dx]T = -T)
}