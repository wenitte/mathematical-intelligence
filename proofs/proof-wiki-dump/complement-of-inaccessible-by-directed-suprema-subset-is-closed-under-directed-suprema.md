theorem Complement_Inaccessible_Directed_Suprema_Closed() {
  let(L: OrderedSet) →
  assert(
    L = ⟨S, ⪯⟩ ∧
    isUpComplete(L) ∧
    ∀X ⊆ S: (
      isInaccessibleByDirectedSuprema(X) →
      isClosedUnderDirectedSuprema(Sᶜ X)
    )
  )
} ↔

proof Complement_Inaccessible_Directed_Suprema_Closed() {
  let(L: OrderedSet) →
  let(X ⊆ S) →
  assume(isInaccessibleByDirectedSuprema(X)) →
  let(D ⊆ S) →
  assume(isDirected(D)) →
  assume(D ⊆ Sᶜ X) →

  lemma Empty_Intersection() {
    assert(D ⊆ Sᶜ X ↔ D ∩ X = ∅)
  } →
  apply(Empty_Intersection()) →
  assert(D ∩ X = ∅) →

  lemma Inaccessible_Definition() {
    assert(
      isInaccessibleByDirectedSuprema(X) ∧
      isDirected(D) ∧
      D ∩ X = ∅ →
      sup(D) ∉ X
    )
  } →
  apply(Inaccessible_Definition()) →
  assert(sup(D) ∉ X) →
  assert(sup(D) ∈ Sᶜ X) →
  conclude(isClosedUnderDirectedSuprema(Sᶜ X))
}