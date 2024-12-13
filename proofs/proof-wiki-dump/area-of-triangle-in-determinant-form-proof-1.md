theorem Triangle_Area_Determinant() {
  assert(
    ∀A,B,C ∈ ℂ² : [A = (x₁,y₁) ∧ B = (x₂,y₂) ∧ C = (x₃,y₃)] ⇒
    Area(Triangle(A,B,C)) = ½|⎜x₁ y₁ 1⎟|
                               |⎜x₂ y₂ 1⎟|
                               |⎜x₃ y₃ 1⎟|
  )
} ↔

proof Triangle_Area_Determinant() {
  setVar(z₁: ℂ = (x₁-x₃) + i(y₁-y₃)) →
  setVar(z₂: ℂ = (x₂-x₃) + i(y₂-y₃)) →
  
  lemma Triangle_Parallelogram_Area() {
    assert(Area(Triangle(A,B,C)) = ½|z₁ × z₂|)
  } →
  
  lemma Complex_Cross_Product() {
    assert(z₁ × z₂ = Im((x₁-x₃-i(y₁-y₃))((x₂-x₃)+i(y₂-y₃))))
  } →
  
  apply(Triangle_Parallelogram_Area()) →
  apply(Complex_Cross_Product()) →
  
  assert(Area(Triangle(A,B,C)) = 
    ½|(x₁-x₃)(y₂-y₃) - (y₁-y₃)(x₂-x₃)|) →
    
  assert(Area(Triangle(A,B,C)) = 
    ½|x₁y₂ - y₁x₂ + x₂y₃ - y₂x₃ + x₃y₁ - y₃x₁|) →
    
  assert(Area(Triangle(A,B,C)) = ½|⎜x₁ y₁ 1⎟|)
                                   |⎜x₂ y₂ 1⎟|
                                   |⎜x₃ y₃ 1⎟|
}