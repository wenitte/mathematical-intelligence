theorem Composition_of_Galois_Connections() {
  assert(
    ∀L₁ = ⟨S₁,≼₁⟩, L₂ = ⟨S₂,≼₂⟩, L₃ = ⟨S₃,≼₃⟩ ∈ OrderedSets ∧
    ∀g₁: S₁ → S₂, g₂: S₂ → S₃, d₁: S₂ → S₁, d₂: S₃ → S₂ ∧
    isGaloisConnection(⟨g₁,d₁⟩) ∧ isGaloisConnection(⟨g₂,d₂⟩) ⇒
    isGaloisConnection(⟨g₂∘g₁, d₁∘d₂⟩)
  )
} ↔

proof Composition_of_Galois_Connections() {
  setVar(L₁,L₂,L₃: OrderedSets) →
  setVar(g₁,g₂,d₁,d₂: Mappings) →
  
  lemma Increasing_Maps() {
    assert(isIncreasing(g₁) ∧ isIncreasing(g₂) ∧ 
           isIncreasing(d₁) ∧ isIncreasing(d₂)) →
    apply(Composite_of_Increasing_Mappings) →
    assert(isIncreasing(g₂∘g₁) ∧ isIncreasing(d₁∘d₂))
  } →

  lemma Forward_Implication() {
    setVar(s: S₃, t: S₁) →
    assume(s ≼₃ (g₂∘g₁)(t)) →
    assert(s ≼₃ g₂(g₁(t))) →
    apply(GaloisConnection_Definition) →
    assert(d₂(s) ≼₂ g₁(t)) →
    apply(Increasing_Map_Property) →
    assert(d₁(d₂(s)) ≼₁ d₁(g₁(t))) →
    apply(Galois_Connection_Order) →
    assert(d₁∘g₁ ≼₁ I_{S₁}) →
    assert(d₁(g₁(t)) ≼₁ t) →
    apply(Transitivity) →
    assert((d₁∘d₂)(s) ≼₁ t)
  } →

  lemma Backward_Implication() {
    setVar(s: S₃, t: S₁) →
    assume((d₁∘d₂)(s) ≼₁ t) →
    assert(d₁(d₂(s)) ≼₁ t) →
    apply(GaloisConnection_Definition) →
    assert(d₂(s) ≼₂ g₁(t)) →
    apply(Increasing_Map_Property) →
    assert(g₂(d₂(s)) ≼₃ g₂(g₁(t))) →
    apply(Galois_Connection_Order) →
    assert(I_{S₃} ≼₃ g₂∘d₂) →
    assert(s ≼₃ g₂(d₂(s))) →
    apply(Transitivity) →
    assert(s ≼₃ (g₂∘g₁)(t))
  } →

  apply(Forward_Implication()) →
  apply(Backward_Implication()) →
  assert(isGaloisConnection(⟨g₂∘g₁, d₁∘d₂⟩))
}