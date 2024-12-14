theorem Compact_Hausdorff_Is_T4() {
  assert(
    ∀T = ⟨S,τ⟩: TopologicalSpace(T) ∧ Compact(T) ∧ Hausdorff(T) 
    ⇒ T4_Space(T)
  )
} ↔

proof Compact_Hausdorff_Is_T4() {
  lemma CompactSubspaceHausdorff() {
    assert(
      ∀A ⊂ S: CompactSubspace(A,T) ∧ Hausdorff(T) ⇒ Closed(A,T)
    )
  } →
  
  lemma ClosedSubspaceCompact() {
    assert(
      ∀B ⊂ S: Closed(B,T) ∧ Compact(T) ⇒ CompactSubspace(B,T)
    )
  } →
  
  lemma DisjointCompactSeparated() {
    assert(
      ∀F,G ⊂ S: CompactSubspace(F,T) ∧ CompactSubspace(G,T) ∧ F ∩ G = ∅ 
      ⇒ ∃U,V ∈ τ: (F ⊂ U ∧ G ⊂ V ∧ U ∩ V = ∅)
    )
  } →
  
  assert(
    ∀F,G ⊂ S: (Closed(F,T) ∧ Closed(G,T) ∧ F ∩ G = ∅) →
    apply(ClosedSubspaceCompact()) →
    CompactSubspace(F,T) ∧ CompactSubspace(G,T) →
    apply(DisjointCompactSeparated()) →
    ∃U,V ∈ τ: (F ⊂ U ∧ G ⊂ V ∧ U ∩ V = ∅)
  ) →
  
  conclude(T4_Space(T))
}