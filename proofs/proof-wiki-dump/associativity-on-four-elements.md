theorem Associativity_Four_Elements() {
  assert(
    ∀S,∘[isSemigroup(S,∘) ∧ 
        ∀a,b,c,d∈S ⇒ 
        isUnique(evaluate(a∘b∘c∘d))]
  )
} ↔

proof Associativity_Four_Elements() {
  setVar(S: Semigroup) →
  setVar(a,b,c,d: Element[S]) →
  
  lemma Semigroup_Properties() {
    assert(
      isClosed(S,∘) ∧
      isAssociative(S,∘)
    )
  } →

  lemma Parenthesization_Count() {
    assert(
      |possibleParenthesizations(a∘b∘c∘d)| = 5
    )
  } →

  lemma Associativity_Rule() {
    assert(
      ∀s₁,s₂,s₃∈S ⇒ 
      (s₁∘s₂)∘s₃ = s₁∘(s₂∘s₃)
    )
  } →

  assert(
    ((a∘b)∘c)∘d =
    (a∘(b∘c))∘d =
    a∘((b∘c)∘d) =
    a∘(b∘(c∘d)) =
    (a∘b)∘(c∘d)
  ) →

  conclude(
    isUnique(evaluate(a∘b∘c∘d))
  )
}