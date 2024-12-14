theorem Composite_Group_Homomorphism() {
  let(G1: Group, ∘)
  let(G2: Group, *)
  let(G3: Group, ⊕)
  let(φ: G1 → G2, isHomomorphism(φ))
  let(ψ: G2 → G3, isHomomorphism(ψ))
  assert(
    isHomomorphism(ψ ∘ φ: G1 → G3)
  )
} ↔

proof Composite_Group_Homomorphism() {
  let(ψ • φ := ψ ∘ φ) →
  
  lemma MorphismProperty() {
    ∀x,y ∈ G1 ⇒
    (ψ • φ)(x ∘ y) = (ψ • φ)(x) ⊕ (ψ • φ)(y)
  } →
  
  proof MorphismProperty() {
    setVar(x,y: G1) →
    assert((ψ • φ)(x ∘ y) = ψ(φ(x ∘ y))) by(CompositionDef) →
    assert(ψ(φ(x ∘ y)) = ψ(φ(x) * φ(y))) by(φIsHomomorphism) →
    assert(ψ(φ(x) * φ(y)) = ψ(φ(x)) ⊕ ψ(φ(y))) by(ψIsHomomorphism) →
    assert(ψ(φ(x)) ⊕ ψ(φ(y)) = (ψ • φ)(x) ⊕ (ψ • φ)(y)) by(CompositionDef)
  } →
  
  apply(MorphismProperty()) →
  assert(isHomomorphism(ψ • φ)) by(MorphismProperty)
}