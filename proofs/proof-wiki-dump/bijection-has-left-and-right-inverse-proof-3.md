theorem Bijection_Has_Inverses() {
  assert(
    ∀f: S → T,
    Bijection(f) ∧
    ∃I_S: S → S [Identity_Map(I_S)] ∧
    ∃I_T: T → T [Identity_Map(I_T)] ∧
    ∃f⁻¹: T → S [Inverse_Map(f⁻¹, f)] ⇒
    (f⁻¹ ∘ f = I_S) ∧ (f ∘ f⁻¹ = I_T)
  )
}

proof Bijection_Has_Inverses() {
  setVar(f: S → T) →
  assert(Bijection(f)) →
  lemma Is_Mapping() {
    assert(Mapping(f)) →
    assert(Relation(f))
  } →
  apply(Is_Mapping()) →
  lemma Bijective_Relation_Inverse() {
    assert(
      Relation(f) ∧ Bijection(f) ⇒
      ∃f⁻¹ [(f⁻¹ ∘ f = I_S) ∧ (f ∘ f⁻¹ = I_T)]
    )
  } →
  apply(Bijective_Relation_Inverse()) →
  assert((f⁻¹ ∘ f = I_S) ∧ (f ∘ f⁻¹ = I_T))
}