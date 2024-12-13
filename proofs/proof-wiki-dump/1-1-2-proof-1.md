theorem Addition_One_Plus_One() {
  assert(
    let P be_a PeanoStructure ∧
    let s: P → P be_the SuccessorMapping ∧
    let 0 ∈ (P \ s(P)) ∧
    let 1 := s(0) ∧
    let 2 := s(s(0)) ∧
    let + be_the PeanoAddition
    ⇒ 1 + 1 = 2
  )
} ↔

proof Addition_One_Plus_One() {
  // Initial setup
  setDef(1 := s(0)) →
  setDef(2 := s(s(0))) →
  
  // Transform to successor notation
  assert(1 + 1 = s(0) + s(0)) →
  
  // Apply Peano addition axiom for successors
  lemma PeanoAdditionSuccessor() {
    assert(∀m,n ∈ P: m + s(n) = s(m + n))
  } →
  
  // Apply first reduction
  apply(PeanoAdditionSuccessor()) →
  assert(s(0) + s(0) = s(s(0) + 0)) →
  
  // Apply Peano addition axiom for zero
  lemma PeanoAdditionZero() {
    assert(∀m ∈ P: m + 0 = m)
  } →
  
  // Apply second reduction
  apply(PeanoAdditionZero()) →
  assert(s(0) + 0 = s(0)) →
  
  // Apply successor to both sides
  assert(s(s(0) + 0) = s(s(0))) →
  
  // Final substitution
  assert(s(0) + s(0) = s(s(0))) →
  
  // By definition of 2
  assert(1 + 1 = 2)
}