theorem Coin_Tossing_Bernoulli() {
  assert(
    ∀E(CoinToss) ∃B(BernoulliTrial) : E ≡ B
  )
} ↔

proof Coin_Tossing_Bernoulli() {
  setVar(E: Experiment) →
  assert(
    Outcomes(E) = {H, T}
  ) →
  
  lemma Probability_Space() {
    define(
      E = (Ω, Σ, Pr)
    ) ∧
    assert(
      Ω = {H, T} ∧
      Σ = P(Ω)
    )
  } →
  
  lemma Probability_Function() {
    define(
      Pr: Ω → ℝ
    ) ∧
    assert(
      ∀ω ∈ Ω : Pr(ω) = {
        p       if ω = H
        1-p     if ω = T
      }
    ) ∧
    assert(
      p ∈ [0,1] ∧
      Pr(H) + Pr(T) = 1
    )
  } →
  
  apply(Probability_Space()) →
  apply(Probability_Function()) →
  
  assert(
    |Ω| = 2 ∧
    Σ = P(Ω) ∧
    ∃p ∈ [0,1] : Pr(Success) = p
  ) →
  
  conclude(
    Properties(E) ≡ Definition(BernoulliTrial)
  )
}