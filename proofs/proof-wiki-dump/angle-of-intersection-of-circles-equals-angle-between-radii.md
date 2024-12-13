theorem CircleIntersectionAngle() {
  assert(
    ∀C,C' ∈ Points, ∀A,B ∈ Points, 
    let(Circle1 = Circle(C), Circle2 = Circle(C')) ∧
    Intersect(Circle1, Circle2) = {A,B} →
    IntersectionAngle(Circle1, Circle2) = ∠(CA,C'A)
  )
}

proof CircleIntersectionAngle() {
  setVar(
    F: Point, // Tangent point on Circle1
    D: Point  // Tangent point on Circle2
  ) →

  lemma NormalThroughCenter() {
    assert(
      ∀circle ∈ Circles, ∀p ∈ circle →
      Radius(circle,p) ⊥ Tangent(circle,p)
    )
  } →

  apply(NormalThroughCenter()) →
  assert(CA ⊥ TangentAt(A,Circle1)) →
  assert(C'A ⊥ TangentAt(A,Circle2)) →
  assert(∠FAC = 90° ∧ ∠DAC' = 90°) →
  
  // Start angle chain
  assert(∠FAC' = ∠FAC + ∠CAC') →
  assert(∠FAC' = ∠FAD + ∠DAC') →
  assert(∠FAC = ∠DAC') →
  assert(∠FAC + ∠CAC' = ∠FAD + ∠FAC) →
  assert(∠FAD = ∠CAC') →
  
  // Conclude
  assert(IntersectionAngle(Circle1,Circle2) = ∠CAC')
}