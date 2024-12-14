theorem Collinear_Points_Determinant() {
  let(A: Point(x₁,y₁), B: Point(x₂,y₂), C: Point(x₃,y₃)) →
  assert(
    Collinear(A,B,C) ↔ 
    |x₁ y₁ 1|
    |x₂ y₂ 1| = 0
    |x₃ y₃ 1|
  )
}

proof Collinear_Points_Determinant() {
  let(A: Point(x₁,y₁), B: Point(x₂,y₂), C: Point(x₃,y₃)) →
  
  lemma Area_Equivalence() {
    assert(
      Collinear(A,B,C) ↔
      Area(Triangle(A,B,C)) = 0
    )
  } →
  
  lemma Triangle_Area_Determinant() {
    assert(
      Area(Triangle(A,B,C)) = 
      ½ * |x₁ y₁ 1|
          |x₂ y₂ 1|
          |x₃ y₃ 1|
    )
  } →
  
  apply(Area_Equivalence()) →
  apply(Triangle_Area_Determinant()) →
  
  assert(
    Collinear(A,B,C) ↔
    ½ * |x₁ y₁ 1|
        |x₂ y₂ 1| = 0
        |x₃ y₃ 1|
  ) →
  
  assert(
    ½ * |x₁ y₁ 1|
        |x₂ y₂ 1| = 0 ↔
        |x₃ y₃ 1|
    |x₁ y₁ 1|
    |x₂ y₂ 1| = 0
    |x₃ y₃ 1|
  )
}