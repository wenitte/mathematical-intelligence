theorem ConditionalExpectation_IndependentSigma() {
  let(Ω, Σ, Pr: ProbabilitySpace) ∧
  let(G ⊆ Σ: SubSigmaAlgebra) ∧
  let(X: IntegrableRandomVariable) ∧
  let(σ(X): SigmaAlgebra) ∧
  let(H ⊆ Σ: SubSigmaAlgebra) ∧
  assert(H independent_of σ(σ(X), G)) ∧
  let(σ(G,H): SigmaAlgebra = generate(G ∪ H)) ∧
  let(E[X|G]: ConditionalExpectation) ∧
  let(E[X|σ(G,H)]: ConditionalExpectation)
  
  assert(
    E[X|σ(G,H)] = E[X|G] almost_surely
  )
} ↔

proof ConditionalExpectation_IndependentSigma() {
  assume(X ≥ 0) →
  let(S = {G ∩ H | G ∈ G, H ∈ H}) →
  
  lemma PiSystem() {
    assert(Ω ∈ S) ∧
    assert(∀G₁∩H₁, G₂∩H₂ ∈ S → G₁∩H₁ ∩ G₂∩H₂ ∈ S)
  } →
  
  lemma GeneratesSigmaAlgebra() {
    assert(G ⊆ S) ∧
    assert(H ⊆ S) ∧
    assert(S ⊆ σ(G,H)) →
    assert(σ(S) = σ(G,H))
  } →

  let(μ₁: Measure = ∫_A X dPr) ∧
  let(μ₂: Measure = ∫_A E[X|G] dPr) →
  
  lemma MeasuresEqual() {
    ∀G∈G, H∈H →
    let(A = G ∩ H) →
    assert(μ₁(A) = E[X·χ_G·χ_H]) ∧
    assert(χ_G is G-measurable) ∧
    assert(X·χ_G is σ(σ(X),G)-measurable) →
    apply(IndependentExpectationProduct) →
    assert(μ₁(A) = E[X·χ_G]·Pr(H)) ∧
    assert(μ₂(A) = E[X·χ_G]·Pr(H)) →
    assert(μ₁(A) = μ₂(A))
  } →
  
  apply(UniquenessOfMeasures) →
  assert(μ₁ = μ₂) →
  apply(ConditionalExpectationUniqueness) →
  assert(E[X|σ(G,H)] = E[X|G] almost_surely)
}

corollary ConditionalExpectation_Independent() {
  let(H ⊆ Σ: SubSigmaAlgebra) ∧
  let(X: IntegrableRandomVariable) ∧
  assert(σ(X) independent_of H) →
  assert(E[X|H] = E[X] almost_surely)
}