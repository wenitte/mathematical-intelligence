theorem Composite_Monomorphisms_is_Monomorphism() {
  assert(
    ∀S₁,S₂,S₃[AlgebraicStructure(S₁,{∘₁,...,∘ₙ}) ∧ 
               AlgebraicStructure(S₂,{*₁,...,*ₙ}) ∧ 
               AlgebraicStructure(S₃,{⊕₁,...,⊕ₙ})] ∧
    ∀φ,ψ[Monomorphism(φ, S₁→S₂) ∧ Monomorphism(ψ, S₂→S₃)] ⇒
    Monomorphism(ψ∘φ, S₁→S₃)
  )
} ↔

proof Composite_Monomorphisms_is_Monomorphism() {
  setVar(S₁,S₂,S₃: AlgebraicStructure) →
  setVar(φ: S₁→S₂, ψ: S₂→S₃) →
  
  lemma CompHomomorphism() {
    assert(
      Homomorphism(φ) ∧ Homomorphism(ψ) ⇒ 
      Homomorphism(ψ∘φ)
    )
  } →

  lemma CompInjection() {
    assert(
      Injection(φ) ∧ Injection(ψ) ⇒ 
      Injection(ψ∘φ)
    )
  } →

  apply(CompHomomorphism()) →
  apply(CompInjection()) →
  
  assert(
    Monomorphism(f) ↔ (Homomorphism(f) ∧ Injection(f))
  ) →
  
  assert(
    Homomorphism(ψ∘φ) ∧ Injection(ψ∘φ) ⇒ 
    Monomorphism(ψ∘φ)
  )
}