theorem MaxAreaCircleArc() {
  assert(
    ∀y: SmoothCurve ∧ Length(y) = l ∧ 
    InUpperHalfPlane(y) ∧ EndpointsOnXAxis(y) ∧
    MaximizesArea(y) ⇒ 
    IsCircleArc(y)
  )
} ↔

proof MaxAreaCircleArc() {
  setVar(y: SmoothCurve) →
  translate(Origin) {
    assert(y ∩ x-axis = {(-a,0), (a,0)}, a > 0)
  } →
  
  define(Area) {
    A[y] = ∫_{-a}^a y dx
  } →
  
  define(Constraints) {
    assert(y(-a) = y(a) = 0) ∧
    assert(L[y] = ∫_{-a}^a √(1 + y'^2) dx = l)
  } →
  
  lemma VariationalProblem() {
    assert(∃λ: ℝ | Extremize(A[y] + λL[y])) →
    assert(EulerEquation: 1 + λ(d/dx)(y'/√(1 + y'^2)) = 0)
  } →
  
  integrate(EulerEquation) {
    assert(x + λy'/√(1 + y'^2) = C_1) →
    assert(y' = ±(C_1 - x)/√(λ^2 - C_1^2 + 2C_1x - x^2))
  } →
  
  integrate(y') {
    assert((x - C_1)^2 + (y - C_2)^2 = λ^2)
  } →
  
  applyBoundaryConditions() {
    assert(C_1 = 0) ∧
    assert(a^2 + C_2^2 = λ^2) →
    assert(C_2 = ±√(λ^2 - a^2))
  } →
  
  analyzeLengthCases() {
    case1: UpperSemicircle() {
      assert(l = 2λ arctan(a/√(λ^2 - a^2))) ∧
      assert(∂l/∂λ < 0) ∧
      assert(lim_{λ→a^+} l = πa) ∧
      assert(lim_{λ→∞} l = 2a)
    } →
    
    case2: CompoundArcs() {
      assert(l = 2λ(π - arctan(a/√(λ^2 - a^2)))) ∧
      assert(∂l/∂λ > 0) ∧
      assert(lim_{λ→a^+} l = πa) ∧
      assert(lim_{λ→∞} l = ∞)
    }
  } →
  
  conclude() {
    assert(∀l ≥ 2a ⇒ ∃λ ≥ a) →
    assert(IsCircleArc(y))
  }
}