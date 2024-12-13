theorem Triangle_Area_Determinant() {
  assert(
    ∀A,B,C ∈ ℝ² where
    A = (x₁,y₁) ∧ B = (x₂,y₂) ∧ C = (x₃,y₃) →
    Area(△ABC) = ½|det⎣⎢⎡x₁ y₁ 1x₂ y₂ 1x₃ y₃ 1⎦⎥⎤|
  )
}

proof Triangle_Area_Determinant_Complex() {
  setVar(z₁: ℂ = (x₁-x₃) + i(y₁-y₃)) →
  setVar(z₂: ℂ = (x₂-x₃) + i(y₂-y₃)) →
  
  lemma ParallelogramArea() {
    assert(Area(△ABC) = ½|z₁ × z₂|)
  } →
  
  apply(ParallelogramArea()) →
  assert(Area(△ABC) = ½|Im((x₁-x₃-i(y₁-y₃))(x₂-x₃+i(y₂-y₃)))| →
    = ½|(x₁-x₃)(y₂-y₃) - (y₁-y₃)(x₂-x₃)| →
    = ½|x₁y₂ - y₁x₂ + x₂y₃ - y₂x₃ + x₃y₁ - y₃x₁| →
    = ½|det⎣⎢⎡x₁ y₁ 1x₂ y₂ 1x₃ y₃ 1⎦⎥⎤|)
}

proof Triangle_Area_Determinant_Origin() {
  setVar(O: ℝ² = (0,0)) →
  assert(Area(△ABC) = Area(△OAB) + Area(△OBC) + Area(△OCA)) →
  
  lemma OriginTriangleArea() {
    assert(
      Area(△OAB) = ½(x₁y₂ - x₂y₁) ∧
      Area(△OBC) = ½(x₂y₃ - x₃y₂) ∧
      Area(△OCA) = ½(x₃y₁ - x₁y₃)
    )
  } →
  
  apply(OriginTriangleArea()) →
  assert(Area(△ABC) = ½((x₁y₂ - x₂y₁) + (x₂y₃ - x₃y₂) + (x₃y₁ - x₁y₃)) →
    = ½|det⎣⎢⎡x₁ y₁ 1x₂ y₂ 1x₃ y₃ 1⎦⎥⎤|)
}

proof Triangle_Area_Determinant_Trapezoid() {
  setVar(P,Q,R: ℝ²) →
  assert(Area(△ABC) = Area(PACR) + Area(RCBQ) - Area(PABQ)) →
  assert(
    Area(PACR) = ½(x₃-x₁)(y₃+y₁) ∧
    Area(RCBQ) = ½(x₂-x₃)(y₂+y₃) ∧
    Area(PABQ) = ½(x₂-x₁)(y₁+y₂)
  ) →
  assert(Area(△ABC) = ½(x₁y₂ - x₂y₁ + x₂y₃ - x₃y₂ + x₃y₁ - x₁y₃) →
    = ½|det⎣⎢⎡x₁ y₁ 1x₂ y₂ 1x₃ y₃ 1⎦⎥⎤|)
}