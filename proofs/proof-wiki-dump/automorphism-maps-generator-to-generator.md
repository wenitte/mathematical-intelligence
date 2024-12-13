theorem Generator_Automorphism_Image() {
  assert(
    ∀G: Group ∧ ∀g: Element ∧ ∀φ: Function →
    (isCyclic(G) ∧ isGenerator(g,G) ∧ isAutomorphism(φ,G)) →
    isGenerator(φ(g),G)
  )
} ↔

proof Generator_Automorphism_Image() {
  setVar(G: Group, g: Element, φ: Function) →
  assert(isAutomorphism(φ,G) → isHomomorphism(φ,G)) →
  lemma Homomorphic_Cyclic_Image() {
    assert(
      isHomomorphism(φ,G) ∧ isCyclic(G) →
      isCyclic(φ(G))
    )
  } →
  apply(Homomorphic_Cyclic_Image()) →
  assert(φ(g) generates φ(G)) →
  assert(φ(G) = G) by isAutomorphism(φ,G) →
  conclude(isGenerator(φ(g),G))
}