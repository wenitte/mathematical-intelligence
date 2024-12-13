theorem CanonicalOrder_WellOrders() {
  assert(
    ∀R₀(IsCanonicalOrder(R₀) → StrictWellOrders(R₀, OrdinalPairs))
  )
} ↔

proof CanonicalOrder_WellOrders() {
  // Part 1: Strict Ordering
  lemma Antireflexive() {
    setVar(x,y: Ordinal) →
    assert(¬((x,y) R₀ (x,y))) ↔
    assert(¬(max(x,y) < max(x,y) ∨ (x,y) Le (x,y)))
  } →

  lemma Transitive() {
    setVar(α,β,γ,δ,ε,ζ: Ordinal) →
    assert((α,β) R₀ (γ,δ) ∧ (γ,δ) R₀ (ε,ζ)) →
    case {
      when(max(α,β) < max(γ,δ)) {
        assert(max(γ,δ) ≤ max(ε,ζ)) →
        assert(max(α,β) < max(ε,ζ)) →
        assert((α,β) R₀ (ε,ζ))
      } ∧
      when(max(α,β) = max(γ,δ)) {
        assert((α,β) Le (γ,δ)) →
        assert(max(α,β) < max(ε,ζ) ∨ (α,β) Le (ε,ζ)) →
        assert((α,β) R₀ (ε,ζ))
      }
    }
  } →

  // Part 2: Strict Total Ordering
  lemma StrictTotal() {
    setVar(α,β,γ,δ: Ordinal) →
    assert(¬((α,β) R₀ (γ,δ)) ∧ ¬((γ,δ) R₀ (α,β))) →
    assert(max(α,β) ≤ max(γ,δ) ∧ max(γ,δ) ≤ max(α,β)) →
    assert(max(α,β) = max(γ,δ)) →
    assert(¬((α,β) Le (γ,δ)) ∧ ¬((γ,δ) Le (α,β))) →
    apply(LexicographicOrderWellOrdering()) →
    assert((α,β) = (γ,δ))
  } →

  // Part 3: Well-Ordering
  lemma WellOrdered() {
    setVar(A: Set(OrdinalPairs)) →
    assume(A ≠ ∅) →
    setVar(N: Ordinal = min(image(max, A))) →
    setVar(B: Set = {(x,y) ∈ A | max(x,y) = N}) →
    setVar(C: OrdinalPair = Le_min(B)) →
    assert(max(C) = N) →
    assert(IsMinimal(C, A, R₀))
  } →

  // Conclusion
  apply(Antireflexive()) →
  apply(Transitive()) →
  apply(StrictTotal()) →
  apply(WellOrdered()) →
  assert(StrictWellOrders(R₀, OrdinalPairs))
}