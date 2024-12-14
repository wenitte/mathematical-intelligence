theorem Cayley_Category() {
  assert(
    ∀C[SmallCategory] ∃D[Category] ⇒ (
      objects(D) ⊆ sets ∧
      morphisms(D) ⊆ mappings ∧
      C ≅ D
    )
  )
} ↔

proof Cayley_Category() {
  setVar(C: SmallCategory) →
  define(
    H: Functor(C → Set),
    H(C) := {f ∈ mor(C) | cod(f) = C},
    H(f: A → B) := (g ↦ f ∘ g)
  ) →
  
  lemma Functor_Properties() {
    assert(
      H(idₐ) = id_{H(A)} ∧
      ∀f,g[Morphism] (
        H(g ∘ f) = H(g) ∘ H(f)
      )
    ) →
    proof_step(
      H(g ∘ f)(h) = 
      (g ∘ f) ∘ h =             // definition of H(g ∘ f)
      g ∘ (f ∘ h) =             // associativity
      g ∘ (H(f)(h)) =           // definition of H(f)
      H(g)(H(f)(h)) =           // definition of H(g)
      (H(g) ∘ H(f))(h)          // composition
    )
  } →

  lemma Embedding_Properties() {
    assert(
      injective_on_objects(H) ∧
      faithful(H)
    ) →
    proof_by_contradiction(
      assume(¬faithful(H)) →
      ∃g,h[Morphism(A → B)] (
        H(g) = H(h) ∧
        g ∘ idₐ = h ∘ idₐ →
        g = h                    // contradiction
      )
    )
  } →

  apply(Functor_Properties()) →
  apply(Embedding_Properties()) →
  apply(Functor_Embedding_Theorem()) →
  
  conclude(
    H[Embedding] ⇒ C ≅ subcategory(Set)
  )
}