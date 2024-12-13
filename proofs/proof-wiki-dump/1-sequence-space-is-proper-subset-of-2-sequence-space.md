theorem L1_Proper_Subset_L2() {
  assert(
    (ℓ¹ ⊂ ℓ²) ∧ (ℓ¹ ≠ ℓ²)
  )
} ↔

proof L1_Proper_Subset_L2() {
  block Subset_Proof() {
    setVar(x_n: ℕ → ℝ) →
    assume(x_n ∈ ℓ¹) →
    assert(∑_{n=0}^∞ |x_n| < ∞) →
    apply(Terms_In_Convergent_Series_Converge()) →
    assert(lim_{n→∞} |x_n| = 0) →
    assert(∃N ∈ ℕ: ∀n > N: |x_n| < 1) →
    assert(∀n: |x_n| < 1 → |x_n|² < |x_n|) →
    apply(Comparison_Test()) →
    assert(∑_{n=0}^∞ |x_n|² < ∞) →
    conclude(x_n ∈ ℓ²) →
    conclude(ℓ¹ ⊆ ℓ²)
  }

  block Not_Superset_Proof() {
    setVar(x_n: ℕ_{>0} → ℝ) →
    define(x_n = 1/n) →
    apply(Basel_Problem()) →
    assert(∑_{n=1}^∞ 1/n² < ∞) →
    apply(Harmonic_Series_Divergent()) →
    assert(∑_{n=1}^∞ 1/n = ∞) →
    conclude(x ∈ ℓ² ∧ x ∉ ℓ¹) →
    conclude(ℓ² ⊈ ℓ¹)
  }

  combine(Subset_Proof(), Not_Superset_Proof()) →
  conclude(ℓ¹ ⊊ ℓ²)
}