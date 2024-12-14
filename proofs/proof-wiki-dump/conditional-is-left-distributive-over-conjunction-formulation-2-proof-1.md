theorem Conditional_Left_Distributive() {
  assert(
    ⊢ ((p ⟹ (q ∧ r)) ⟺ ((p ⟹ q) ∧ (p ⟹ r)))
  )
} ↔

proof Conditional_Left_Distributive() {
  // Forward direction
  proof_forward() {
    setVar(φ := p ⟹ (q ∧ r)) →
    setVar(ψ := (p ⟹ q) ∧ (p ⟹ r)) →
    
    assume(φ) →
    apply(Sequent_Introduction, φ) →
    derive(ψ) →
    apply(Rule_of_Implication) →
    conclude(φ ⟹ ψ)
  } ∧

  // Reverse direction
  proof_reverse() {
    setVar(φ := (p ⟹ q) ∧ (p ⟹ r)) →
    setVar(ψ := p ⟹ (q ∧ r)) →
    
    assume(φ) →
    apply(Sequent_Introduction, φ) →
    derive(ψ) →
    apply(Rule_of_Implication) →
    conclude(φ ⟹ ψ)
  } →

  // Combine both directions
  conclude(
    ((p ⟹ (q ∧ r)) ⟺ ((p ⟹ q) ∧ (p ⟹ r)))
  )
}