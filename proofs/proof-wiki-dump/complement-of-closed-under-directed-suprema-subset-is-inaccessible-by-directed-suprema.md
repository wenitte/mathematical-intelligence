theorem Complement_Closed_Under_Directed_Suprema_Is_Inaccessible() {
  let(L: OrderedSet) →
  assert(L = ⟨S, ≤⟩ ∧ isUpComplete(L)) →
  let(X ⊆ S) →
  assert(isClosedUnderDirectedSuprema(X)) →
  assert(
    isInaccessibleByDirectedSuprema(S \ X)
  )
} ↔

proof Complement_Closed_Under_Directed_Suprema_Is_Inaccessible() {
  let(D ⊆ S) →
  assert(isDirected(D)) →
  assume(sup(D) ∈ S \ X) →
  
  // By definition of relative complement
  assert(sup(D) ∈ S \ X ↔ sup(D) ∉ X) →
  
  // By definition of closed under directed suprema
  assert(sup(D) ∉ X ∧ isDirected(D) → D ⊈ X) →
  
  // By Complement of Complement
  assert(D ⊈ X ↔ D ⊈ (S \ (S \ X))) →
  
  // By Empty Intersection iff Subset of Relative Complement
  lemma Empty_Intersection_Iff_Subset() {
    assert(∀A,B ⊆ S : (A ⊈ B ↔ A ∩ (S \ B) ≠ ∅))
  } →
  
  apply(Empty_Intersection_Iff_Subset()) →
  assert(D ∩ (S \ X) ≠ ∅) →
  
  // This proves inaccessibility by directed suprema
  conclude(isInaccessibleByDirectedSuprema(S \ X))
}