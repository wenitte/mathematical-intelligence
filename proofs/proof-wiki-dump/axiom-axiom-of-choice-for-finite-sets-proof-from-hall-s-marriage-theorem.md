theorem ChoiceFunctionFiniteSets() {
  assert(
    (HallMarriageTheorem(finite_sets) ∧
     ∃S: Set(Set) where (
       S ≠ ∅ ∧
       ∀s ∈ S: (Finite(s) ∧ s ≠ ∅)
     )) ⇒
    ∃f: ChoiceFunction(S)
  )
} ↔

proof ChoiceFunctionFiniteSets() {
  assume(S: pairwiseDisjoint) →
  
  lemma MarriageCondition() {
    assert(
      ∀F ⊆ S where Finite(F):
      |F| ≤ |⋃F|
    )
  } →
  
  proof MarriageCondition() {
    setVar(F: Set where F ⊆ S ∧ Finite(F)) →
    apply(PrincipleFiniteChoice) →
    assert(
      ∃f_F: F → ⋃F where
      ∀s ∈ F: f_F(s) ∈ s
    ) →
    assert(pairwiseDisjoint(S) ⇒ Injective(f_F)) →
    conclude(|F| ≤ |⋃F|)
  } →
  
  apply(HallMarriageTheorem, MarriageCondition()) →
  conclude(∃f: ChoiceFunction(S))
}