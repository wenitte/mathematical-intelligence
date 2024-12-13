theorem AbsoluteValue_Is_Convex() {
  assert(
    let f: ℝ → ℝ, f(x) = |x| ⇒
    isConvex(f)
  )
}

proof AbsoluteValue_Is_Convex_1() {
  setVars(x₁, x₂, x₃: ℝ) →
  assume(x₁ < x₂ < x₃) →
  define(
    slope₁ = (f(x₂) - f(x₁))/(x₂ - x₁),
    slope₂ = (f(x₃) - f(x₂))/(x₃ - x₂)
  ) →
  
  case_1(x₁, x₂, x₃ < 0) {
    assert(slope₁ = -1) ∧
    assert(slope₂ = -1) →
    conclude(slope₁ ≤ slope₂)
  } →

  case_2(x₁, x₂, x₃ > 0) {
    assert(slope₁ = 1) ∧
    assert(slope₂ = 1) →
    conclude(slope₁ ≤ slope₂)
  } →

  case_3(x₁ < 0 ∧ x₂, x₃ > 0) {
    assert(slope₁ = 1 + 2x₁/(x₂ - x₁)) ∧
    assert(slope₂ = 1) ∧
    assert(2x₁ < 0) →
    conclude(slope₁ < 1) →
    conclude(slope₁ ≤ slope₂)
  } →

  case_4(x₁, x₂ < 0 ∧ x₃ > 0) {
    assert(slope₁ = -1) ∧
    assert(slope₂ = -1 + 2x₃/(x₃ - x₂)) ∧
    assert(2x₃ > 0) →
    conclude(slope₂ > -1) →
    conclude(slope₁ ≤ slope₂)
  } →

  conclude(isConvex(f))
}

proof AbsoluteValue_Is_Convex_2() {
  setVars(x, y: ℝ, α, β: ℝ₊) →
  assume(α + β = 1) →
  
  assert(
    f(αx + βy) = |αx + βy| ≤ |αx| + |βy| →
    |αx| + |βy| = |α||x| + |β||y| →
    |α||x| + |β||y| = α|x| + β|y| →
    α|x| + β|y| = αf(x) + βf(y)
  ) →
  
  conclude(
    f(αx + βy) ≤ αf(x) + βf(y) →
    isConvex(f)
  )
}