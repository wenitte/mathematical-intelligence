theorem ArensFortsIsLindelof() {
  let(T = ⟨S,τ⟩: ArensFortsSpace) →
  assert(
    IsLindelof(T)
  )
} ↔

proof ArensFortsIsLindelof() {
  let(T = ⟨S,τ⟩: ArensFortsSpace) →
  
  lemma SigmaCompact() {
    assert(IsSigmaCompact(T))
  } →
  
  lemma SigmaCompactImpliesLindelof() {
    assert(
      ∀X: TopologicalSpace →
      IsSigmaCompact(X) → IsLindelof(X)
    )
  } →
  
  apply(SigmaCompact()) ∧
  apply(SigmaCompactImpliesLindelof()) →
  
  assert(IsLindelof(T))
}