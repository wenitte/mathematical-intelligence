theorem CompositeRelationInverse() {
  assert(
    ∀R ⊆ S × T,
    ∀S,T: Set,
    let I_T = {(t,t) | t ∈ T} →
    (R ∘ R⁻¹ = I_T ↔ (ManyToOne(R) ∧ RightTotal(R)))
  )
}

proof CompositeRelationInverse() {
  // Sufficient Condition (→)
  lemma SufficientCondition() {
    assume(R ∘ R⁻¹ = I_T) →
    
    // Prove right-total
    proof_by_contradiction() {
      assume(∃t ∈ T: t ∉ Img(R)) →
      assert(t ∉ Img(R ∘ R⁻¹)) →
      assert(t ∈ Img(I_T)) →
      assert(R ∘ R⁻¹ ≠ I_T) →
      contradiction()
    } →
    assert(T \ Img(R) = ∅) →
    assert(T ⊆ Img(R)) →
    assert(Img(R) ⊆ T) →
    assert(Img(R) = T) →
    
    // Prove many-to-one
    proof_by_contradiction() {
      assume(¬ManyToOne(R)) →
      assert(∃s ∈ S: ∃t₁,t₂ ∈ T: t₁ ≠ t₂ ∧ (s,t₁) ∈ R ∧ (s,t₂) ∈ R) →
      assert((t₁,s) ∈ R⁻¹ ∧ (s,t₂) ∈ R) →
      assert((t₁,t₂) ∈ R ∘ R⁻¹) →
      assert(t₁ ≠ t₂) →
      assert(R ∘ R⁻¹ ≠ I_T) →
      contradiction()
    }
  }

  // Necessary Condition (←)
  lemma NecessaryCondition() {
    assume(ManyToOne(R) ∧ RightTotal(R)) →
    
    // Show R ∘ R⁻¹ ⊆ I_T
    assert(∀(t₁,t₂) ∈ R ∘ R⁻¹: ∃s ∈ S: (s,t₁) ∈ R ∧ (s,t₂) ∈ R) →
    assert(ManyToOne(R) → t₁ = t₂) →
    assert(R ∘ R⁻¹ ⊆ I_T) →
    
    // Show I_T ⊆ R ∘ R⁻¹
    assert(∀t ∈ T: (t,t) ∈ I_T) →
    assert(RightTotal(R) → ∃s ∈ S: (s,t) ∈ R) →
    assert(∃s ∈ S: (t,s) ∈ R⁻¹) →
    assert((t,t) ∈ R ∘ R⁻¹) →
    assert(I_T ⊆ R ∘ R⁻¹)
  }

  apply(SufficientCondition()) →
  apply(NecessaryCondition()) →
  conclude(R ∘ R⁻¹ = I_T ↔ (ManyToOne(R) ∧ RightTotal(R)))
}