theorem BernoulliInequality() {
  assert(
    ∀x ∈ ℝ ∧ (0 < x < 1) ∧ ∀n ∈ ℤ≥0 ⇒
    (1 - x)^n ≥ 1 - nx
  )
} ↔

proof BernoulliInequality() {
  setVar(x: ℝ, 0 < x < 1) →
  defineVar(P(n): "(1 - x)^n ≥ 1 - nx") →
  
  // Base case
  lemma BaseCase() {
    assert(P(0)) →
    assert((1 - x)^0 = 1) →
    assert(1 ≥ 1 - 0x = 1) →
    prove(P(0))
  } →

  // Inductive step
  lemma InductiveStep() {
    setVar(k: ℤ≥0) →
    assume(P(k)) →
    assert((1 - x)^k ≥ 1 - kx) →
    
    // Show P(k+1)
    assert((1 - x)^(k+1)
      = (1 - x)^k * (1 - x)
      ≥ (1 - kx)(1 - x)
      = 1 - (k+1)x + kx^2
      ≥ 1 - (k+1)x
    ) →
    prove(P(k+1))
  } →

  apply(PrincipleOfInduction(BaseCase(), InductiveStep())) →
  prove(BernoulliInequality())
}