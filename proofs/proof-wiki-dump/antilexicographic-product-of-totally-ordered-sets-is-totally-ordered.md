theorem Antilexicographic_Product_Total_Order() {
  define(S1: TotalOrderedSet, ≤₁) ∧
  define(S2: TotalOrderedSet, ≤₂) ∧
  define(S1 ⊗ᵃ S2 = ⟨S1 × S2, ≤ᵃ⟩) ∧
  assert(
    ⟨S1 × S2, ≤ᵃ⟩ is_a TotalOrderedSet
  )
} ↔

proof Antilexicographic_Product_Total_Order() {
  lemma Ordering_Property() {
    assert(≤ᵃ is_an Ordering)
    ref(Antilexicographic_Order_is_Ordering)
  } →

  define(≤ᵃ_definition: ∀a,b,c,d ∈ S1,S2) {
    ⟨a,b⟩ ≤ᵃ ⟨c,d⟩ ↔ (c <₂ d) ∨ (c = d ∧ a ≤₁ b)
  } →

  lemma Total_Order_Properties() {
    assert(S1,S2 are TotalOrderedSets) →
    assert(≤₁ is_connected ∧ ≤₂ is_connected) →
    assert(∀c,d ∈ S2: (c <₂ d) ∨ (d <₂ c) ∨ (c = d)) ∧
    assert(∀a,b ∈ S1: (a ≤₁ b) ∨ (b ≤₁ a))
  } →

  proof Connected_Property() {
    case c <₂ d ∨ d <₂ c {
      assert(⟨a,b⟩ ≤ᵃ ⟨c,d⟩ ∨ ⟨c,d⟩ ≤ᵃ ⟨a,b⟩)
    } →
    
    case c = d {
      assert(a ≤₁ b ∨ b ≤₁ a) →
      assert(⟨a,b⟩ ≤ᵃ ⟨c,d⟩ ∨ ⟨c,d⟩ ≤ᵃ ⟨a,b⟩)
    } 
  } →

  conclude(
    ≤ᵃ is_connected ∧
    ≤ᵃ is_reflexive ∧
    ≤ᵃ is_transitive ∧
    ≤ᵃ is_antisymmetric →
    ≤ᵃ is_a TotalOrdering →
    ⟨S1 × S2, ≤ᵃ⟩ is_a TotalOrderedSet
  )
}