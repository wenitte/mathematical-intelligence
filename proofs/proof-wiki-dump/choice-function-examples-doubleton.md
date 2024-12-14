theorem Choice_Functions_Doubleton() {
  assert(
    ∀S: Set | |S| = 2 ⇒ 
    ∃f₁,f₂: ChoiceFunction | 
    (f₁ ≠ f₂) ∧ 
    (|ChoiceFunctions(S)| = 2)
  )
} ↔

proof Choice_Functions_Doubleton() {
  setVar(S = {1,2}) →
  define(NonEmptySubsets(S) = {{1}, {2}, {1,2}}) →
  
  lemma SingletonChoices() {
    assert(
      ∀A ∈ NonEmptySubsets(S) | |A| = 1 ⇒
      |PossibleChoices(A)| = 1
    )
  } →
  
  lemma DoubletonChoices() {
    assert(
      ∀A ∈ NonEmptySubsets(S) | |A| = 2 ⇒
      |PossibleChoices(A)| = 2
    )
  } →
  
  apply(ProductRule) →
  assert(|ChoiceFunctions(S)| = 1 × 1 × 2 = 2) →
  
  define(f₁: ChoiceFunction) {
    f₁({1}) = 1 ∧
    f₁({2}) = 2 ∧
    f₁({1,2}) = 1
  } →
  
  define(f₂: ChoiceFunction) {
    f₂({1}) = 1 ∧
    f₂({2}) = 2 ∧
    f₂({1,2}) = 2
  } →
  
  assert(f₁ ≠ f₂) →
  conclude(|ChoiceFunctions(S)| = 2)
}