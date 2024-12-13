theorem Bijection_Has_Inverses() {
  assert(
    ∀f: S → T [f is bijection] ∧
    ∃I_S [I_S is identity on S] ∧
    ∃I_T [I_T is identity on T] ∧
    ∃f⁻¹ [f⁻¹ is inverse of f] ⇒
    (f⁻¹ ∘ f = I_S) ∧ (f ∘ f⁻¹ = I_T)
  )
} ↔

proof Bijection_Has_Inverses() {
  setVar(f: S → T) →
  assume(f is bijection) →
  
  lemma Bijection_Inverse_Is_Bijection() {
    assert(
      f is bijection ⇒ f⁻¹ is bijection
    )
  } →
  
  lemma Composite_With_Inverse_Is_Identity() {
    assert(
      f is bijection ∧ f⁻¹ is bijection ⇒
      (f⁻¹ ∘ f = I_S) ∧ (f ∘ f⁻¹ = I_T)
    )
  } →
  
  apply(Bijection_Inverse_Is_Bijection()) →
  apply(Composite_With_Inverse_Is_Identity()) →
  
  conclude(
    (f⁻¹ ∘ f = I_S) ∧ (f ∘ f⁻¹ = I_T)
  )
}