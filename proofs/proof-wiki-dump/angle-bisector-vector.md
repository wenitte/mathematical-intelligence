theorem AngleBisectorVector() {
  assert(
    ∀u,v ∈ Vectors: (||u|| ≠ 0 ∧ ||v|| ≠ 0) →
    (||u||v + ||v||u) bisects_angle(u,v)
  )
} ↔

proof AngleBisectorVector_Geometric1() {
  setVars(u,v: Vector, γ,α,β,δ: Angle) →
  assert(γ = angle_between(u,v)) →
  assert(α = angle_between(||u||v, ||v||u)) →
  assert(β = angle_between(u, ||u||v + ||v||u)) →
  
  lemma EqualLengths() {
    assert(|||u||v| = |||v||u|)
  } →
  
  assert(isosceles_triangle(||u||v, ||v||u, ||u||v + ||v||u)) →
  assert(2β + α = 180°) →
  assert(β = 90° - α/2) →
  assert(2β = 180° - α) →
  
  assert(δ = α) by ParallelLines() →
  assert(δ + γ = 180°) →
  assert(α + γ = 180°) →
  assert(γ = 180° - α) →
  assert(γ = 2β) →
  QED()
}

proof AngleBisectorVector_Geometric2() {
  setVars(u,v: Vector) →
  assert(|||u||v| = |||v||u|) →
  assert(forms_rhombus(||u||v, ||v||u)) →
  apply(DiagonalsOfRhombusBisectAngles()) →
  QED()
}

proof AngleBisectorVector_Algebraic() {
  setVars(u,v: Vector, a = ||u||v + ||v||u) →
  
  assert(cos(∠u,a) = (u·a)/(||u||||a||)) →
  assert(cos(∠u,a) = (u·(||u||v + ||v||u))/(||u||||a||)) →
  assert(cos(∠u,a) = (||u||(u·v) + ||v||(u·u))/(||u||||a||)) →
  assert(cos(∠u,a) = (||u||(u·v) + ||v||||u||²)/(||u||||a||)) →
  assert(cos(∠u,a) = ((u·v) + ||u||||v||)/||a||) →
  
  assert(cos(∠a,v) = (v·a)/(||v||||a||)) →
  assert(cos(∠a,v) = (v·(||u||v + ||v||u))/(||v||||a||)) →
  assert(cos(∠a,v) = (||u||(v·v) + ||v||(u·v))/(||v||||a||)) →
  assert(cos(∠a,v) = (||v||(u·v) + ||u||||v||²)/(||v||||a||)) →
  assert(cos(∠a,v) = ((u·v) + ||u||||v||)/||a||) →
  
  assert(cos(∠u,a) = cos(∠a,v)) →
  assert(∠u,a = ∠a,v) by CosineInjectiveOn0ToPi() →
  QED()
}