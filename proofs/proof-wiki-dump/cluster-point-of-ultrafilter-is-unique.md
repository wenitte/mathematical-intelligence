theorem Cluster_Point_Ultrafilter_Unique() {
  assert(
    ∀S: Set ∧ ∀F: Ultrafilter(S) ∧ ∀x ∈ S: ClusterPoint(F,x) ⇒
    ¬∃y ∈ S: (y ≠ x ∧ ClusterPoint(F,y))
  )
} ↔

proof Cluster_Point_Ultrafilter_Unique() {
  setVar(S: Set) →
  setVar(F: Ultrafilter(S)) →
  setVar(x: ClusterPoint(F,S)) →
  
  lemma Contradiction() {
    assume(∃y ∈ S: y ≠ x ∧ ClusterPoint(F,y)) →
    assert(∀U ∈ F: {x,y} ⊆ U) →
    setVar(F_new: F ∪ {{x}}) →
    assert(Filter(F_new) ∧ F_new ⊃ F) →
    assert(¬Ultrafilter(F)) →
    contradiction()
  } →
  
  apply(Contradiction()) →
  assert(¬∃y ∈ S: (y ≠ x ∧ ClusterPoint(F,y)))
}