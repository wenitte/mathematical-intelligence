theorem Chain_Is_Directed(S, ≼) {
  let(S: OrderedSet) ∧
  let(≼: OrderRelation(S)) ∧
  let(C: Subset(S)) ∧
  assert(C ≠ ∅) ∧
  assert(isChain(C, S, ≼)) →
  assert(isDirected(C, S, ≼))
} ↔

proof Chain_Is_Directed() {
  setVar(x, y: ElementOf(C)) →
  
  lemma ChainConnected() {
    assert(
      isChain(C) → 
      (x ≼ y ∨ y ≼ x)
    )
  } →
  
  apply(ChainConnected()) →
  
  lemma WLOG() {
    assume(x ≼ y) →
    assert(∃z ∈ C: x ≼ z ∧ y ≼ z)
  } →
  
  let(z = y) →
  assert(x ≼ z) →
  assert(y ≼ z) →  // by reflexivity of ≼
  
  assert(
    ∀a,b ∈ C: ∃z ∈ C: 
    (a ≼ z ∧ b ≼ z)
  ) →
  
  conclude(isDirected(C))
}