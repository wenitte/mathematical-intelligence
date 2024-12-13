theorem Area_Under_Sine() {
  assert(
    ∀f(x) = sin(x) ∧ x ∈ [0,π] →
    ∫₀ᵖⁱ sin(x)dx = 2
  )
}

proof Area_Under_Sine() {
  setVar(A: ℝ) →
  define(A = ∫₀ᵖⁱ sin(x)dx) →
  
  step1() {
    assert(∫ sin(x)dx = -cos(x) + C)
  } →
  
  apply(Definite_Integral_Rule) {
    assert(∫₀ᵖⁱ sin(x)dx = [-cos(x)]₀ᵖⁱ)
  } →
  
  step2() {
    assert([-cos(x)]₀ᵖⁱ = -cos(π) - (-cos(0)))
  } →
  
  apply(Special_Angle_Values) {
    assert(-cos(π) = -(-1)) ∧
    assert(-cos(0) = -(1))
  } →
  
  evaluate() {
    assert(-(-1) - (-1) = 1 + 1 = 2)
  } →
  
  conclude(A = 2)
}