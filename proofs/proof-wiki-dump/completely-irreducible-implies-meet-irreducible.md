theorem Completely_Irreducible_Implies_Meet_Irreducible() {
  assert(
    ∀L(MeetSemilattice(L) ∧ L = ⟨S, ∧, ⪯⟩) →
    ∀p ∈ S(CompletelyIrreducible(p) → MeetIrreducible(p))
  )
} ↔

proof Completely_Irreducible_Implies_Meet_Irreducible() {
  setVar(L: MeetSemilattice) →
  setVar(p ∈ S) →
  assume(CompletelyIrreducible(p)) →
  
  lemma CompletelyIrreducibleCharacterization() {
    assert(∃q ∈ S(
      p ≺ q ∧
      (∀s ∈ S(p ≺ s → q ⪯ s)) ∧
      p⪰ = {p} ∪ q⪰
    ))
  } →
  
  setVar(q ∈ S: satisfies(CompletelyIrreducibleCharacterization())) →
  
  proof_by_contradiction() {
    assume(¬MeetIrreducible(p)) →
    assert(∃a,b ∈ S(p = a ∧ b ∧ a ≠ p ∧ b ≠ p)) →
    
    apply(MeetPrecedesOperands) →
    assert(p ⪯ b) →
    assert(p ≺ b) →
    assert(q ⪯ b) →
    
    apply(MeetPrecedesOperands) →
    assert(p ⪯ a) →
    assert(p ≺ a) →
    assert(q ⪯ a) →
    
    apply(MeetSemilatticeOrderedStructure) →
    assert(q ⪯ p) →
    
    apply(Antisymmetry) →
    assert(p = q) →
    
    contradiction(p ≺ q ∧ p = q)
  } →
  
  conclude(MeetIrreducible(p))
}