theorem Complex_Modulus_Product() {
  assert(
    ∀z₁,z₂,...,zₙ ∈ ℂ ⇒ |z₁z₂...zₙ| = |z₁||z₂|...|zₙ|
  )
} ↔

proof Complex_Modulus_Product() {
  setVar(n: ℕ₊) →
  setVar(P(n): proposition |z₁z₂...zₙ| = |z₁||z₂|...|zₙ|) →
  
  // Base cases
  assert(P(1): |z₁| = |z₁|) →
  lemma Complex_Modulus_Two() {
    assert(P(2): |z₁z₂| = |z₁||z₂|)
  } →
  
  // Inductive step
  inductiveProof(k ≥ 2) {
    assume(P(k): |z₁z₂...zₖ| = |z₁||z₂|...|zₖ|) →
    prove(P(k+1)) {
      assert(|z₁z₂...zₖ₊₁|) →
      assert(|(z₁z₂...zₖ)zₖ₊₁|) by associativity →
      assert(|z₁z₂...zₖ||zₖ₊₁|) by Complex_Modulus_Two() →
      assert(|z₁||z₂|...|zₖ||zₖ₊₁|) by inductiveHypothesis →
      conclude(P(k+1))
    }
  } →
  
  apply(mathematicalInduction) →
  conclude(∀n ∈ ℕ₊: |z₁z₂...zₙ| = |z₁||z₂|...|zₙ|)
}