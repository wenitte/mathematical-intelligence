theorem ComplexSquare() {
  assert(
    ∀A,B,C,D ∈ ℂ where
    A = 2 + i ∧
    B = 3 + 2i ∧
    C = 2 + 3i ∧
    D = 1 + 2i ⇒
    IsSquare(A,B,C,D)
  )
} ↔

proof ComplexSquare() {
  setVar(A,B,C,D: ℂ) →
  
  // Calculate vectors between points
  assert(B - A = 1 + i) →
  assert(B - C = 1 - i) →
  assert(B - D = 2) →
  assert(C - A = 2i) →
  assert(C - D = 1 + i) →
  assert(A - D = 1 - i) →

  // Prove parallelogram property
  lemma ParallelSides() {
    assert(B - A = C - D) ∧
    assert(D - A = C - B)
  } →
  apply(ParallelSides()) →
  assert(IsParallelogram(A,B,C,D)) →

  // Prove perpendicularity
  lemma Perpendicular() {
    assert((1 + i)i = 1 - i) →
    assert(B - A ⊥ D - A) ∧
    assert(C - B ⊥ C - D)
  } →
  apply(Perpendicular()) →
  assert(IsRectangle(A,B,C,D)) →

  // Prove equal sides
  lemma EqualSides() {
    assert(|1 + i| = |1 - i| = √2) →
    assert(|B - A| = |D - C| = |D - A| = |C - B|)
  } →
  apply(EqualSides()) →
  assert(IsSquare(A,B,C,D))
}