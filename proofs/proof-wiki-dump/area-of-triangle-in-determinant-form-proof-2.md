theorem TriangleAreaDeterminant() {
  assert(
    ∀A,B,C ∈ ℝ² where
    A = (x₁,y₁) ∧ 
    B = (x₂,y₂) ∧ 
    C = (x₃,y₃) ⇒
    Area(△ABC) = ½|det([x₁ y₁ 1; x₂ y₂ 1; x₃ y₃ 1])|
  )
} ↔

proof TriangleAreaDeterminant() {
  setPoint(O: (0,0)) →
  assert(△ABC = △OAB + △OBC + △OCA) →
  
  lemma OriginTriangleArea() {
    assert(
      ∀P,Q ∈ ℝ² where P = (xₚ,yₚ) ∧ Q = (xᵧ,yᵧ) ⇒
      Area(△OPQ) = ½(xₚyᵧ - xᵧyₚ)
    )
  } →
  
  apply(OriginTriangleArea()) →
  assert(△OAB = ½(x₁y₂ - x₂y₁)) →
  assert(△OBC = ½(x₂y₃ - x₃y₂)) →
  assert(△OCA = ½(x₃y₁ - x₁y₃)) →
  
  assert(
    Area(△ABC) = ½((x₁y₂ - x₂y₁) + (x₂y₃ - x₃y₂) + (x₃y₁ - x₁y₃))
  ) →
  
  lemma Determinant3x3() {
    assert(
      det([x₁ y₁ 1; x₂ y₂ 1; x₃ y₃ 1]) = 
      (x₁y₂ - x₂y₁) + (x₂y₃ - x₃y₂) + (x₃y₁ - x₁y₃)
    )
  } →
  
  apply(Determinant3x3()) →
  assert(Area(△ABC) = ½|det([x₁ y₁ 1; x₂ y₂ 1; x₃ y₃ 1])|)
}