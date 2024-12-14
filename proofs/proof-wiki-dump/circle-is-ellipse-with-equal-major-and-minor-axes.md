theorem Circle_From_Equal_Axes() {
  assert(
    ∀E: Ellipse ∧ ∀a,b ∈ ℝ⁺ → 
    (MajorAxis(E) = a ∧ MinorAxis(E) = b ∧ a = b) →
    IsCircle(E)
  )
} ↔

proof Circle_From_Equal_Axes() {
  setVar(E: Ellipse) →
  setVar(a,b: ℝ⁺) →
  
  lemma Ellipse_Reduced_Form() {
    assert(
      ∀(x,y) ∈ E ↔ (x²/a² + y²/b² = 1)
    )
  } →
  
  apply(Ellipse_Reduced_Form()) →
  assert(MajorAxis(E) = a ∧ MinorAxis(E) = b) →
  assert(a = b) →
  
  transform(
    x²/a² + y²/b² = 1 →
    x²/a² + y²/a² = 1 →
    (x² + y²)/a² = 1 →
    x² + y² = a²
  ) →
  
  lemma Circle_Equation() {
    assert(
      ∀C: Circle →
      (∀(x,y) ∈ C ↔ x² + y² = r² where r = radius(C))
    )
  } →
  
  apply(Circle_Equation()) →
  assert(IsCircle(E) ∧ radius(E) = a)
}