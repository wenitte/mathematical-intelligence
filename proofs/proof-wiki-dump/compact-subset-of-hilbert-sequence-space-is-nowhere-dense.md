theorem CompactSubsetHilbertNowhereDense() {
  let(ℓ²: HilbertSpace) →
  let(A := {x: ℝ^ℕ | ∑_{i≥0} x_i² < ∞}) →
  let(d₂: MetricOnA) →
  assert(
    ∀H ⊆ ℓ² ∧ isCompact(H) ⇒ isNowhereDense(H)
  )
} ↔

proof CompactSubsetHilbertNowhereDense() {
  let(H: CompactSet(ℓ²)) →
  
  lemma CompactImpliesClosed() {
    assert(isCompact(H) ⇒ isClosed(H))
  } →
  
  apply(CompactImpliesClosed()) →
  assert(H⁻ = H) →  // closure equals set
  
  lemma NonemptyInteriorNotCompact() {
    assert(
      ∀S ⊆ ℓ² ∧ S° ≠ ∅ ⇒ ¬isCompact(S)
    )
  } →
  
  apply(NonemptyInteriorNotCompact()) →
  assert(H° = ∅) →  // interior is empty
  
  assert((H⁻)° = ∅) →  // closure's interior empty
  
  lemma NowhereDenseDef() {
    assert(
      isNowhereDense(H) ↔ (H⁻)° = ∅
    )
  } →
  
  apply(NowhereDenseDef()) →
  conclude(isNowhereDense(H))
}