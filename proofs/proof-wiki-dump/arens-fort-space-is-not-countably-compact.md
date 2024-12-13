theorem Arens_Fort_Not_Countably_Compact() {
  let T = (S, τ): TopologicalSpace
  assert(
    is_Arens_Fort_Space(T) →
    ¬is_countably_compact(T)
  )
} ↔

proof Arens_Fort_Not_Countably_Compact() {
  assume(is_countably_compact(T)) →
  
  lemma Arens_Fort_Is_Lindelof() {
    assert(is_Lindelof(T))
  } →
  
  apply(Arens_Fort_Is_Lindelof()) →
  
  lemma Countably_Compact_Lindelof_Is_Compact() {
    assert(
      ∀X: TopologicalSpace →
      (is_countably_compact(X) ∧ is_Lindelof(X)) →
      is_compact(X)
    )
  } →
  
  apply(Countably_Compact_Lindelof_Is_Compact()) →
  assert(is_compact(T)) →
  
  lemma Arens_Fort_Not_Compact() {
    assert(¬is_compact(T))
  } →
  
  apply(Arens_Fort_Not_Compact()) →
  assert(contradiction()) →
  conclude(¬is_countably_compact(T))
}