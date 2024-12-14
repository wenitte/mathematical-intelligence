theorem Circles_Same_Poles_Parallel() {
  assert(
    ∀S: Sphere ∧ ∀C,D: Circle ∧
    (C ⊂ S) ∧ (D ⊂ S) ∧
    ∃A,B: Point(
      isPole(A,C) ∧ isPole(B,C) ∧
      isPole(A,D) ∧ isPole(B,D)
    ) →
    isParallel(C,D)
  )
} ↔

proof Circles_Same_Poles_Parallel() {
  setVar(A,B: Point) →
  assert(isPole(A,C) ∧ isPole(B,C) ∧ isPole(A,D) ∧ isPole(B,D)) →
  
  lemma Circles_In_Planes() {
    assert(∃P1,P2: Plane(
      C ⊂ P1 ∧ D ⊂ P2
    ))
  } →
  
  lemma Planes_Perpendicular_To_Line() {
    assert(
      perpendicular(P1,AB) ∧
      perpendicular(P2,AB)
    )
  } →
  
  apply(Planes_Perpendicular_Same_Line_Are_Parallel()) →
  assert(isParallel(P1,P2)) →
  assert(isParallel(C,D))
}