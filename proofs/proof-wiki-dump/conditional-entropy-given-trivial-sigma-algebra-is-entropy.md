theorem ConditionalEntropyTrivialSigmaAlgebra() {
  let(Ω, Σ, Pr: ProbabilitySpace) ∧
  let(𝒜: FiniteSubSigmaAlgebra, 𝒜 ⊆ Σ) ∧
  let(𝒩 = {∅, Ω}: TrivialSigmaAlgebra) →
  assert(
    H(𝒜|𝒩) = H(𝒜)
  )
} ↔

proof ConditionalEntropyTrivialSigmaAlgebra() {
  assert(H(𝒜|𝒩) = H(ξ(𝒜)|ξ(𝒩))) →
  
  lemma ConditionalEntropyDefinition() {
    assert(H(ξ(𝒜)|ξ(𝒩)) = ∑_{B∈ξ(𝒩),Pr(B)>0} ∑_{A∈ξ(𝒜)} Pr(B)φ(Pr(A∩B)/Pr(B)))
  } →
  
  assert(ξ(𝒩) = {Ω}) →
  
  assert(∑_{B∈ξ(𝒩),Pr(B)>0} ∑_{A∈ξ(𝒜)} Pr(B)φ(Pr(A∩B)/Pr(B)) = 
         ∑_{A∈ξ(𝒜)} Pr(Ω)φ(Pr(A∩Ω)/Pr(Ω))) →
  
  lemma ProbabilityMeasureProperty() {
    assert(Pr(Ω) = 1)
  } →
  
  assert(∑_{A∈ξ(𝒜)} Pr(Ω)φ(Pr(A∩Ω)/Pr(Ω)) = ∑_{A∈ξ(𝒜)} φ(Pr(A∩Ω))) →
  
  lemma SubsetProperty() {
    assert(∀A ∈ Σ: A ⊆ Ω → Pr(A∩Ω) = Pr(A))
  } →
  
  assert(∑_{A∈ξ(𝒜)} φ(Pr(A∩Ω)) = ∑_{A∈ξ(𝒜)} φ(Pr(A))) →
  
  lemma EntropyDefinition() {
    assert(∑_{A∈ξ(𝒜)} φ(Pr(A)) = H(ξ(𝒜)))
  } →
  
  assert(H(ξ(𝒜)) = H(𝒜))
}