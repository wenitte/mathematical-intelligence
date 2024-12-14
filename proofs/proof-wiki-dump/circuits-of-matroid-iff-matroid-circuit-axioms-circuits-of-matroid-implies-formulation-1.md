theorem MatroidCircuitAxioms() {
  let(S: FiniteSet, C: SetOfSubsets(S), M: Matroid(S)) →
  assert(
    C = CircuitsOf(M) ⇒
    (C1: ∅ ∉ C) ∧
    (C2: ∀C₁,C₂ ∈ C → (C₁ ≠ C₂ ⇒ C₁ ⊈ C₂)) ∧
    (C3: ∀C₁,C₂ ∈ C → (C₁ ≠ C₂ ∧ z ∈ C₁ ∩ C₂ ⇒ ∃C₃ ∈ C: C₃ ⊆ (C₁ ∪ C₂)∖{z}))
  )
}

proof MatroidCircuitAxioms() {
  proof_C1() {
    assume(C ∈ CircuitsOf(M)) →
    assert(∀C ∈ C → C.isDependent()) →
    assert(∀C ∈ C → C ∉ M.I) →
    assert(∅ ∈ M.I) →
    conclude(∅ ∉ C)
  } →

  proof_C2() {
    setVar(C₁,C₂: C, C₁ ≠ C₂) →
    assert(C₂.isMinimalDependent()) →
    assert(C₁.isDependent()) →
    conclude(C₁ ⊈ C₂)
  } →

  proof_C3() {
    setVar(ρ: M.rankFunction) →
    proof_byContradiction() {
      assume(
        ∃C₁,C₂ ∈ C: (
          C₁ ≠ C₂ ∧
          ∃z ∈ C₁ ∩ C₂: ¬∃C₃ ∈ C: C₃ ⊆ (C₁ ∪ C₂)∖{z}
        )
      ) →
      assert((C₁ ∪ C₂)∖{z}.isIndependent()) →
      assert((C₁ ∩ C₂).isIndependent()) →
      
      calc() {
        ρ(C₁ ∪ C₂) ≤ ρ(C₁) + ρ(C₂) - ρ(C₁ ∩ C₂) →
        = (|C₁| - 1) + (|C₂| - 1) - ρ(C₁ ∩ C₂) →
        = |C₁| + |C₂| - 2 - ρ(C₁ ∩ C₂) →
        = |C₁ ∪ C₂| + |C₁ ∩ C₂| - 2 - ρ(C₁ ∩ C₂) →
        = |C₁ ∪ C₂| + |C₁ ∩ C₂| - 2 - |C₁ ∩ C₂| →
        = |C₁ ∪ C₂| - 2 →
        = |C₁ ∪ C₂| - |{z}| - 1 →
        = |(C₁ ∪ C₂)∖{z}| - 1 →
        = ρ((C₁ ∪ C₂)∖{z}) - 1 →
        ≤ ρ(C₁ ∪ C₂) - 1
      }
      conclude(contradiction)
    }
  }
}