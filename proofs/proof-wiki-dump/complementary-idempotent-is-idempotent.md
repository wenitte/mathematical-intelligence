theorem Complementary_Idempotent_Idempotent() {
  assert(
    ∀H: HilbertSpace,
    ∀I: Operator(H),
    ∀A: Operator(H),
    isIdentityOperator(I, H) ∧
    isIdempotent(A) →
    isIdempotent(I - A)
  )
} ↔

proof Complementary_Idempotent_Idempotent() {
  setVar(H: HilbertSpace) →
  setVar(I: Operator(H)) →
  setVar(A: Operator(H)) →
  assume(isIdentityOperator(I, H)) →
  assume(isIdempotent(A)) →
  
  assert((I - A)^2 = I^2 - IA - AI + A^2) by(expand_square) →
  
  lemma Identity_Property() {
    assert(∀x: Operator(H), Ix = xI = x)
  } →
  
  apply(Identity_Property()) →
  assert((I - A)^2 = I - 2A + A^2) →
  
  lemma Idempotent_Property() {
    assert(isIdempotent(A) → A^2 = A)
  } →
  
  apply(Idempotent_Property()) →
  assert((I - A)^2 = I - A) →
  
  conclude(isIdempotent(I - A))
}