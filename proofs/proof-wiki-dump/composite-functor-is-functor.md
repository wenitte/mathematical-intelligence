theorem Composite_Functor_Is_Functor() {
  assert(
    ∀(C,D,E: MetaCategory) ∧
    ∀(F: Functor(C→D)) ∧ 
    ∀(G: Functor(D→E)) ∧
    ∀(GF: Functor(C→E)) where GF = compose(G,F) ⇒
    is_covariant_functor(GF)
  )
} ↔

proof Composite_Functor_Is_Functor() {
  setVar(f,g: Morphism(C)) where defined(g∘f) →
  
  lemma Morphism_Preservation() {
    assert(GF(g∘f) = G(F(g∘f))) by def_functor_composition →
    assert(G(F(g∘f)) = G(Fg ∘ Ff)) by F_is_covariant →
    assert(G(Fg ∘ Ff) = G(Fg) ∘ G(Ff)) by G_is_functor →
    assert(G(Fg) ∘ G(Ff) = GFg ∘ GFf) by def_functor_composition
  } →

  lemma Identity_Preservation() {
    setVar(C: Object(C)) →
    assert(GF(I_C) = G(F(I_C))) by def_functor_composition →
    assert(G(F(I_C)) = G(I_{FC})) by F_is_covariant →
    assert(G(I_{FC}) = I_{G(FC)}) by G_is_covariant →
    assert(I_{G(FC)} = I_{GFC}) by def_functor_composition
  } →

  apply(Morphism_Preservation()) ∧
  apply(Identity_Preservation()) →
  assert(is_covariant_functor(GF))
}