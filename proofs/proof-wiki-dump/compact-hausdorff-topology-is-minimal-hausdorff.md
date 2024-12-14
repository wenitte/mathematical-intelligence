theorem Minimal_Hausdorff_Topology() {
  assert(
    ∀T(T = ⟨S,τ⟩ ∧ isHausdorff(T) ∧ isCompact(T) →
    ∀τ'⊆𝒫(S)(isHausdorff(⟨S,τ'⟩) → τ' = τ))
  )
}

proof Minimal_Hausdorff_Topology() {
  assume(
    ∃τ'(τ'⊆τ ∧ τ'≠τ ∧ isHausdorff(⟨S,τ'⟩))
  ) →
  
  lemma Identity_Continuous() {
    assert(
      Is: S→S continuous from ⟨S,τ⟩ to ⟨S,τ'⟩
    )
  } →
  
  setVar(A ∈ τ) →
  assert(S∖A is closed in ⟨S,τ⟩) →
  
  lemma Closed_Compact() {
    assert(
      isCompact(S∖A in ⟨S,τ⟩)
    )
  } →
  
  lemma Continuous_Compact() {
    assert(
      isCompact(Is[S∖A] in ⟨S,τ'⟩)
    )
  } →
  
  lemma Compact_Closed() {
    assert(
      isClosed(Is[S∖A] in ⟨S,τ'⟩)
    )
  } →
  
  assert(A = S∖Is[S∖A] ∈ τ') →
  assert(τ ⊆ τ') →
  assert(τ' ⊆ τ ∧ τ ⊆ τ' → τ' = τ) →
  assert(contradiction(τ' = τ, τ' ≠ τ)) →
  
  conclude(
    ¬∃τ'(τ'⊆τ ∧ τ'≠τ ∧ isHausdorff(⟨S,τ'⟩))
  )
}