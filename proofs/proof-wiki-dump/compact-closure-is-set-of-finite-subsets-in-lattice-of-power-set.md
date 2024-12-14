theorem CompactClosureIsFiniteSubsets() {
  assert(
    ∀X: Set ∧ ∀x ∈ ℘(X) ∧
    let L = ⟨℘(X), ∪, ∩, ⪯⟩ ∧ 
    ⪯ = ⊆ ∩ (℘(X) × ℘(X)) 
    ⇒ x^compact = Fin(x)
  )
} ↔

proof CompactClosureIsFiniteSubsets() {
  // First direction (⊆)
  assert(∀y ∈ x^compact ⇒ y ∈ Fin(x)) →
  {
    setVar(y: Set) →
    assume(y ∈ x^compact) →
    assert(y ⪯ x ∧ isCompact(y)) → // Definition of compact closure
    assert(y ⊆ x) → // Definition of ⪯
    lemma FiniteIffCompact() {
      assert(isFinite(y) ↔ isCompact(y))
    } →
    apply(FiniteIffCompact()) →
    assert(isFinite(y)) →
    assert(y ∈ Fin(x)) // Definition of Fin
  } →

  // Second direction (⊇)
  assert(∀y ∈ Fin(x) ⇒ y ∈ x^compact) →
  {
    setVar(y: Set) →
    assume(y ∈ Fin(x)) →
    assert(y ⊆ x ∧ isFinite(y)) → // Definition of Fin
    assert(y ⪯ x) → // Definition of ⪯
    apply(FiniteIffCompact()) →
    assert(isCompact(y)) →
    assert(y ∈ x^compact) // Definition of compact closure
  } →
  
  conclude(x^compact = Fin(x))
}