theorem Compact_Closure_Subset_Way_Below_Closure(L: OrderedSet) {
  assert(
    L = ⟨S, ⪯⟩ ∧ 
    ∀x ∈ S ⇒ x^compact ⊆ x^≪
  )
} ↔

proof Compact_Closure_Subset_Way_Below_Closure() {
  setVar(x: S) →
  setVar(y: S) →
  
  assert(y ∈ x^compact) →
  
  lemma Compact_Closure_Definition() {
    assert(y ⪯ x ∧ isCompact(y))
  } →
  
  lemma Compact_Element_Property() {
    assert(isCompact(y) ⇒ y ≪ y)
  } →
  
  lemma Way_Below_Transitivity() {
    assert((y ≪ y ∧ y ⪯ x) ⇒ y ≪ x)
  } →
  
  apply(Compact_Closure_Definition()) →
  apply(Compact_Element_Property()) →
  apply(Way_Below_Transitivity()) →
  
  assert(y ≪ x) →
  
  lemma Way_Below_Closure_Definition() {
    assert(y ≪ x ⇒ y ∈ x^≪)
  } →
  
  apply(Way_Below_Closure_Definition()) →
  assert(y ∈ x^≪)
}