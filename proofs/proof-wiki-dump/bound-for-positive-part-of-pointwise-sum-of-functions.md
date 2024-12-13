theorem Bound_Positive_Part_Sum() {
  setDomain(X: Set) ∧
  assert(∀f,g: X → ℝ̄) ∧
  require(¬∃x ∈ X: {f(x),g(x)} = {∞,-∞}) →
  assert((f + g)⁺ ≤ f⁺ + g⁺)
} ↔

proof Bound_Positive_Part_Sum() {
  setVar(x: X) →
  
  lemma Positive_Part_Definition() {
    assert(f⁺(x) = max{f(x),0}) ∧
    assert(g⁺(x) = max{g(x),0})
  } →

  case Finite_Values() {
    require(f(x) ∈ ℝ ∧ g(x) ∈ ℝ) →
    assert(f⁺(x) = (f(x) + |f(x)|)/2) ∧
    assert(g⁺(x) = (g(x) + |g(x)|)/2) →
    assert((f + g)⁺(x) = max{f(x) + g(x),0}) →
    assert((f + g)⁺(x) = ((f(x) + g(x)) + |f(x) + g(x)|)/2) →
    apply(Triangle_Inequality) →
    assert((f + g)⁺(x) ≤ ((f(x) + g(x)) + |f(x)| + |g(x)|)/2) →
    assert((f + g)⁺(x) = f⁺(x) + g⁺(x))
  } →

  case Positive_Infinite_f() {
    require(f(x) = ∞ ∧ g(x) > -∞) →
    assert(f(x) + g(x) = ∞) →
    assert((f + g)⁺(x) = ∞) ∧
    assert(f⁺(x) = ∞) →
    assert((f + g)⁺(x) ≤ f⁺(x) + g⁺(x))
  } →

  case Negative_Infinite_f() {
    require(f(x) = -∞ ∧ g(x) < ∞) →
    assert(f(x) + g(x) = -∞) →
    assert((f + g)⁺(x) = 0) ∧
    assert(f⁺(x) = 0) ∧
    assert(g⁺(x) ≥ 0) →
    assert((f + g)⁺(x) ≤ f⁺(x) + g⁺(x))
  } →

  assert(Symmetric_Cases_Hold_By_Swapping_f_g) →
  conclude((f + g)⁺ ≤ f⁺ + g⁺)
}