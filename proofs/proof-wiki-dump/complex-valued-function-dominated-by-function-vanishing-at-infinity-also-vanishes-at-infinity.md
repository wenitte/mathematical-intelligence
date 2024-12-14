theorem Complex_Function_Vanishing() {
  let(X: TopologicalSpace) →
  let(g: X → ℂ, vanishingAtInfinity(g)) →
  let(f: X → ℂ) →
  assert(∀x ∈ X ⇒ |f(x)| ≤ |g(x)|) →
  assert(vanishingAtInfinity(f))
} ↔

proof Complex_Function_Vanishing() {
  let(ε > 0) →
  byDef(vanishingAtInfinity(g)) →
  assert(∃F ⊆ X: (
    isCompact(F) ∧
    ∀x ∈ (X \ F) ⇒ |g(x)| < ε
  )) →
  let(x ∈ (X \ F)) →
  assert(|f(x)| ≤ |g(x)| < ε) by {
    apply(transitivity) →
    apply(hypothesis: |f(x)| ≤ |g(x)|) →
    apply(hypothesis: |g(x)| < ε)
  } →
  assert(∀ε > 0 ⇒ ∃F ⊆ X: (
    isCompact(F) ∧
    ∀x ∈ (X \ F) ⇒ |f(x)| < ε
  )) →
  byDef(vanishingAtInfinity(f))
}