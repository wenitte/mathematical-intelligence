theorem Composition_Three_Mappings_Identity() {
  assert(
    (A ≠ ∅ ∧ B ≠ ∅ ∧ C ≠ ∅) ∧
    (f: A → B) ∧ (g: B → C) ∧ (h: C → A) ∧
    (h ∘ g ∘ f = IA) ∧
    (f ∘ h ∘ g = IB) ∧
    (g ∘ f ∘ h = IC) →
    (f, g, h are bijections ∧
     f⁻¹ = h ∘ g ∧
     g⁻¹ = f ∘ h ∧
     h⁻¹ = g ∘ f)
  )
} ↔

proof Composition_Three_Mappings_Identity() {
  lemma Associativity() {
    assert((h ∘ g) ∘ f = h ∘ (g ∘ f))
  } →
  
  assert((h ∘ g) ∘ f = IA) →
  apply(Injection_iff_Left_Inverse) →
  assert(f is injection) →
  
  assert(f ∘ (h ∘ g) = IB) →
  apply(Surjection_iff_Right_Inverse) →
  assert(f is surjection) →
  
  assert(f is injection ∧ f is surjection) →
  assert(f is bijection) →
  
  apply(Bijection_iff_Left_Right_Inverse_Corollary) →
  assert(h ∘ g is bijection) →
  assert(h ∘ g is left_inverse(f) ∧ h ∘ g is right_inverse(f)) →
  assert(f⁻¹ = h ∘ g) →
  
  lemma Similar_Arguments() {
    assert(
      apply_same_logic_to(g) ∧
      apply_same_logic_to(h) →
      (g is bijection ∧
       h is bijection ∧
       g⁻¹ = f ∘ h ∧
       h⁻¹ = g ∘ f)
    )
  } →
  apply(Similar_Arguments())
}