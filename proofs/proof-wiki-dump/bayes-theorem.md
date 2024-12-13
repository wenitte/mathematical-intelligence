theorem Bayes_Theorem() {
  let(Ω, Σ, Pr: ProbabilitySpace) →
  let(P(A|B): ConditionalProbability) →
  assert(
    (Pr(A) > 0 ∧ Pr(B) > 0) ⇒ 
    P(B|A) = (P(A|B) * Pr(B))/Pr(A)
  )
} ↔

proof Bayes_Theorem() {
  setVar(A, B: Event) →
  
  lemma Conditional_Prob_Def() {
    assert(
      P(A|B) = Pr(A ∩ B)/Pr(B) ∧
      P(B|A) = Pr(A ∩ B)/Pr(A)
    )
  } →
  
  apply(Conditional_Prob_Def()) →
  assert(P(A|B) * Pr(B) = Pr(A ∩ B)) →
  assert(Pr(A ∩ B) = P(B|A) * Pr(A)) →
  
  lemma Cross_Multiplication() {
    assert(P(A|B) * Pr(B) = P(B|A) * Pr(A))
  } →
  
  apply(Cross_Multiplication()) →
  assert(Pr(A) > 0) →
  assert(P(B|A) = (P(A|B) * Pr(B))/Pr(A))
} ↔

theorem Bayes_Theorem_Partition() {
  let({B₁, B₂, ...}: Partition(Σ)) →
  assert(
    ∀i: P(Bᵢ|A) = (P(A|Bᵢ) * Pr(Bᵢ))/Pr(A) =
    (P(A|Bᵢ) * Pr(Bᵢ))/(∑ⱼ P(A|Bⱼ) * Pr(Bⱼ))
  )
}