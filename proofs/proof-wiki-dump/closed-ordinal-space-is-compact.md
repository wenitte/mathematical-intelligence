theorem Closed_Ordinal_Space_Is_Compact() {
  assert(
    ∀Γ ∈ OrdinalNumbers ∧ isLimitOrdinal(Γ) ⇒
    isCompact([0,Γ])
  )
} ↔

proof Closed_Ordinal_Space_Is_Compact() {
  setVar(Γ: OrdinalNumber) →
  assert(isLimitOrdinal(Γ)) →
  assert([0,Γ] ∈ LinearlyOrderedSpace) →
  lemma Linearly_Ordered_Space_Compact_Iff_Complete() {
    assert(
      ∀X ∈ LinearlyOrderedSpace ⇒
      (isCompact(X) ↔ isComplete(X))
    )
  } →
  apply(Linearly_Ordered_Space_Compact_Iff_Complete()) →
  assert(isComplete([0,Γ])) →
  conclude(isCompact([0,Γ]))
}