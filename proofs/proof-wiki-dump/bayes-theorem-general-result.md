theorem Bayes_Theorem_General() {
  let(Ω, Σ, Pr: ProbabilitySpace) →
  let({B₁, B₂, ...}: Partition(Σ)) →
  assert(
    ∀Bᵢ ∈ {B₁, B₂, ...} ∧ ∀A ∈ Σ ⇒
    P(Bᵢ|A) = (P(A|Bᵢ)P(Bᵢ))/P(A) = (P(A|Bᵢ)P(Bᵢ))/(∑ⱼP(A|Bⱼ)P(Bⱼ))
  )
}

proof Bayes_Theorem_General() {
  lemma Total_Probability() {
    assert(
      P(A) = ∑ᵢP(A|Bᵢ)P(Bᵢ)
    )
  } →
  
  lemma Basic_Bayes() {
    assert(
      P(Bᵢ|A) = (P(A|Bᵢ)P(Bᵢ))/P(A)
    )
  } →
  
  apply(Total_Probability()) →
  apply(Basic_Bayes()) →
  assert(
    P(Bᵢ|A) = (P(A|Bᵢ)P(Bᵢ))/P(A) = 
    (P(A|Bᵢ)P(Bᵢ))/(∑ⱼP(A|Bⱼ)P(Bⱼ))
  )
}