theorem OrdSet_Has_Enough_Constants() {
  assert(
    let(OrdSet: Category) ∧
    OrdSet.objects = OrderedSets ⇒
    has_enough_constants(OrdSet)
  )
} ↔

proof OrdSet_Has_Enough_Constants() {
  apply(Singleton_Ordered_Set_Is_Terminal) →
  let(1: TerminalObject) ∧ |1| = 1 →
  
  lemma Sufficient_Condition() {
    assert(
      ∀f,g: Morphism(P,Q) ∧ f ≠ g ⇒
      ∃x: Morphism(1,P) | f ∘ x ≠ g ∘ x
    )
  } →
  
  assert(f,g ∈ OrdSet.morphisms ⇒ increasing(f) ∧ increasing(g)) →
  
  apply(Equality_of_Mappings) →
  assert(
    f ≠ g ⇒ ∃p ∈ P | f(p) ≠ g(p)
  ) →
  
  define(p̄: Morphism(1,P)) {
    assert(∀* ∈ 1 ⇒ p̄(*) = p)
  } →
  
  apply(Mapping_Is_Constant_Iff_Increasing_And_Decreasing) →
  assert(morphism_valid(p̄)) →
  
  assert(p̄ witnesses f ∘ p̄ ≠ g ∘ p̄) →
  
  conclude(has_enough_constants(OrdSet))
}