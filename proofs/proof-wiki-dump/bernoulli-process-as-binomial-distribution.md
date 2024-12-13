theorem BernoulliProcessBinomial() {
  assert(
    ∀{Xi: i ∈ ℕ, i ≤ n} [Bernoulli_Process(Xi, n, p)] →
    ∃X[X ~ Binomial(n,p)] ∧
    (X ~ Binomial(1,p) ↔ X ~ Bernoulli(p))
  )
} ↔

proof BernoulliProcessBinomial() {
  setVar(Ω: {sequence_space(Xi, n)}) →
  setVar(Σ: PowerSet(Ω)) →
  
  lemma ProbabilityMeasure() {
    assert(
      ∀ω ∈ Ω: P(ω) = p^s(ω) * (1-p)^(n-s(ω)) ∧
      ∀A ∈ Σ: P(A) = ∑{ω∈A} P(ω)
    )
  } →

  defineVar(Yi: Ω → {0,1}) {
    Yi(ω) = {
      1 if ωi = success
      0 if ωi = failure
    }
  } →

  lemma YiDistribution() {
    assert(
      P(Yi = 1) = ∑{ω: ωi=success} p^s(ω) * (1-p)^(n-s(ω)) →
      P(Yi = 1) = ∑{r=1→n} (n-1 choose r-1) * p^r * (1-p)^(n-r) →
      P(Yi = 1) = p * ∑{r=0→n-1} (n-1 choose r) * p^r * (1-p)^(n-1-r) →
      P(Yi = 1) = p * (p + (1-p))^(n-1) →
      P(Yi = 1) = p ∧
      P(Yi = 0) = 1-p
    )
  } →

  defineVar(Sn: Ω → ℕ) {
    Sn(ω) = ∑{i=1→n} Yi(ω)
  } →

  lemma SnDistribution() {
    assert(
      P(Sn = k) = P({ω ∈ Ω: s(ω) = k}) →
      P(Sn = k) = ∑{ω: s(ω)=k} P(ω) →
      P(Sn = k) = ∑{ω: s(ω)=k} p^k * (1-p)^(n-k) →
      P(Sn = k) = (n choose k) * p^k * (1-p)^(n-k)
    )
  } →

  conclude(Sn ~ Binomial(n,p))
}