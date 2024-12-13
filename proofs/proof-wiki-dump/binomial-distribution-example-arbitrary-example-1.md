theorem Binomial_Distribution_Example() {
  let n = 4
  let p = 1/6
  assert(
    ∀X ~ Binomial(n,p) ⇒ P(X=2) = 25/216
  )
} ↔

proof Binomial_Distribution_Example() {
  setVar(n: ℕ = 4) ∧
  setVar(p: ℝ = 1/6) →
  
  lemma Bernoulli_Process() {
    assert(
      DiceRoll ∈ BernoulliProcess ∧
      P(Success) = 1/6
    )
  } →
  
  lemma Binomial_Formula() {
    assert(
      ∀k ∈ ℕ ⇒ P(X=k) = (n choose k) * p^k * (1-p)^(n-k)
    )
  } →
  
  apply(Bernoulli_Process()) →
  apply(Binomial_Formula()) →
  
  calc {
    P(X=2) 
    = (4 choose 2) * (1/6)^2 * (5/6)^2
    = 6 * (1/36) * (25/36)
    = (25/216)
  } →
  
  assert(P(X=2) = 25/216)
}