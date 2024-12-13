theorem Bottom_In_Ideal() {
  assert(
    ∀S: OrderedSet ∧ ∀I: Ideal(S) ∧ BoundedBelow(S) ⇒
    (⊥ ∈ I)
    where ⊥ = min(S)
  )
} ↔

proof Bottom_In_Ideal() {
  setVar(S: OrderedSet) →
  setVar(I: Ideal(S)) →
  assert(BoundedBelow(S)) →
  
  lemma Ideal_Properties() {
    assert(NonEmpty(I) ∧ Lower(I))
  } →
  
  lemma NonEmpty_Definition() {
    assert(∃x ∈ I)
  } →
  
  lemma Smallest_Element_Property() {
    assert(∀x ∈ S: ⊥ ⪯ x)
  } →
  
  apply(NonEmpty_Definition()) →
  setVar(x: Element(I)) →
  apply(Smallest_Element_Property()) →
  assert(⊥ ⪯ x) →
  
  lemma Lower_Section_Property() {
    assert(∀a,b ∈ S: (b ∈ I ∧ a ⪯ b) ⇒ a ∈ I)
  } →
  
  apply(Lower_Section_Property()) →
  assert(⊥ ∈ I)
}