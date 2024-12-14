theorem ClosedConvexSetDual() {
  assert(
    ∀X: NormedVectorSpace(ℝ) ∧
    ∀X*: NormedDual(X) ∧
    ∀C: ClosedConvexSet(X) ⇒
    C = ⋂{f∈X*}({x∈X: f(x) ≤ sup{c∈C}(f(c))})
  )
} ↔

proof ClosedConvexSetDual() {
  // Forward inclusion
  lemma ForwardInclusion() {
    setVar(x: X, x∈C) →
    assert(∀f∈X*, f(x) ≤ sup{c∈C}(f(c))) →
    conclude(C ⊆ ⋂{f∈X*}({x∈X: f(x) ≤ sup{c∈C}(f(c)}))
  } →

  // Reverse inclusion by contradiction
  lemma ReverseInclusion() {
    setVar(x₀: X, x₀∉C) →
    assert({x₀}.isCompact()) →
    assert({x₀} ∩ C = ∅) →
    apply(HahnBanachSeparationTheorem({x₀}, C)) →
    assert(∃f∈X*, ∃c∈ℝ, ∃ε>0: 
      f(x₀) ≤ c-ε < c+ε ≤ f(x) ∀x∈C) →
    assert(c+ε ≤ inf{x∈C}(f(x))) →
    apply(NegativeSupremumLemma()) →
    setVar(g = -f) →
    assert(g∈X* ∧ g(x₀) > sup{x∈C}(g(x))) →
    conclude(x₀ ∉ ⋂{f∈X*}({x∈X: f(x) ≤ sup{c∈C}(f(c)}))
  } →

  apply(ForwardInclusion()) →
  apply(ReverseInclusion()) →
  assert(⋂{f∈X*}({x∈X: f(x) ≤ sup{c∈C}(f(c))}) ⊆ C) →
  conclude(C = ⋂{f∈X*}({x∈X: f(x) ≤ sup{c∈C}(f(c))}))
}