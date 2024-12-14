theorem ComposingCommutingIdempotentMaps() {
  let(S: Set) →
  let(f,g: S → S) →
  assert(
    (f ∘ f = f) ∧ (g ∘ g = g) ∧ (f ∘ g = g ∘ f) →
    (f ∘ g) ∘ (f ∘ g) = f ∘ g
  )
}

proof ComposingCommutingIdempotentMaps() {
  // Proof 1
  assert((f ∘ g) ∘ (f ∘ g)) →
  
  lemma AssociativeComposition1() {
    assert((f ∘ g) ∘ (f ∘ g) = f ∘ (g ∘ f) ∘ g)
  } →
  apply(AssociativeComposition1()) →

  lemma CommutingHypothesis() {
    assert(g ∘ f = f ∘ g)
  } →
  apply(CommutingHypothesis()) →
  assert(f ∘ (g ∘ f) ∘ g = f ∘ (f ∘ g) ∘ g) →

  lemma AssociativeComposition2() {
    assert(f ∘ (f ∘ g) ∘ g = (f ∘ f) ∘ (g ∘ g))
  } →
  apply(AssociativeComposition2()) →

  lemma IdempotentHypothesis() {
    assert((f ∘ f = f) ∧ (g ∘ g = g))
  } →
  apply(IdempotentHypothesis()) →
  assert((f ∘ f) ∘ (g ∘ g) = f ∘ g)
}

proof ComposingCommutingIdempotentMaps_Alternative() {
  lemma SelfMapSemigroup() {
    assert(∀h,i: S → S, (h ∘ i): S → S)
  } →
  
  lemma CommutingIdempotentProduct() {
    assert(
      ∀a,b ∈ Semigroup,
      (a² = a) ∧ (b² = b) ∧ (a ∘ b = b ∘ a) →
      (a ∘ b)² = (a ∘ b)
    )
  } →
  
  apply(SelfMapSemigroup()) →
  apply(CommutingIdempotentProduct()) →
  assert((f ∘ g) ∘ (f ∘ g) = f ∘ g)
}