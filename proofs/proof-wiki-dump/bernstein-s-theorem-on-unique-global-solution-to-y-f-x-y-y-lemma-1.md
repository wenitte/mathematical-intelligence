theorem Bernstein_Lemma_1() {
  let I = [a,b] ⊂ ℝ
  let F, F_y, F_{y'}: I×ℝ×ℝ → ℝ
  assert(
    (F ∧ F_y ∧ F_{y'} continuous on I×ℝ×ℝ) ∧
    (∃k>0: ∀(x,y,y')∈I×ℝ×ℝ: F_y(x,y,y') > k) ∧
    (∃α,β≥0: ∀(x,y,y'): |F(x,y,y')| ≤ αy'^2 + β) ∧
    (∃L: integral_curve(F) ∧ L(a)=A ∧ L(b)=B ∧ a≠b)
    ⇒ L is unique
  )
}

proof Bernstein_Lemma_1() {
  setVar(φ₁,φ₂: integral_curves(F)) →
  assume(φ₁≠φ₂) →
  define(δ(x) = φ₂(x) - φ₁(x)) →
  assert(δ(a) = δ(b) = 0) →
  
  lemma Mean_Value_Expansion() {
    assert(
      δ''(x) = F(x,φ₁+δ,φ₁'+δ') - F(x,φ₁,φ₁') =
      δ(x)F_y* + δ'(x)F_{y'}*
      where
      F_y* = F_y(x,φ₁+θδ,φ₁'+θδ') ∧
      F_{y'}* = F_{y'}(x,φ₁+θδ,φ₁'+θδ') ∧
      θ∈(0,1)
    )
  } →

  cases {
    case(∃ξ∈(a,b): δ(ξ) = max(δ)) {
      assert(δ''(ξ)≤0 ∧ δ(ξ)>0 ∧ δ'(ξ)=0) →
      apply(Mean_Value_Expansion()) →
      assert(F_y*≤0)
    }
    case(∃ξ∈(a,b): δ(ξ) = min(δ)) {
      assert(δ''(ξ)≥0 ∧ δ(ξ)<0 ∧ δ'(ξ)=0) →
      apply(Mean_Value_Expansion()) →
      assert(F_y*≤0)
    }
  } →
  
  assert(F_y*≤0 contradicts F_y>k>0) →
  conclude(φ₁=φ₂)
}