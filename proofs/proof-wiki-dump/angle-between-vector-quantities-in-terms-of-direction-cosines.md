theorem DirectionCosinesAngle() {
  assert(
    ∀a,b ∈ ℝ³ ∧ 
    let θ = angle(a,b) ∧
    let λₐ,μₐ,νₐ = dirCosines(a) ∧
    let λᵦ,μᵦ,νᵦ = dirCosines(b) ⇒
    cos(θ) = λₐλᵦ + μₐμᵦ + νₐνᵦ
  )
}

proof DirectionCosinesAngle() {
  setVar(r: ℝ³) →
  
  lemma VectorComponents() {
    assert(
      ∀r ∈ ℝ³ ⇒
      r.x = |r|λᵣ ∧
      r.y = |r|μᵣ ∧
      r.z = |r|νᵣ
    )
  } →

  assert(a·b = |a||b|cos(θ)) by DotProductDef() →
  
  assert(
    a·b = (|a|λₐ)(|b|λᵦ) + (|a|μₐ)(|b|μᵦ) + (|a|νₐ)(|b|νᵦ)
  ) by VectorComponents() →
  
  assert(
    cos(θ) = (a·b)/(|a||b|)
  ) →
  
  assert(
    cos(θ) = λₐλᵦ + μₐμᵦ + νₐνᵦ
  ) by simplify() →
  
  QED()
}