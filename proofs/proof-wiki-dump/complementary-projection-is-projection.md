theorem Complementary_Projection_Is_Projection() {
  assert(
    ∀H ∈ HilbertSpace ∧
    ∀A ∈ Projection(H) ⇒
    (I - A) ∈ Projection(H)
  )
} ↔

proof Complementary_Projection_Is_Projection() {
  setVar(H: HilbertSpace) →
  setVar(A: Projection(H)) →
  
  apply(Characterization_of_Projections) →
  assert(A = A* ∧ A² = A) →
  
  lemma Adjoint_Of_Complement() {
    assert((I - A)* = I* - A*) →
    assert(I* = I ∧ A* = A) →
    assert((I - A)* = I - A)
  } →
  
  apply(Complementary_Idempotent_Is_Idempotent) →
  assert((I - A)² = I - A) →
  
  assert((I - A) = (I - A)* ∧ (I - A)² = (I - A)) →
  apply(Characterization_of_Projections) →
  assert((I - A) ∈ Projection(H))
}

theorem Complementary_Projection_Of_Complementary_Projection() {
  assert(
    ∀H ∈ HilbertSpace ∧
    ∀A ∈ Projection(H) ⇒
    I - (I - A) = A
  )
} ↔

proof Complementary_Projection_Of_Complementary_Projection() {
  setVar(H: HilbertSpace) →
  setVar(A: Projection(H)) →
  assert(I - (I - A) = I - I + A = A)
}