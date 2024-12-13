theorem Horizontal_Asymptotes_Bound() {
  assert(
    ∀f: ℝ → ℝ ⇒ |{y ∈ ℝ : y is_horizontal_asymptote_of f}| ≤ 2
  )
}

proof Horizontal_Asymptotes_Bound() {
  setDef(horizontal_asymptote, {
    y ∈ ℝ: lim(x→∞) f(x) = y ∨ lim(x→-∞) f(x) = y
  }) →
  assert(
    ∀f: ℝ → ℝ ⇒ (
      |{lim(x→∞) f(x), lim(x→-∞) f(x)}| ≤ 2
    )
  ) →
  apply(horizontal_asymptote_definition) →
  conclude(|{y ∈ ℝ : y is_horizontal_asymptote_of f}| ≤ 2)
}