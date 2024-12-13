theorem ProductSpaceBasis() {
  assert(
    ∀T₁(A₁, τ₁), T₂(A₂, τ₂) ∈ TopologicalSpaces ∧
    let P = {U₁ × U₂ : U₁ ∈ τ₁, U₂ ∈ τ₂} ⇒
    P is_synthetic_basis_on(A₁ × A₂)
  )
} ↔

proof ProductSpaceBasis() {
  setDef(SyntheticBasis.requires(B1 ∧ B2)) →
  
  // Proof of B1
  proof_B1() {
    assert(A₁ ∈ τ₁ ∧ A₂ ∈ τ₂) →
    assert(A₁ × A₂ ∈ P) →
    conclude(B1.satisfied())
  } →

  // Proof of B2
  proof_B2() {
    setVar(U₁, V₁ ∈ τ₁) →
    setVar(U₂, V₂ ∈ τ₂) →
    
    lemma CartesianIntersection() {
      assert((U₁ × U₂) ∩ (V₁ × V₂) = (U₁ ∩ V₁) × (U₂ ∩ V₂))
    } →
    
    assert(U₁ ∩ V₁ ∈ τ₁ ∧ U₂ ∩ V₂ ∈ τ₂) →
    assert((U₁ ∩ V₁) × (U₂ ∩ V₂) ∈ P) →
    assert((U₁ × U₂) ∩ (V₁ × V₂) = ⋃{B : B ∈ P}) →
    conclude(B2.satisfied())
  } →

  apply(proof_B1()) →
  apply(proof_B2()) →
  conclude(P is_synthetic_basis_on(A₁ × A₂))
}