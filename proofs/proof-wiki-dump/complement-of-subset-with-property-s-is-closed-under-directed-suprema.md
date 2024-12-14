theorem Complement_Subset_Property_S_Closed_Directed_Suprema() {
  assert(
    ∀L(L = ⟨S,⪯⟩ ∧ isUpComplete(L)) ∧
    ∀X(X ⊆ S ∧ hasPropertyS(X)) →
    isClosedUnderDirectedSuprema(S\X)
  )
} ↔

proof Complement_Subset_Property_S_Closed_Directed_Suprema() {
  setVar(L: OrderedSet, S: Set, X: Set) →
  assume(L = ⟨S,⪯⟩ ∧ isUpComplete(L) ∧ X ⊆ S ∧ hasPropertyS(X)) →
  
  setVar(D: Set) →
  assume(isDirected(D) ∧ D ⊆ S\X) →
  
  // Proof by contradiction
  assume(¬(sup(D) ∈ S\X)) →
  assert(sup(D) ∈ X) →
  
  // By property (S)
  applyDef(PropertyS) →
  assert(∃y ∈ D: ∀x ∈ D: (y ⪯ x → x ∈ X)) →
  
  // By reflexivity
  setVar(y: Element) →
  assert(y ∈ X) →
  
  // Intersection not empty
  assert(D ∩ X ≠ ∅) →
  
  // Contradiction with Empty_Intersection_iff_Subset_Complement
  lemma Empty_Intersection_iff_Subset_Complement() {
    assert(D ⊆ S\X ↔ D ∩ X = ∅)
  } →
  
  apply(Empty_Intersection_iff_Subset_Complement()) →
  assert(contradiction(D ∩ X ≠ ∅, D ⊆ S\X)) →
  therefore(sup(D) ∈ S\X)
}