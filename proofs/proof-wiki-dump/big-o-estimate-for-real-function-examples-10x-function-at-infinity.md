theorem BigO_10x_Function() {
  assert(
    ∀f: ℝ → ℝ ∧
    (∀x ∈ ℝ: f(x) = 10x) ⇒
    f(x) = 𝓞(x) as x → ∞
  )
} ↔

proof BigO_10x_Function() {
  setVar(f: ℝ → ℝ) →
  setVar(g: ℝ → ℝ | ∀x ∈ ℝ: g(x) = x) →
  
  lemma Bound_Exists() {
    assert(
      ∀x ∈ ℝ_{>0}: |f(x)| = |10x| = 10|x| < 11|x|
    )
  } →

  apply(Bound_Exists()) →
  
  assert(
    ∃M ∈ ℝ_{>0} (M = 11) ∧
    ∃x_0 ∈ ℝ (x_0 = 1) ∧
    ∀x > x_0: |f(x)| ≤ M|x|
  ) →
  
  assert(
    f(x) = 𝓞(x) as x → ∞
  )
}