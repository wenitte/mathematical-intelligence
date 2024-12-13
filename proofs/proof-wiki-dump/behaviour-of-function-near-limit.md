theorem Function_Near_Limit() {
  given(
    f: ℝ → ℝ,
    l: ℝ,
    ξ: ℝ,
    lim(x→ξ) f(x) = l
  )
  assert(
    (l > 0 → ∃h > 0: ∀x: ((ξ - h < x < ξ + h) ∧ x ≠ ξ) → f(x) > 0)
    ∧
    (l < 0 → ∃h > 0: ∀x: ((ξ - h < x < ξ + h) ∧ x ≠ ξ) → f(x) < 0)
  )
} ↔

proof Function_Near_Limit() {
  lemma Limit_Definition() {
    assert(∀ε > 0: ∃δ > 0: ∀x: (0 < |x - ξ| < δ) → |f(x) - l| < ε)
  } →
  
  branch(l > 0) {
    setVar(ε = l) →
    apply(Limit_Definition()) →
    setVar(h = δ) →
    assert(0 < |x - ξ| < h → |f(x) - l| < l) →
    assert((ξ - h < x < ξ + h) ∧ x ≠ ξ → 0 < f(x) < 2l) →
    conclude(∃h > 0: ∀x: ((ξ - h < x < ξ + h) ∧ x ≠ ξ) → f(x) > 0)
  } →
  
  branch(l < 0) {
    setVar(ε = -l) →
    apply(Limit_Definition()) →
    setVar(h = δ) →
    assert(0 < |x - ξ| < h → |f(x) - l| < -l) →
    assert((ξ - h < x < ξ + h) ∧ x ≠ ξ → -2l < f(x) < 0) →
    conclude(∃h > 0: ∀x: ((ξ - h < x < ξ + h) ∧ x ≠ ξ) → f(x) < 0)
  }
}