theorem Cayley_Representation() {
  assert(
    ∀G: Group →
    ∃P: PermutationGroup, S: Set →
    G ≅ P
  )
} ↔

proof Cayley_Representation() {
  setVar(G: Group) →
  setVar(a: G) →
  
  define(λ_a: G → G) {
    ∀x ∈ G: λ_a(x) = a·x
  } →
  
  lemma Regular_Rep_Is_Permutation() {
    assert(∀a ∈ G: λ_a ∈ Perm(G))
  } →
  
  setVar(b: G) →
  define(λ_b: G → G) {
    ∀x ∈ G: λ_b(x) = b·x
  } →
  
  assert(λ_a ≠ λ_b ↔ a ≠ b) →
  
  define(H: Set) {
    H = {λ_x | x ∈ G}
  } →
  
  define(Φ: G → H) {
    ∀a ∈ G: Φ(a) = λ_a
  } →
  
  assert(Φ: Bijective) →
  
  lemma Composition_Property() {
    assert(
      ∀a,b ∈ G →
      λ_a ∘ λ_b = λ_(a·b)
    )
  } →
  
  assert(Φ: Homomorphism) →
  
  assert(∀a ∈ G: (λ_a)^(-1) = λ_(a^(-1))) {
    proof: λ_a ∘ (λ_a)^(-1) = λ_(a·a^(-1))
  } →
  
  conclude(
    H: PermutationGroup ∧
    Φ: G ≅ H
  )
}