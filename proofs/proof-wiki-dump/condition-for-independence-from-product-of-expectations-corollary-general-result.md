theorem IndependentExpectationProduct() {
  assert(
    ∀(Ω,Σ,Pr: ProbabilitySpace) ∧
    ∀n∈ℤ_>0 ∧
    ∀X_k(k∈[1..n]: DiscreteRandomVariable) ∧
    independent(X_1,...,X_n) ⇒
    E[∏(k=1..n) X_k] = ∏(k=1..n) E[X_k]
  )
} ↔

proof IndependentExpectationProduct() {
  setVar(n: ℤ_>0) →
  define(P(n): E[∏(k=1..n) X_k] = ∏(k=1..n) E[X_k]) →
  
  // Base case
  lemma BaseCase() {
    assert(P(1)) ↔
    assert(E[∏(k=1..1) X_k] = E[X_1] = ∏(k=1..1) E[X_k])
  } →
  
  // Inductive step
  lemma InductiveStep() {
    setVar(r: ℤ_>0) →
    assume(P(r)) →
    assert(
      E[∏(k=1..r+1) X_k] =
      E[X_(r+1) ∏(k=1..r) X_k] →
      E[X_(r+1)]·E[∏(k=1..r) X_k] →  // By independence
      E[X_(r+1)]·∏(k=1..r) E[X_k] →  // By inductive hypothesis
      ∏(k=1..r+1) E[X_k]
    ) →
    conclude(P(r) → P(r+1))
  } →
  
  apply(MathematicalInduction(BaseCase(), InductiveStep())) →
  conclude(∀n∈ℤ_>0: P(n))
}