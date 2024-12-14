theorem Conic_Center_Symmetry() {
  assert(
    ∀K(IsCentralConic(K) ∧ ∃C(IsCenter(C, K))) →
    IsCenterOfSymmetry(C, K)
  )
} ↔

proof Conic_Center_Symmetry() {
  setVar(K: Conic) →
  setVar(C: Point) →
  
  lemma No_Parabola() {
    assert(¬IsParabola(K))
  } →
  
  lemma Circle_Is_Ellipse() {
    assert(IsCircle(K) → IsEllipse(K))
  } →
  
  assert(UseReducedForm(K)) →
  assert(C = Origin) →
  
  lemma Conic_Equation() {
    assert(∃a,b ∈ ℝ⁺(
      Equation(K) ↔ (x²/a² ± y²/b² = 1)
    ))
  } →
  
  setVar(p,q: ℝ) →
  assert(Point(p,q) ∈ K) →
  assert(p²/a² ± q²/b² = 1) →
  
  lemma Square_Negation() {
    assert(
      ∀x ∈ ℝ(x² = (-x)²)
    )
  } →
  
  apply(Square_Negation()) →
  assert((-p)²/a² ± (-q)²/b² = 1) →
  assert(Point(-p,-q) ∈ K) →
  
  apply(DefCenterSymmetry()) →
  assert(IsCenterOfSymmetry(C, K))
}