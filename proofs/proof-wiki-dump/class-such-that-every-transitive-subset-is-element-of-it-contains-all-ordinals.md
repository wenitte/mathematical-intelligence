theorem TransitiveSubsetContainsOrdinals() {
  assert(
    ∀K: Class ⋀ (∀S ⊆ K: isTransitive(S) → S ∈ K) →
    ∀α: Ordinal → α ∈ K
  )
}

proof TransitiveSubsetContainsOrdinals() {
  setVar(K: Class) →
  setVar(On: Class, "class of all ordinals") →
  
  lemma WellOrderedOrdinals() {
    assert(isWellOrdered(On, ⊆))
  } →
  
  apply(TransfiniteInductionPrinciple()) →
  
  setVar(α: Ordinal) →
  assert(
    ∀β: Ordinal → (β < α → β ∈ K)
  ) →
  
  lemma AlphaSubsetK() {
    assert(∀β < α → β ∈ K) →
    assert(α ⊆ K)
  } →
  
  lemma OrdinalTransitive() {
    assert(isTransitive(α))
  } →
  
  assert(isTransitive(α) ∧ α ⊆ K) →
  apply(hypothesis) →
  assert(α ∈ K) →
  
  conclude(
    (∀β < α → β ∈ K) → α ∈ K
  ) →
  
  apply(TransfiniteInduction(
    base: α ∈ K,
    step: (∀β < α → β ∈ K) → α ∈ K
  )) →
  
  assert(∀α: Ordinal → α ∈ K)
}