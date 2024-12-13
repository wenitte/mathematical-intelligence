theorem AbiKhuzam_Inequality() {
  let(k = (3√3/(2π))³)
  assert(
    ∀triangle(ABC) ∧ A,B,C ∈ ℝ⁺ ⇒ 
    (sinA·sinB·sinC ≤ k·A·B·C) ∧
    (equality_condition ↔ A=B=C)
  )
} ↔

proof AbiKhuzam_Inequality() {
  setVar(α₁,α₂,α₃: ℝ⁺) →
  assert(0 < αᵢ < π ∧ α₁ + α₂ + α₃ = π) →
  
  define(F(α₁,α₂,α₃) = (sinα₁·sinα₂·sinα₃)/(α₁·α₂·α₃)) →
  
  lemma Boundary_Conditions() {
    assert(
      F(0,α₂,α₃) = (sinα₂·sinα₃)/(α₂·α₃) ∧
      F(π,0,0) = F(0,π,0) = F(0,0,π) = 0
    )
  } →
  
  lemma Maximum_Point() {
    assert(F is continuous ∧ differentiable on G̅) →
    assert(0 ≤ F < 1) →
    assert(∂F/∂α₁ = ∂F/∂α₂ = ∂F/∂α₃) →
    calc(∂F/∂α₁ = F·(cotα₁ - 1/α₁)) →
    assert(cotα₁ - 1/α₁ = cotα₂ - 1/α₂ = cotα₃ - 1/α₃)
  } →
  
  lemma Decreasing_Function() {
    define(f(α) = cotα - 1/α) →
    assert(f'(α) = -1/sin²α + 1/α² < 0) →
    assert(f is strictly decreasing)
  } →
  
  apply(Maximum_Point()) →
  apply(Decreasing_Function()) →
  assert(α₁ = α₂ = α₃ = π/3) →
  
  lemma Boundary_Maximum() {
    assert(
      on P₂P₃: F ≤ 4/π² < k ∧
      similarly for P₁P₂, P₁P₃
    )
  } →
  
  conclude(F ≤ k ∀(α₁,α₂,α₃) ∈ G̅)
}