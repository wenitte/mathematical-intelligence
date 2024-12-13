theorem CircleIntersectionAngles() {
  assert(
    ∀ C,C' ∈ Points, ∀ CC,CC' ∈ Circles(
      (Center(CC) = C ∧ Center(CC') = C') ∧
      Intersect(CC,CC') = {A,B} →
      IntersectionAngle(CC,CC',A) = IntersectionAngle(CC,CC',B)
    )
  )
} ↔

proof CircleIntersectionAngles() {
  setVar(C,C': Points) →
  setVar(CC,CC': Circles) →
  setVar(A,B: Points) →
  
  assert(CA = CB) by RadiusDefinition(CC) →
  assert(C'A = C'B) by RadiusDefinition(CC') →

  lemma TriangleCongruence() {
    assert(
      CA = CB ∧
      C'A = C'B ∧
      CC' = CC' →
      Triangle(CAC') ≅ Triangle(CBC')
    )
  } →

  apply(TriangleCongruence()) →
  assert(∠CAC' = ∠CBC') by CongruentTriangles() →

  lemma IntersectionRadiiAngle() {
    assert(
      IntersectionAngle(CC,CC',P) = ∠CPC'
      where P ∈ Intersect(CC,CC')
    )
  } →

  apply(IntersectionRadiiAngle()) →
  assert(
    IntersectionAngle(CC,CC',A) = ∠CAC' ∧
    IntersectionAngle(CC,CC',B) = ∠CBC' →
    IntersectionAngle(CC,CC',A) = IntersectionAngle(CC,CC',B)
  )
}