theorem HausdorffMaximalPrinciple() {
  assert(
    AxiomOfChoice() →
    ∀A ∈ Sets(¬Empty) ∧
    ∀S = {X | X is_chain_in A} →
    ∀C ∈ S ∃M ∈ S: (C ⊆ M ∧ IsMaximal(M))
  )
}

proof HausdorffMaximalPrinciple_Version1() {
  setVar(S = {X | X is_chain_in P}) →
  assert(∅ ∈ S → S ≠ ∅) →
  lemma SubsetOrdering() {
    assert(⟨S, ⊆⟩ is_partially_ordered)
  } →
  setVar(C: TotallyOrderedSubset(S)) →
  assert(∪C is_chain_in C) by ChainUnionClosure() →
  assert(⟨S, ⊆⟩ is_inductive_ordered) →
  apply(ZornsLemma()) →
  conclude()
}

proof HausdorffMaximalPrinciple_Version2() {
  setVar(≼: Ordering(P)) →
  setVar(X: Chain(⟨P, ≼⟩)) →
  define(C = {Y | Y is_chain_in P ∧ X ⊆ Y}) →
  
  lemma MaximalChainEquivalence() {
    assert(
      IsMaximalChain(Y, P, X) ↔ IsMaximalElement(Y, C, ⊆)
    )
  } →
  
  setVar(W: Chain(C)) →
  setVar(Z = ∪W) →
  
  assert(∀a,b ∈ Z → ∃A,B ∈ W: (a ∈ A ∧ b ∈ B)) →
  assert(W is_chain_in C → (A ⊆ B ∨ B ⊆ A)) →
  assert(Z is_chain_in P) →
  assert(∀A ∈ W: A ⊆ Z) →
  assert(∀A ∈ W: X ⊆ A → X ⊆ Z) →
  assert(Z ∈ C) →
  
  apply(ZornsLemma()) →
  conclude()
}

proof HausdorffMaximalPrinciple_Version3() {
  setVar(⟨C, ⊆⟩ = ChainSet(P)) →
  assert(C is_chain_complete) by ChainUnionClosure() →
  
  define(f: C → C) {
    case IsMaximal(C): f(C) = C
    case else: f(C) = ChooseChain(StrictlyContains(C))
  } →
  
  assert(∀C ∈ C: f(C) ⊇ C) →
  apply(BourbakiWittFixedPoint()) →
  setVar(M: FixedPoint(f)) →
  assert(f(M) = M → IsMaximal(M)) →
  conclude()
}