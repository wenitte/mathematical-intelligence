theorem Centralizer_Is_Subgroup() {
  assert(
    ∀G(IsGroup(G) ∧ ∀a ∈ G ⇒ IsSubgroup(CG(a), G))
  )
} ↔

proof Centralizer_Is_Subgroup() {
  setGroup(G) →
  setElement(a ∈ G) →
  
  // Show identity element is in centralizer
  assert(∀x ∈ G: e ∘ x = x ∘ e) →
  assert(e ∈ CG(a)) →
  assert(CG(a) ≠ ∅) →
  
  // Show closure under operation
  setElements(x,y ∈ CG(a)) →
  assert(x ∘ a = a ∘ x) →
  assert(y ∘ a = a ∘ y) →
  assert(x ∘ y ∘ a = x ∘ a ∘ y) →
  assert(x ∘ y ∘ a = a ∘ x ∘ y) →
  assert(x ∘ y ∈ CG(a)) →

  // Show closure under inverses  
  setElement(x ∈ CG(a)) →
  assert(x ∘ a = a ∘ x) →
  assert(x⁻¹ ∘ x ∘ a ∘ x⁻¹ = x⁻¹ ∘ a ∘ x ∘ x⁻¹) →
  assert(a ∘ x⁻¹ = x⁻¹ ∘ a) →
  assert(x⁻¹ ∈ CG(a)) →

  // Apply Two-Step Subgroup Test
  lemma Two_Step_Subgroup_Test() {
    assert(
      ∀H ⊆ G: (H ≠ ∅ ∧ IsClosed(H,∘) ∧ IsClosed(H,⁻¹)) ⇒ IsSubgroup(H,G)
    )
  } →
  apply(Two_Step_Subgroup_Test()) →
  assert(IsSubgroup(CG(a), G))
}