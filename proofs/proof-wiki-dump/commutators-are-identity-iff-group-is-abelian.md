theorem Commutators_Identity_Abelian() {
  assert(
    ∀G(IsGroup(G) ∧ HasIdentity(G,e)) ↔
    (∀g,h ∈ G: [g,h] = e ↔ IsAbelian(G))
  )
}

proof Commutators_Identity_Abelian() {
  // Necessary Condition
  block Necessary() {
    assume(∀g,h ∈ G: [g,h] = e) →
    apply(Commutator_Identity_Elements_Commute()) →
    assert(∀g,h ∈ G: g∘h = h∘g) →
    apply(Definition_Abelian_Group()) →
    assert(IsAbelian(G))
  }

  // Sufficient Condition
  block Sufficient() {
    assume(IsAbelian(G)) →
    apply(Definition_Abelian_Group()) →
    assert(∀g,h ∈ G: g∘h = h∘g) →
    apply(Commutator_Identity_Elements_Commute()) →
    assert(∀g,h ∈ G: [g,h] = e)
  }

  // Combine both directions
  combine(Necessary(), Sufficient()) →
  assert(
    (∀g,h ∈ G: [g,h] = e) ↔ IsAbelian(G)
  )
}

lemma Commutator_Identity_Elements_Commute() {
  assert(
    ∀g,h ∈ G: ([g,h] = e ↔ g∘h = h∘g)
  )
}

lemma Definition_Abelian_Group() {
  assert(
    IsAbelian(G) ↔ ∀g,h ∈ G: g∘h = h∘g
  )
}