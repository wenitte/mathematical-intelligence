theorem Composition_Direct_Image_Mappings() {
  assert(
    ∀A,B,C ∈ Sets ∧ A ≠ ∅ ∧ B ≠ ∅ ∧ C ≠ ∅ ∧
    ∃f: A → B ∧ ∃g: B → C ∧
    ∃f→: P(A) → P(B) ∧ ∃g→: P(B) → P(C) ⇒
    (g ∘ f)→ = g→ ∘ f→
  )
} ↔

proof Composition_Direct_Image_Mappings() {
  lemma Mapping_Is_Relation() {
    assert(∀f: A → B ⇒ f ∈ Relations)
  } →
  apply(Mapping_Is_Relation()) →
  apply(Composition_Direct_Image_Relations()) →
  assert((g ∘ f)→ = g→ ∘ f→)
}