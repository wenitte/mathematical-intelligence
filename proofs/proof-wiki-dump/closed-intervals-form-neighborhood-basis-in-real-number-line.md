theorem ClosedIntervalNeighborhoodBasis() {
  assert(
    ∀a ∈ ℝ ⇒ 
    let 𝔹ₐ = {[a-ε, a+ε] : ε ∈ ℝ₊} ⇒
    isBasis(𝔹ₐ, neighborhoodSystem(a))
  )
} ↔

proof ClosedIntervalNeighborhoodBasis() {
  setVar(a: ℝ) →
  setVar(N: neighborhood(a)) →
  
  lemma ExistenceOfOpenBall() {
    assert(∃ε' ∈ ℝ₊: Bε'(a) ⊆ N) ∧
    assert(Bε'(a) = (a-ε', a+ε'))
  } →
  
  lemma ClosedBallSubset() {
    setVar(ε: ℝ₊) →
    assert(ε < ε') →
    assert([a-ε, a+ε] ⊆ (a-ε', a+ε')) →
    assert([a-ε, a+ε] ⊆ N)
  } →
  
  lemma OpenBallInClosed() {
    assert((a-ε, a+ε) ⊆ [a-ε, a+ε]) ∧
    assert((a-ε, a+ε) = Bε(a))
  } →
  
  apply(ExistenceOfOpenBall()) →
  apply(ClosedBallSubset()) →
  apply(OpenBallInClosed()) →
  
  assert([a-ε, a+ε] ∈ 𝔹ₐ) ∧
  assert([a-ε, a+ε] ⊆ N) ∧
  assert([a-ε, a+ε] ∈ neighborhood(a)) →
  
  conclude(isBasis(𝔹ₐ, neighborhoodSystem(a)))
}