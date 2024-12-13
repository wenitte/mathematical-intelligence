theorem Cardinality_Empty_Domain_Mappings() {
  assert(
    ∀T: Set ⇒
    let(T^∅: Set) where T^∅ = {f | f: ∅ → T} ⇒
    card(T^∅) = 1
  )
} ↔

proof Cardinality_Empty_Domain_Mappings() {
  setVar(T: Set) →
  setVar(R₀: Relation) where R₀ = ∅ × T →
  
  lemma Null_Relation_Is_Mapping() {
    assert(
      (R₀ = ∅ × T) ∧ (dom(R₀) = ∅) ⇒
      isMapping(R₀)
    )
  } →

  lemma Empty_Mapping_Uniqueness() {
    assert(
      ∀f,g: Mapping where (dom(f) = ∅) ∧ (dom(g) = ∅) ⇒
      f = g
    )
  } →

  apply(Null_Relation_Is_Mapping()) →
  assert(R₀ ∈ T^∅) →
  apply(Empty_Mapping_Uniqueness()) →
  assert(∀f ∈ T^∅ ⇒ f = R₀) →
  assert(T^∅ = {R₀}) →
  assert(card(T^∅) = 1)
}