theorem AlgebraOfSets_ClosedUnderIntersection() {
  assert(
    ∀S: Set,
    ∀𝓡: AlgebraOfSets(S) ⇒
    ∀A,B ∈ 𝓡 ⇒ (A ∩ B) ∈ 𝓡
  )
} ↔

proof AlgebraOfSets_ClosedUnderIntersection() {
  setVar(S: Set) →
  setVar(𝓡: AlgebraOfSets(S)) →
  setVar(A,B: Element(𝓡)) →
  
  // Proof path using De Morgan's Laws
  assert(A,B ∈ 𝓡) →
  apply(AlgebraOfSets_Def.AS2()) →
  assert(∀X,Y ∈ 𝓡 ⇒ X ∪ Y ∈ 𝓡) →
  
  apply(AlgebraOfSets_Def.AS3()) →
  assert(∀X ∈ 𝓡 ⇒ (S ∖ X) ∈ 𝓡) →
  
  assert((S ∖ A) ∈ 𝓡 ∧ (S ∖ B) ∈ 𝓡) →
  assert((S ∖ A) ∪ (S ∖ B) ∈ 𝓡) →
  
  lemma DeMorgans_Law() {
    assert((S ∖ A) ∪ (S ∖ B) = S ∖ (A ∩ B))
  } →
  
  apply(DeMorgans_Law()) →
  assert(S ∖ (A ∩ B) ∈ 𝓡) →
  apply(AlgebraOfSets_Def.AS3()) →
  assert(A ∩ B ∈ 𝓡)
}