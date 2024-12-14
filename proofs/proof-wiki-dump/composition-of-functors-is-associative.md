theorem Functor_Composition_Associative() {
  assert(
    ∀(A,B,C,D: MetaCategory) ∧
    ∀(F: A→B, G: B→C, H: C→D) ⇒
    H∘(G∘F) = (H∘G)∘F
  )
}

proof Functor_Composition_Associative() {
  setVar(A,B,C,D: MetaCategory) →
  setVar(F: A→B, G: B→C, H: C→D) →
  
  lemma Object_Case() {
    setVar(A_obj ∈ Obj(A)) →
    assert(H∘(G∘F)(A_obj)) →
    assert(H((G∘F)(A_obj))) by(functor_composition) →
    assert(H(G(F(A_obj)))) by(functor_composition) →
    assert((H∘G)(F(A_obj))) by(functor_composition) →
    assert((H∘G)∘F(A_obj)) by(functor_composition)
  } →

  lemma Morphism_Case() {
    setVar(f ∈ Mor(A)) →
    assert(∀f: H∘(G∘F)(f) = (H∘G)∘F(f)) by(analogous_to_object_case)
  } →

  apply(Object_Case()) ∧
  apply(Morphism_Case()) →
  assert(H∘(G∘F) = (H∘G)∘F) by(functor_equality)
}