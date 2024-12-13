theorem Bound_Negative_Part_Sum() {
  let(X: Set)
  let(f,g: X → R̄)
  assume(
    ∀x ∈ X ⇒ {f(x),g(x)} ≠ {∞,-∞}
  )
  assert(
    (f + g)⁻ ≤ f⁻ + g⁻
  )
} ↔

proof Bound_Negative_Part_Sum() {
  let(x ∈ X) →
  assert(f⁻(x) = -min{f(x),0}) ∧
  assert(g⁻(x) = -min{g(x),0}) →

  lemma Finite_Case() {
    assume(f(x) ∈ ℝ ∧ g(x) ∈ ℝ) →
    assert(f⁻(x) = (|f(x)| - f(x))/2) ∧
    assert(g⁻(x) = (|g(x)| - g(x))/2) →
    assert((f + g)⁻(x) = -min{f(x) + g(x),0}) →
    assert((f + g)⁻(x) = (|f(x) + g(x)| - (f(x) + g(x)))/2) →
    assert((f + g)⁻(x) ≤ (|f(x)| + |g(x)| - (f(x) + g(x)))/2) →
    assert((f + g)⁻(x) = f⁻(x) + g⁻(x))
  } →

  lemma Positive_Infinity_Case() {
    assume(f(x) = ∞ ∧ g(x) > -∞) →
    assert(f(x) + g(x) = ∞) →
    assert((f + g)⁻(x) = 0) ∧
    assert(f⁻(x) = 0) ∧
    assert(g⁻(x) ≥ 0) →
    assert((f + g)⁻(x) ≤ f⁻(x) + g⁻(x))
  } →

  lemma Negative_Infinity_Case() {
    assume(f(x) = -∞ ∧ g(x) < ∞) →
    assert(f(x) + g(x) = -∞) →
    assert((f + g)⁻(x) = ∞) ∧
    assert(f⁻(x) = ∞) →
    assert((f + g)⁻(x) ≤ f⁻(x) + g⁻(x))
  } →

  apply(Finite_Case() ∨ Positive_Infinity_Case() ∨ Negative_Infinity_Case()) →
  assert((f + g)⁻(x) ≤ f⁻(x) + g⁻(x))
}