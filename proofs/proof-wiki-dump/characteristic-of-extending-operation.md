theorem CharacteristicExtendingOperation() {
  assert(
    ∀E(IsExtendingOperation(E) → 
    ∃F(F: On → On ∧ 
    ∀α ∈ On: F↾α⁺ = E(F↾α)))
  )
} ↔

proof CharacteristicExtendingOperation() {
  setVar(E: ExtendingOperation) →
  lemma TransfiniteRecursion() {
    assert(
      ∃M(
        M₀ = ∅ ∧
        ∀α ∈ On: Mₐ⁺ = E(Mₐ) ∧
        ∀λ ∈ K_II: Mλ = ⋃_{α<λ} Mₐ
      )
    )
  } →
  
  assert(M₀ = ∅ → IsZeroSequence(M₀)) →
  
  lemma InductiveStep() {
    setVar(α: On) →
    assert(IsαSequence(Mₐ) → 
           IsSuccessorSequence(Mₐ⁺))
  } →
  
  lemma LimitCase() {
    setVar(λ: K_II) →
    assert(
      (∀α < λ: IsαSequence(Mₐ)) →
      IsλSequence(Mλ)
    )
  } →
  
  apply(SecondPrincipleTransfiniteInduction()) →
  assert(∀α ∈ On: IsαSequence(Mₐ)) →
  
  setVar(F = ⋃M) →
  apply(LengthUnionChainOrdinalSequences()) →
  assert(F: On → On) →
  
  assert(∀α ∈ On: (Mₐ ⊆ F ∧ Dom(Mₐ) = α) → Mₐ = F↾α) →
  apply(UnionNestOrdinalSequencesProperClass()) →
  
  assert(∀α ∈ On: F↾α⁺ = E(F↾α))
}