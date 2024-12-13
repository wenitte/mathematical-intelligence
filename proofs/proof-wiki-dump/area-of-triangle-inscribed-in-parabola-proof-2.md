theorem ParabolaInscribedTriangleArea() {
  assert(
    ∀T: Parabola, ∀A,B,C: Point, ∀u,v: ℝ where
    T = {(x,y) ∈ ℝ² | y = x²} ∧
    A = (u,u²) ∧ B = (v,v²) ∧ u > v ∧
    C.x = (u+v)/2 ∧ C.y = C.x² →
    Area(△ABC) = (1/8)(u-v)³
  )
}

proof ParabolaInscribedTriangleArea() {
  setVar(T: Parabola, A,B,C: Point, u,v: ℝ) →
  
  lemma LineEquationAB() {
    apply(TwoPointLineForm) →
    assert(yAB = (u+v)x - uv)
  } →

  lemma PointC() {
    assert(C = ((u+v)/2, (u+v)²/4))
  } →

  lemma PointP() {
    assert(P = ((u+v)/2, (u²+v²)/2)) where P.midpoint(A,B)
  } →

  lemma AreaDecomposition() {
    assert(Area(△ABC) = Area(△APC) + Area(△CPB)) ∧
    assert(Area(△APC) = (1/2)(AP)(PC)sin(∠APC))
  } →

  lemma SineProperties() {
    assert(sin(∠CPB) = sin(π-∠APC)) →
    assert(sin(∠CPB) = sin(∠APC))
  } →

  lemma EqualTriangles() {
    apply(TwoSidesAngleArea) →
    assert(AP = PB ∧ PC = PC ∧ sin(∠CPB) = sin(∠APC)) →
    assert(Area(△APC) = Area(△CPB))
  } →

  lemma TotalArea() {
    assert(Area(△ABC) = 2·Area(△APC)) →
    assert(Area(△ABC) = (1/2)(u-v)·PC)
  } →

  lemma LengthPC() {
    assert(PC = Py - Cy) →
    assert(PC = (1/2)(u²+v²) - (1/4)(u+v)²) →
    assert(PC = (1/4)(u-v)²)
  } →

  apply(TotalArea, LengthPC) →
  assert(Area(△ABC) = (1/2)(u-v)·(1/4)(u-v)²) →
  assert(Area(△ABC) = (1/8)(u-v)³)
}