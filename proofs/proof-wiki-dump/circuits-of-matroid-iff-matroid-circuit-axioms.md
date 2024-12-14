theorem Matroid_Circuit_Equivalence() {
  let(S: Set, finite) ∧
  let(𝓒: Set[Set], 𝓒 ≠ ∅) →
  assert(
    isCircuitSet(𝓒, S) ↔ satisfiesCircuitAxioms(𝓒)
  )
}

proof Matroid_Circuit_Equivalence() {
  // Forward direction
  proof_part Circuits_Imply_Axioms() {
    let(M: Matroid(S, 𝓘)) ∧
    let(𝓒: CircuitSet(M)) →
    
    // Prove C1
    assert(∅ ∉ 𝓒) {
      ∀C ∈ 𝓒 → isDependentSet(C) ∧
      ∀C ∈ 𝓒 → C ∉ 𝓘 ∧
      ∅ ∈ 𝓘 →
      ∅ ∉ 𝓒
    } →

    // Prove C2 
    assert(∀C₁,C₂ ∈ 𝓒: C₁ ≠ C₂ → C₁ ⊈ C₂) {
      let(C₁,C₂: 𝓒) ∧
      isMinimalDependent(C₂) ∧
      isDependentSet(C₁) →
      C₁ ⊈ C₂
    } →

    // Prove C3
    assert(∀C₁,C₂ ∈ 𝓒: C₁ ≠ C₂ ∧ z ∈ (C₁ ∩ C₂) → 
           ∃C₃ ∈ 𝓒: C₃ ⊆ (C₁ ∪ C₂)∖{z}) {
      let(ρ: RankFunction(M)) ∧
      applyRankInequality(ρ(C₁ ∪ C₂) ≤ ρ(C₁) + ρ(C₂) - ρ(C₁ ∩ C₂)) →
      contradiction()
    }
  }

  // Reverse direction
  proof_part Axioms_Imply_Circuits() {
    let(θ: Function) {
      θ(x₁,...,xₖ)ᵢ = case {
        ∃C ∈ 𝓒: xᵢ ∈ C ⊆ {x₁,...,xᵢ} → 0
        otherwise → 1
      }
    } →
    
    let(t: Function) {
      t(x₁,...,xₖ) = Σᵢ₌₁ᵏ θ(x₁,...,xₖ)ᵢ
    } →

    let(ρ: Function) {
      ρ(A) = case {
        A = ∅ → 0
        A = {x₁,...,xₖ} → t(x₁,...,xₖ)
      }
    } →

    verify_rank_axioms(ρ) →
    assert(𝓒 = CircuitSet(Matroid(S,ρ)))
  }
}