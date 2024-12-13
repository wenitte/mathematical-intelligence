theorem Canonical_Injection_Is_Injection() {
  assert(
    ∀(S₁, ∘₁), (S₂, ∘₂) [AlgebraicStructure((S₁, ∘₁)) ∧ AlgebraicStructure((S₂, ∘₂))] ∧
    ∃e₁, e₂ [Identity(e₁, S₁) ∧ Identity(e₂, S₂)] →
    [∀x ∈ S₁: inj₁(x) = (x, e₂) ∧ ∀x ∈ S₂: inj₂(x) = (e₁, x)] →
    [Injection(inj₁) ∧ Injection(inj₂)]
  )
} ↔

proof Canonical_Injection_Is_Injection() {
  proof_inj₁() {
    setVar(x, x': S₁) →
    assume(inj₁(x) = inj₁(x')) →
    assert((x, e₂) = (x', e₂)) →
    apply(OrderedPairEquality) →
    conclude(x = x') →
    therefore(Injection(inj₁))
  } →

  proof_inj₂() {
    setVar(x, x': S₂) →
    assume(inj₂(x) = inj₂(x')) →
    assert((e₁, x) = (e₁, x')) →
    apply(OrderedPairEquality) →
    conclude(x = x') →
    therefore(Injection(inj₂))
  } →

  conclude(Injection(inj₁) ∧ Injection(inj₂))
}

theorem General_Canonical_Injection() {
  assert(
    ∀n ∈ ℕ, ∀j ∈ [1..n],
    ∀(Sᵢ, ∘ᵢ)ᵢ₌₁ⁿ [AlgebraicStructure((Sᵢ, ∘ᵢ))] ∧
    ∃(eᵢ)ᵢ₌₁ⁿ [∀i ∈ [1..n]: Identity(eᵢ, Sᵢ)] →
    [∀x ∈ Sⱼ: injⱼ(x) = (e₁,...,eⱼ₋₁,x,eⱼ₊₁,...,eₙ)] →
    Injection(injⱼ)
  )
}