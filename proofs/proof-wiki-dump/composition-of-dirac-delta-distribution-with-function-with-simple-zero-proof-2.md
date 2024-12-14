theorem DiracDeltaComposition() {
  assert(
    ∀δ ∈ 𝒟'(ℝ) ∧ 
    ∀{δₙ(x)}_{n∈ℕ} [delta_sequence] ∧
    ∀f: ℝ → ℝ ∧
    HasSimpleZero(f, x₀) ∧
    IsStrictlyMonotone(f) ∧
    ∀φ ∈ 𝒟(ℝ) ⇒
    (δ(f(x)) = δ(x-x₀)/|f'(x₀)|)
  )
} ↔

proof DiracDeltaComposition() {
  setVar(H: Heaviside) →
  setVar(T: 𝒟(ℝ) | T = T_{H(f(x))}) →

  lemma HeavisideComposition() {
    assert(
      H(f(x)) = {
        H(x-x₀) if ∀x∈ℝ: f'(x) > 0,
        1-H(x-x₀) if ∀x∈ℝ: f'(x) < 0
      }
    )
  } →

  lemma DerivativeChainRule() {
    assert(
      d/dx[H(f(x))] = f'(x)·d[H(f(x))]/d[f(x)]
    )
  } →

  assert(∀x≠x₀: d/dx[H(f(x))] = 0) →
  assert(
    ∀x∈ℝ: f'(x)>0 ⇒ (f(x₀⁺)=1 ∧ f(x₀⁻)=0) ∧
    ∀x∈ℝ: f'(x)<0 ⇒ (f(x₀⁺)=0 ∧ f(x₀⁻)=1)
  ) →

  lemma JumpRule() {
    assert(
      T_{H(f(x))}' = {
        δx₀ if ∀x∈ℝ: f'(x) > 0,
        -δx₀ if ∀x∈ℝ: f'(x) < 0
      }
    )
  } →

  assert(T_{H(x)}' = δ₀ = δx) →
  assert(T_{H(f(x))}' = T_{f'(x)·d[H(f(x))]/d[f(x)]}) →
  assert(T_{H(f(x))}' = f'(x)δ_{f(x)}) →

  lemma PositiveDerivative() {
    assert(
      ∀x∈ℝ: f'(x) > 0 ⇒
      |f'(x)|δ_{f(x)} = δx₀ ⇒
      δ_{f(x)} = δx₀/|f'(x₀)|
    )
  } →

  lemma NegativeDerivative() {
    assert(
      ∀x∈ℝ: f'(x) < 0 ⇒
      -|f'(x)|δ_{f(x)} = -δx₀ ⇒
      δ_{f(x)} = δx₀/|f'(x₀)|
    )
  } →

  apply(PositiveDerivative()) ∧ 
  apply(NegativeDerivative()) →
  assert(δ(f(x)) = δ(x-x₀)/|f'(x₀)|)
}