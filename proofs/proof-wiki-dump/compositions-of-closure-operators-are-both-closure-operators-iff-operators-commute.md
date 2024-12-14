theorem Compositions_Of_Closure_Operators() {
  let S be OrderedSet(≼) →
  let f, g be ClosureOperators(S) →
  assert(
    (f ∘ g is ClosureOperator ∧ g ∘ f is ClosureOperator) ↔
    (f ∘ g = g ∘ f) ↔
    (Img(f ∘ g) = Img(g ∘ f))
  )
}

proof Compositions_Of_Closure_Operators() {
  lemma L1_Inflationary() {
    assert(
      (f is ClosureOperator ∧ g is ClosureOperator) →
      (f ∘ g is Inflationary ∧ g ∘ f is Inflationary)
    )
  } →

  lemma L2_Increasing() {
    assert(
      (f is ClosureOperator ∧ g is ClosureOperator) →
      (f ∘ g is Increasing ∧ g ∘ f is Increasing)
    )
  } →

  apply(L1_Inflationary()) →
  apply(L2_Increasing()) →

  assert(
    (f ∘ g is ClosureOperator ↔ f ∘ g is Idempotent) ∧
    (g ∘ f is ClosureOperator ↔ g ∘ f is Idempotent)
  ) →

  apply(Composition_Of_Inflationary_And_Idempotent_Mappings()) →
  conclude()
}