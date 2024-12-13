theorem Finite_Choice_from_Ordering() {
  assert(
    (OrderingPrinciple() ∧ 
     ∃𝒮(Set(𝒮) ∧ NonEmpty(𝒮) ∧ ∀S∈𝒮(Finite(S) ∧ NonEmpty(S)))) →
    ∃f(ChoiceFunction(f, 𝒮))
  )
} ↔

proof Finite_Choice_from_Ordering() {
  setVar(𝒮: Set) →
  apply(AxiomOfUnion()) →
  assert(∃U(U = ⋃𝒮)) →
  setVar(U = ⋃𝒮) →
  
  apply(OrderingPrinciple()) →
  assert(∃≼(TotalOrdering(≼, U))) →
  
  lemma All_Sets_Are_Chains() {
    assert(∀S∈𝒮(Chain(S, U, ≼)))
  } →
  
  lemma Min_Elements_Exist() {
    assert(∀S∈𝒮(Finite(S) ∧ NonEmpty(S) ∧ Chain(S, U, ≼)) →
           ∀S∈𝒮(∃min(min = Min(S, ≼))))
  } →
  
  defineFunction(f: 𝒮 → U) {
    ∀S∈𝒮(f(S) = Min(S, ≼))
  } →
  
  assert(ChoiceFunction(f, 𝒮)) ∧
  assert(∀S∈𝒮(f(S)∈S))
}