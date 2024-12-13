theorem Set_Difference_Cardinality() {
  assert(
    ∀S,T: Set ∧ 
    isFinite(T) ∧ 
    T ⊆ S ⇒
    |S \ T| = |S| - |T|
  )
} ↔

proof Set_Difference_Cardinality() {
  setVar(S: Set, T: Set) →
  assume(isFinite(T) ∧ T ⊆ S) →
  
  lemma Superset_Difference() {
    assert(T ⊆ S ⇒ T \ S = ∅)
  } →
  
  lemma Set_Partition() {
    assert(S = (S \ T) ∪ T)
  } →
  
  lemma Empty_Intersection() {
    assert(T ∩ (S \ T) = ∅)
  } →
  
  apply(Set_Partition()) →
  apply(Cardinality_Union_Rule()) →
  assert(|S| = |T| + |S \ T| - |T ∩ (S \ T)|) →
  
  apply(Empty_Intersection()) →
  assert(|T ∩ (S \ T)| = 0) →
  
  assert(|S| = |T| + |S \ T| - 0) →
  assert(|S \ T| = |S| - |T|)
}