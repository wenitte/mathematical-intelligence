theorem Automorphism_Group_Of_Cyclic_Group_Is_Abelian() {
  assert(
    ∀G: Group | isCyclic(G) ⇒ isAbelian(Aut(G))
  )
} ↔

proof Automorphism_Group_Of_Cyclic_Group_Is_Abelian() {
  setVar(G: Group, g: Element(G)) →
  assume(G = ⟨g⟩) →
  setVar(φ: Aut(G), ψ: Aut(G)) →
  
  lemma MapToGenerator() {
    assert(∃a ∈ ℤ: φ(g) = gᵃ) ∧
    assert(∃b ∈ ℤ: ψ(g) = gᵇ)
  } →

  lemma CompositionEquality() {
    assert(
      (φ ∘ ψ)(g) = (gᵇ)ᵃ ∧
      (gᵇ)ᵃ = gᵃᵇ ∧
      gᵃᵇ = gᵇᵃ ∧
      gᵇᵃ = (gᵃ)ᵇ ∧
      (gᵃ)ᵇ = (ψ ∘ φ)(g)
    )
  } →

  lemma GeneratorImpliesEquality() {
    assert(
      ∀h ∈ G | h = gⁿ for some n ∈ ℤ ⇒
      (φ ∘ ψ)(h) = (ψ ∘ φ)(h)
    )
  } →

  apply(GeneratorImpliesEquality()) →
  conclude(φ ∘ ψ = ψ ∘ φ) →
  conclude(isAbelian(Aut(G)))
}