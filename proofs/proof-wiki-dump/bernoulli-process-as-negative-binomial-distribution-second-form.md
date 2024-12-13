theorem Bernoulli_Process_Negative_Binomial() {
  let {X_i: BernoulliProcess(p)} →
  let {E: Experiment(X_i, until: successes = n)} →
  let {Y: DiscreteRandomVariable(trials_before_n_successes)} →
  assert(
    Y ∼ NegativeBinomial_SecondForm(n,p)
  )
} ↔

proof Bernoulli_Process_Negative_Binomial() {
  lemma Image_Range() {
    assert(Img(Y) = {n, n+1, n+2, ...}) →
    assert(∀x ∈ Img(Y): x ≥ n)
  } →
  
  lemma Trial_Structure() {
    let {x: trials_total} →
    assert(
      (trials_before_x = x-1) ∧
      (successes_before_x = n-1) ∧
      (failures_before_x = x-n) ∧
      (trial_x = success)
    )
  } →
  
  apply(Probability_Formula()) {
    assert(
      P(Y = x) = (
        choose(x-1, n-1) * 
        (1-p)^(x-n) * 
        p^n
      )
    ) →
    assert(
      ∀x ∈ {n, n+1, n+2, ...}: 
      matches_negative_binomial_second_form(P(Y = x))
    )
  } →
  
  conclude(
    Y ∼ NegativeBinomial_SecondForm(n,p)
  )
}