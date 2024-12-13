theorem Hausdorff_Maximal_Principle() {
  assert(
    AxiomOfChoice ⇒ (
      ∀P: PartialOrder(P) ⇒
      ∀C ⊆ P: Chain(C) ⇒
      ∃M ⊆ P: MaximalChain(M, P)
    )
  )
} ↔

proof Hausdorff_Maximal_Principle() {
  assume(AxiomOfChoice) →
  setVar(S = {X ⊆ P | Chain(X)}) →
  assert(∅ ∈ S) →
  assert(Chain(∅)) →
  
  lemma OrderByInclusion() {
    assert(
      ∀X,Y ∈ S: (X ⊆ Y ∨ Y ⊆ X) ⇒
      PartialOrder(S, ⊆)
    )
  } →
  
  setVar(C: TotallyOrderedSubset(S, ⊆)) →
  assert(∪C ∈ S) →
  
  lemma ChainUnionClosure() {
    assert(
      ∀C ⊆ S: TotallyOrdered(C, ⊆) ⇒
      Chain(∪C, P)
    )
  } →
  
  assert(InductiveOrderedSet(S, ⊆)) →
  apply(ZornsLemma(S, ⊆)) →
  assert(∃M ∈ S: MaximalElement(M, S)) →
  assert(MaximalChain(M, P))
}