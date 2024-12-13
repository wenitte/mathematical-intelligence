theorem ArensFort_Not_Compact() {
  assert(
    ∀T: TopologicalSpace where (
      T = ⟨S,τ⟩ ∧
      IsArensfortSpace(T)
    ) ⇒ ¬IsCompact(T)
  )
}

proof ArensFort_Not_Compact() {
  setVar(T: TopologicalSpace) →
  
  lemma CompactImpliesWLC() {
    assert(
      ∀X: TopologicalSpace →
      IsCompact(X) ⇒ IsWeaklyLocallyCompact(X)
    )
  } →

  lemma ArensfortNotWLC() {
    assert(
      ∀X: TopologicalSpace →
      IsArensfortSpace(X) ⇒ ¬IsWeaklyLocallyCompact(X)
    )
  } →

  apply(CompactImpliesWLC()) →
  apply(ArensfortNotWLC()) →
  
  assert(
    IsCompact(T) ⇒ IsWeaklyLocallyCompact(T) ∧
    ¬IsWeaklyLocallyCompact(T) ⇒
    ¬IsCompact(T)
  )
}