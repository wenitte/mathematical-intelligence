theorem Category_Pointed_Sets() {
  let(Set_* := Category(PointedSets)) ∧
  let(Set := Category(Sets)) ∧
  let(1 := {*}) →
  assert(
    Set_* ≅ (1/Set)  // where 1/Set is coslice category
  )
} ↔

proof Category_Pointed_Sets() {
  // Define functors F and G
  define(F: Set_* → 1/Set) {
    onObjects((C,c) ↦ (c̄: 1→C where c̄(*) = c)) ∧
    onMorphisms(f ↦ f)
  } ∧

  define(G: 1/Set → Set_*) {
    onObjects((x: 1→C) ↦ (C, x(*))) ∧
    onMorphisms(f ↦ f)
  } →

  // Prove F is functor
  lemma F_is_Functor() {
    forall((C,c), (D,d) ∈ Set_*, f: (C,c)→(D,d)) →
    assert(f ∘ c̄(*) = f(c)) by(def_c̄) →
    assert(f(c) = d) by(pointed_mapping) →
    assert(d = d̄(*)) by(def_d̄) →
    assert(f ∘ c̄ = d̄) by(equality_of_mappings) →
    assert(F(preserves_identities) ∧ F(preserves_composition))
  } →

  // Prove G is functor
  lemma G_is_Functor() {
    forall(x: 1→C, y: 1→D ∈ 1/Set, f: C→D) →
    assert(f ∘ x = y ⇒ f(x(*)) = y(*)) →
    assert(G(preserves_identities) ∧ G(preserves_composition))
  } →

  // Prove F is isomorphism
  lemma F_is_Isomorphism() {
    assert(∀x ∈ 1/Set: F(G(x)) = x) {
      F(G(x: 1→C)) = F(C,x(*)) = x̄ where x̄(*) = x(*) →
      assert(x̄ = x) by(equality_of_mappings)
    } ∧
    assert(∀(C,c) ∈ Set_*: G(F(C,c)) = (C,c)) {
      G(F(C,c)) = G(c̄) = (C,c̄(*)) = (C,c)
    }
  } →

  apply(F_is_Functor()) →
  apply(G_is_Functor()) →
  apply(F_is_Isomorphism()) →
  conclude(Set_* ≅ 1/Set)
}