theorem Bernoulli_Process_Geometric() {
  assert(
    ∀{Xi} [Bernoulli_Process({Xi}, p)] ∧
    ∀E [Experiment(E, {Xi}, "until_failure")] ∧
    ∃k [Successes_Before_Failure(k)] →
    Follows_Geometric_Distribution(k, p)
  )
} ↔

proof Bernoulli_Process_Geometric() {
  setVar(X: DiscreteRandomVariable) →
  define(X, "num_successes_before_failure") →
  
  lemma Trial_Properties() {
    assert(
      Last_Trial_Is_Failure() ∧
      All_Previous_Trials_Are_Success()
    )
  } →
  
  apply(Trial_Properties()) →
  
  assert(
    ∀k ∈ ℕ₀ →
    P(X = k) = p^k * (1-p)
  ) →
  
  lemma Geometric_Distribution_Definition() {
    assert(
      P(X = k) = p^k * (1-p) ↔
      X ~ Geometric(p)
    )
  } →
  
  apply(Geometric_Distribution_Definition()) →
  conclude(Follows_Geometric_Distribution(k, p))
}

theorem Shifted_Geometric() {
  assert(
    ∀{Yi} [Bernoulli_Process({Yi}, p)] ∧
    ∀E [Experiment(E, {Yi}, "until_success")] ∧
    ∃k [Trials_Until_Success(k)] →
    Follows_Shifted_Geometric_Distribution(k, p)
  )
}