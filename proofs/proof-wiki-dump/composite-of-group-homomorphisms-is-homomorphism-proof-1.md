theorem Composite_Group_Homomorphisms() {
  let(G1: Group, G2: Group, G3: Group) ∧
  let(φ: Homomorphism(G1 → G2)) ∧
  let(ψ: Homomorphism(G2 → G3)) ∧
  assert(
    ψ ∘ φ: Homomorphism(G1 → G3)
  )
} ↔

proof Composite_Group_Homomorphisms() {
  setVar(G1, G2, G3: Group) →
  setVar(φ: Homomorphism(G1 → G2)) →
  setVar(ψ: Homomorphism(G2 → G3)) →
  lemma Homomorphism_Properties() {
    assert(
      ∀a,b ∈ G1: φ(a ∘ b) = φ(a) * φ(b) ∧
      ∀x,y ∈ G2: ψ(x * y) = ψ(x) ⊕ ψ(y)
    )
  } →
  apply(Composite_Homomorphisms_General_Theorem()) →
  assert(ψ ∘ φ: Homomorphism(G1 → G3))
}