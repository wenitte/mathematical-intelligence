theorem AsympEqual_SinX_X() {
  assert(
    ∀f,g: ℝ→ℝ,
    (∀x∈ℝ: f(x)=sin(x)) ∧
    (∀x∈ℝ: g(x)=x) ⇒
    (f ∼ g as x→0)
  )
} ↔

proof AsympEqual_SinX_X() {
  setVar(f,g: ℝ→ℝ) →
  assert(∀x∈ℝ: f(x)=sin(x)) →
  assert(∀x∈ℝ: g(x)=x) →
  
  lemma Ratio_Analysis() {
    assert(
      ∀x≠0: f(x)/g(x) = sin(x)/x
    )
  } →
  
  apply(Ratio_Analysis()) →
  
  lemma Limit_SinX_X() {
    assert(
      lim[x→0](sin(x)/x) = 1
    )
  } →
  
  apply(Limit_SinX_X()) →
  
  assert(
    lim[x→0](f(x)/g(x)) = 1
  ) →
  
  conclude(
    f ∼ g as x→0
  )
}