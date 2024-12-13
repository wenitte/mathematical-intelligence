theorem Triangle_Area_Determinant() {
  assert(
    ∀A,B,C ∈ ℝ² where
    A = (x₁,y₁) ∧ 
    B = (x₂,y₂) ∧ 
    C = (x₃,y₃) ⇒
    Area(ABC) = ½|det([x₁ y₁ 1; x₂ y₂ 1; x₃ y₃ 1])|
  )
}

proof Triangle_Area_Determinant() {
  setPoints(A(x₁,y₁), B(x₂,y₂), C(x₃,y₃)) →
  
  lemma Trapezoid_Decomposition() {
    assert(
      Area(ABC) = Area(PACR) + Area(RCBQ) - Area(PABQ)
    )
  } →
  
  apply(Trapezoid_Area_Formula()) →
  assert(
    Area(ABC) = 
    ½(x₃-x₁)(y₃+y₁) + 
    ½(x₂-x₃)(y₂+y₃) - 
    ½(x₂-x₁)(y₁+y₂)
  ) →
  
  apply(Algebraic_Simplification()) →
  assert(
    Area(ABC) = 
    ½(x₁y₂ - x₂y₁ + x₂y₃ - x₃y₂ + x₃y₁ - x₁y₃)
  ) →
  
  lemma Determinant_Expansion() {
    assert(
      det([x₁ y₁ 1; x₂ y₂ 1; x₃ y₃ 1]) = 
      x₁y₂ - x₂y₁ + x₂y₃ - x₃y₂ + x₃y₁ - x₁y₃
    )
  } →
  
  apply(Determinant_Expansion()) →
  assert(
    Area(ABC) = ½|det([x₁ y₁ 1; x₂ y₂ 1; x₃ y₃ 1])|
  )
}