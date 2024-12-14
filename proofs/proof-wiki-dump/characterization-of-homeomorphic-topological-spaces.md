theorem Homeomorphic_Topological_Spaces() {
  assert(
    ∀T₁(S₁,τ₁) ∈ TopSpace, ∀S₂ ∈ Set, ∀τ₂ ⊆ 𝒫(S₂) ⇒
    [(S₂,τ₂) homeomorphic_to T₁] ↔
    [∃f: S₁→S₂ | (f is_bijection) ∧ (f→|τ₁ is_surjection(τ₁,τ₂))]
  )
} ↔

proof Homeomorphic_Topological_Spaces() {
  // Necessary Condition
  block Necessary() {
    assume((S₂,τ₂) homeomorphic_to T₁) →
    setVar(f: S₁→S₂, is_homeomorphism(f)) →
    assert(is_bijection(f) ∧ is_open_mapping(f) ∧ is_continuous(f)) →
    assert(∀U ∈ τ₁: f→(U) ∈ τ₂) →
    assert(∀V ∈ τ₂: f⁻¹(V) ∈ τ₁) →
    
    lemma Image_Preimage() {
      assert(∀V ∈ τ₂: f→(f⁻¹(V)) = V)
    } →
    apply(Image_Preimage()) →
    conclude(f→|τ₁ is_surjection(τ₁,τ₂))
  }

  // Sufficient Condition
  block Sufficient() {
    assume(∃f: S₁→S₂ | is_bijection(f) ∧ f→|τ₁ is_surjection(τ₁,τ₂)) →
    
    // Prove τ₂ is topology
    block Topology_Axioms() {
      // O1: Union
      assert(∀{Vᵢ}ᵢ∈I ⊆ τ₂: ∪ᵢ∈I Vᵢ ∈ τ₂) →
      
      // O2: Intersection
      assert(∀V₁,V₂ ∈ τ₂: V₁ ∩ V₂ ∈ τ₂) →
      
      // O3: Whole space
      assert(S₂ ∈ τ₂)
    } →

    // Prove f is homeomorphism
    block Homeomorphism_Properties() {
      assert(is_open_mapping(f)) →
      assert(is_continuous(f)) →
      conclude(is_homeomorphism(f))
    }
  } →
  
  conclude((S₂,τ₂) homeomorphic_to T₁)
}