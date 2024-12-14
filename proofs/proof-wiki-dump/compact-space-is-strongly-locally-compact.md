theorem Compact_Is_Strongly_Locally_Compact() {
  assert(
    ∀T[T = ⟨S,τ⟩ ∧ isCompactSpace(T)] →
    isStronglyLocallyCompactSpace(T)
  )
} ↔

proof Compact_Is_Strongly_Locally_Compact() {
  setVar(T: TopologicalSpace) →
  assume(T = ⟨S,τ⟩ ∧ isCompactSpace(T)) →
  
  lemma UnderlyingSetClopen() {
    assert(isClopenSet(S, T))
  } →
  
  lemma ClosedSetEqualsItsClosure() {
    assert(S = S⁻)
  } →
  
  apply(UnderlyingSetClopen()) →
  apply(ClosedSetEqualsItsClosure()) →
  
  assert(∀x ∈ S ⇒ [
    ∃U ∈ τ[
      x ∈ U ∧
      U = S ∧
      isCompact(U⁻) ∧
      U⁻ = S
    ]
  ]) →
  
  conclude(isStronglyLocallyCompactSpace(T)) ↔
  QED()
}