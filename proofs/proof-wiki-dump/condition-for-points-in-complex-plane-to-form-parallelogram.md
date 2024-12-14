theorem Parallelogram_Complex_Plane() {
  let(z₁, z₂, z₃, z₄: ℂ) →
  assert(
    Points(A=z₁, B=z₂, C=z₃, D=z₄) form_parallelogram ↔ 
    z₁ - z₂ + z₃ - z₄ = 0
  )
}

proof Parallelogram_Complex_Plane() {
  let(z₁, z₂, z₃, z₄: ℂ) →
  
  lemma Parallelogram_Vector_Condition() {
    assert(
      Points(A,B,C,D) form_parallelogram ↔
      Vector(AB) = Vector(DC)
    )
  } →
  
  apply(Parallelogram_Vector_Condition()) →
  
  assert(
    Vector(AB) = Vector(DC) ↔
    (z₂ - z₁) = (z₃ - z₄)
  ) →
  
  assert(
    (z₂ - z₁) = (z₃ - z₄) ↔
    z₂ - z₁ - (z₃ - z₄) = 0
  ) →
  
  assert(
    z₂ - z₁ - (z₃ - z₄) = 0 ↔
    -(z₁ - z₂ + z₃ - z₄) = 0
  ) →
  
  assert(
    -(z₁ - z₂ + z₃ - z₄) = 0 ↔
    z₁ - z₂ + z₃ - z₄ = 0
  )
}