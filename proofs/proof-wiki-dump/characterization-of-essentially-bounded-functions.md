theorem EssentiallyBoundedCharacterization() {
  let(X, Σ, μ: MeasureSpace) →
  let(f: X → ℝ, Σ-measurable) →
  assert(
    (1) f.isEssentiallyBounded() ↔
    (2) ∃g: X → ℝ (g.isBounded() ∧ f =μ.ae g)
  )
}

proof EssentiallyBoundedCharacterization() {
  // Forward direction (1) → (2)
  proof_direction_1to2() {
    assume(f.isEssentiallyBounded()) →
    ∃c ∈ ℝ(μ({x ∈ X: |f(x)| > c}) = 0) →
    let(A = {x ∈ X: |f(x)| ≤ c}) →
    define(g: X → ℝ, x ↦ {
      f(x) if x ∈ A
      0    if x ∉ A
    }) →
    assert(∀x ∈ X(|g(x)| ≤ c)) →
    assert(g.isBounded()) →
    assert({x ∈ X: f(x) ≠ g(x)} ⊆ X\A) →
    assert(μ(X\A) = μ({x ∈ X: |f(x)| > c}) = 0) →
    conclude(f =μ.ae g)
  }

  // Reverse direction (2) → (1)
  proof_direction_2to1() {
    assume(∃g: X → ℝ(g.isBounded() ∧ f =μ.ae g)) →
    let(N: X → Bool, μ(N) = 0, ∀x ∈ X(f(x) ≠ g(x) → x ∈ N)) →
    let(M = sup{|g(x)|: x ∈ X}) →
    assert(∀x ∈ X(|g(x)| ≤ M)) →
    assert({x ∈ X: |f(x)| > M} ⊆ N) →
    lemma AbsValueMeasurable() {
      assert(|f| is Σ-measurable)
    } →
    apply(AbsValueMeasurable()) →
    lemma MeasurableCharacterization() {
      assert({x ∈ X: |f(x)| > M} is Σ-measurable)
    } →
    apply(MeasurableCharacterization()) →
    lemma NullSetsClosed() {
      assert(A ⊆ B ∧ μ(B) = 0 → μ(A) = 0)
    } →
    apply(NullSetsClosed()) →
    assert(μ({x ∈ X: |f(x)| > M}) = 0) →
    conclude(f.isEssentiallyBounded())
  }
}