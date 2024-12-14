theorem CharacteristicFunction_IsDiscrete() {
  given(
    Ω,Σ,Pr: ProbabilitySpace,
    E ∈ Σ,
    χ_E: Ω → {0,1}
  )
  assert(
    χ_E is_discrete_random_variable_on(Ω,Σ,Pr)
  )
} ↔

proof CharacteristicFunction_IsDiscrete() {
  def CharacteristicFunction() {
    ∀ω ∈ Ω ⇒ χ_E(ω) = {
      1 if ω ∈ E,
      0 if ω ∉ E
    }
  } →
  
  assert(
    ∀x ∈ ℝ ⇒ χ_E⁻¹(x) = {
      E if x = 1,
      Ω\E if x = 0,
      ∅ if x ∉ {0,1}
    }
  ) →
  
  lemma PreimageInSigma() {
    assert(
      ∀x ∈ ℝ ⇒ χ_E⁻¹(x) ∈ Σ
    )
    proof {
      case x = 1: E ∈ Σ [given] →
      case x = 0: (Ω\E) ∈ Σ [Σ_closed_under_complement] →
      case x ∉ {0,1}: ∅ ∈ Σ [Σ_contains_empty]
    }
  } →
  
  apply(PreimageInSigma()) →
  apply(def_discrete_random_variable) →
  conclude(χ_E is_discrete_random_variable_on(Ω,Σ,Pr))
}