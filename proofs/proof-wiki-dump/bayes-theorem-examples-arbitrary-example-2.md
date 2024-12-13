theorem Bayes_Example_2() {
  assert(
    given(
      population: P,
      illness: X,
      P(X) = 0.006,
      P(pos|X) = 0.92,
      P(pos|¬X) = 0.005
    ) ⇒
    P(X|pos) = 0.526
  )
}

proof Bayes_Example_2() {
  setVar(
    A: "positive test result",
    B₁: "has illness X",
    B₂: "does not have illness X"
  ) →
  
  assert(P(B₁) = 0.006) →
  assert(P(B₂) = 1 - P(B₁) = 0.994) →
  assert(P(A|B₁) = 0.92) →
  assert(P(A|B₂) = 0.005) →
  
  lemma Bayes_Theorem() {
    assert(
      P(B₁|A) = (P(B₁) × P(A|B₁)) / (P(B₁) × P(A|B₁) + P(B₂) × P(A|B₂))
    )
  } →
  
  apply(Bayes_Theorem()) →
  assert(
    P(B₁|A) = (0.006 × 0.92) / (0.006 × 0.92 + 0.994 × 0.005)
  ) →
  assert(
    P(B₁|A) = 0.00552 / 0.01049
  ) →
  assert(
    P(B₁|A) = 0.526
  )
}