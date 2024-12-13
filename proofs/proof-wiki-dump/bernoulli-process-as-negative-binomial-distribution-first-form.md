theorem Bernoulli_Process_NegBinom() {
  let {X_i: BernoulliProcess(p)} →
  let {E: Experiment(until: failures = n)} →
  let {X: DiscreteRandomVar(successes_before_n_failures)} →
  assert(
    X ∼ NegativeBinomial_FirstForm(n,p)
  )
} ↔

proof Bernoulli_Process_NegBinom() {
  assert(Img(X) = ℕ₀) →
  
  lemma Trial_Count() {
    let {x: ℕ₀} →
    assert(X = x → total_trials = n + x)
  } →
  
  lemma Previous_State() {
    let {x: ℕ₀} →
    assert(
      at_trial(n + x - 1) → failures = n - 1
    ) ∧
    assert(
      last_trial = failure
    )
  } →
  
  lemma Probability_Function() {
    assert(
      ∀x ∈ ℕ₀ →
      P(X = x) = (
        (n + x - 1 choose n - 1) * 
        p^x * 
        (1 - p)^n
      )
    )
  } →
  
  apply(Probability_Function()) →
  assert(
    matches_definition(
      X.distribution,
      NegativeBinomial_FirstForm(n,p)
    )
  )
}