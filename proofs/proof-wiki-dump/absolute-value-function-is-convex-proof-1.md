theorem Absolute_Value_Is_Convex() {
  assert(
    ∀f: ℝ → ℝ, f(x) = |x| ⇒ isConvex(f)
  )
} ↔

proof Absolute_Value_Is_Convex() {
  setVar(x₁, x₂, x₃: ℝ) →
  assume(x₁ < x₂ < x₃) →
  define(
    slope₁₂ := (f(x₂) - f(x₁))/(x₂ - x₁),
    slope₂₃ := (f(x₃) - f(x₂))/(x₃ - x₂)
  ) →
  
  cases {
    case x₁,x₂,x₃ < 0: {
      assert(slope₁₂ = (-x₂ + x₁)/(x₂ - x₁) = -1) →
      assert(slope₂₃ = (-x₃ + x₂)/(x₃ - x₂) = -1) →
      conclude(slope₁₂ ≤ slope₂₃)
    } ∧
    
    case x₁,x₂,x₃ > 0: {
      assert(slope₁₂ = (x₂ - x₁)/(x₂ - x₁) = 1) →
      assert(slope₂₃ = (x₃ - x₂)/(x₃ - x₂) = 1) →
      conclude(slope₁₂ ≤ slope₂₃)
    } ∧
    
    case x₁ < 0 ∧ x₂,x₃ > 0: {
      assert(slope₁₂ = (x₂ + x₁)/(x₂ - x₁) = 1 + 2x₁/(x₂ - x₁)) →
      assert(2x₁ < 0 ⇒ slope₁₂ < 1) →
      assert(slope₂₃ = (x₃ - x₂)/(x₃ - x₂) = 1) →
      conclude(slope₁₂ ≤ slope₂₃)
    } ∧
    
    case x₁,x₂ < 0 ∧ x₃ > 0: {
      assert(slope₁₂ = (-x₂ + x₁)/(x₂ - x₁) = -1) →
      assert(slope₂₃ = (x₃ + x₂)/(x₃ - x₂) = -1 + 2x₃/(x₃ - x₂)) →
      assert(2x₃ > 0 ⇒ slope₂₃ > -1) →
      conclude(slope₁₂ ≤ slope₂₃)
    }
  } →
  
  conclude(
    ∀x₁,x₂,x₃ ∈ ℝ: x₁ < x₂ < x₃ ⇒ slope₁₂ ≤ slope₂₃ ⇒ isConvex(f)
  )
}