theorem Completion_Uniqueness() {
  assert(
    ∀M(M = ⟨A,d⟩ ∧ isMetricSpace(M)) ∧
    ∀M̃(M̃ = ⟨Ã,d̃⟩ ∧ isCompletion(M̃,M)) →
    ∃!τ(
      isBijection(τ: Ã → Â) ∧
      (∀x ∈ A: τ(x) = x) ∧
      (∀x₁,x₂ ∈ A: d̂(τ(x₁),τ(x₂)) = d̃(x₁,x₂))
    )
  )
} ↔

proof Completion_Uniqueness() {
  setVar(M₁ = ⟨Ã₁,d̃₁,φ₁⟩, M₂ = ⟨Ã₂,d̃₂,φ₂⟩: Completion(M)) →
  assert(isIsometry(φ₁: A → A₁) ∧ isIsometry(φ₂: A → A₂)) →
  
  lemma Composite_Isometry() {
    assert(ψ = φ₂∘φ₁⁻¹ → isIsometry(ψ)) →
    assert(isDense(φ₁[A], A₁) ∧ isDense(φ₂[A], A₂))
  } →
  
  lemma Continuous_Extension() {
    ∀x ∈ A₁: ∃{wₙ}(
      isCauchySequence({wₙ}) ∧ 
      lim(n→∞)(wₙ) = x →
      ψ(x) := lim(n→∞)(ψ(wₙ))
    )
  } →
  
  lemma Well_Defined() {
    assert(isHausdorff(A)) →
    assert(isHausdorff(A₁) ∧ isHausdorff(A₂)) →
    assert(hasUniqueLimits(A₁) ∧ hasUniqueLimits(A₂))
  } →
  
  lemma Surjectivity() {
    ∀y ∈ Ã₂: ∃{wₙ'}(
      isCauchySequence({wₙ'}) ∧
      wₙ' ∈ φ₂[A] ∧
      lim(n→∞)(wₙ') = y →
      ∃{zₙ}(ψ(zₙ) = wₙ' ∧ lim(n→∞)(ψ(zₙ)) = y)
    )
  } →
  
  lemma Injectivity() {
    ∀w,w' ∈ A₁: (
      lim(n→∞)(ψ(wₙ)) = lim(n→∞)(ψ(wₙ')) ∧
      lim(n→∞)(wₙ) = w ∧
      lim(n→∞)(wₙ') = w' →
      w = w'
    )
  } →
  
  apply(Distance_Continuity()) →
  assert(isIsometry(ψ: A₁ → A₂))
}