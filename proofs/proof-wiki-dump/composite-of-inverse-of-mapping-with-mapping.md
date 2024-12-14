theorem Composite_Inverse_Mapping() {
  assert(
    ∀f: S → T ⇒
    f ∘ f⁻¹ = I_Img(f)
  )
} ↔

proof Composite_Inverse_Mapping() {
  setMap(f: S → T) →
  
  lemma Inverse_OneToMany() {
    assert(f⁻¹ ⊆ T × S) ∧
    assert(dom(f⁻¹) = Img(f))
  } →
  
  lemma Composition_Definition() {
    assert(
      f ∘ f⁻¹ := {(x,z) ∈ T × T | ∃y ∈ S: (x,y) ∈ f⁻¹ ∧ (y,z) ∈ f}
    )
  } →
  
  assert(f ∘ f⁻¹ ⊆ T × T) →
  
  let(x ∈ Img(f)) →
  assert(∃y ∈ S: (x,y) ∈ f⁻¹) →
  
  lemma Mapping_Property() {
    assert(
      f(y) = x, ∀y: (x,y) ∈ f⁻¹
    )
  } →
  
  apply(Mapping_Property()) →
  assert(
    ∀x ∈ Img(f): (f ∘ f⁻¹)(x) = x
  ) →
  
  assert(f ∘ f⁻¹ = I_Img(f))
}