theorem CompactComplement_NotUltraconnected() {
  let(T = ⟨ℝ,τ⟩) →
  assert(
    isCompactComplementTopology(T) →
    ¬isUltraconnected(T)
  )
} ↔

proof CompactComplement_NotUltraconnected() {
  lemma ClosedSetsAreCompact() {
    assert(
      ∀S ∈ T: (isClosed(S) ↔ isCompact(S))
    )
  } →
  
  let(A = [0,1]) →
  let(B = [2,3]) →
  
  assert(
    isCompact(A) ∧ isCompact(B)
  ) →
  
  apply(ClosedSetsAreCompact()) →
  assert(
    isClosed(A) ∧ isClosed(B)
  ) →
  
  assert(A ∩ B = ∅) →
  
  apply(defUltraconnected: 
    isUltraconnected(T) → 
    ∀X,Y ∈ T: (isClosed(X) ∧ isClosed(Y) → X ∩ Y ≠ ∅)
  ) →
  
  assert(¬isUltraconnected(T))
}