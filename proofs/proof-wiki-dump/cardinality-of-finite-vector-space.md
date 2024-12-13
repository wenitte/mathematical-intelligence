theorem Cardinality_Finite_Vector_Space() {
  assume(
    K: GaloisField,
    V: VectorSpace(K),
    dim(V): Finite
  ) →
  assert(
    |V| = |K|^dim(V)
  )
} ↔

proof Cardinality_Finite_Vector_Space() {
  lemma Vector_Space_Isomorphism() {
    assert(
      V ≅ K^dim(V)
    )
  } →
  apply(Vector_Space_Isomorphism()) →
  assert(|V| = |K^dim(V)|) →
  
  lemma Finite_Cartesian_Space() {
    assert(
      |K^dim(V)| = |K|^dim(V)
    )
  } →
  apply(Finite_Cartesian_Space()) →
  
  assert(|V| = |K|^dim(V)) →
  QED()
}