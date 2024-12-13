theorem Linearly_Independent_Set_Cardinality() {
  assert(
    ∀E: VectorSpace ∧ ∀H: Set ∧ ∀n: ℕ ⇒
    (dim(E) = n ∧ H ⊆ E ∧ isLinearlyIndependent(H)) →
    |H| ≤ n
  )
} ↔

proof Linearly_Independent_Set_Cardinality() {
  setVar(E: VectorSpace) →
  setVar(H: Set) →
  setVar(n: ℕ) →
  
  assume(dim(E) = n) →
  assume(H ⊆ E) →
  assume(isLinearlyIndependent(H)) →
  
  lemma Dimension_Basis_Existence() {
    assert(dim(E) = n → ∃B: Set | (|B| = n ∧ isBasis(B, E)))
  } →
  
  lemma Basis_Is_Generator() {
    assert(isBasis(B, E) → isGenerator(B, E))
  } →
  
  lemma Linearly_Independent_Size_Bound() {
    assert(
      (isLinearlyIndependent(H) ∧ isGenerator(B, E) ∧ |B| = n) →
      |H| ≤ |B|
    )
  } →
  
  apply(Dimension_Basis_Existence()) →
  let(B: Set | |B| = n ∧ isBasis(B, E)) →
  apply(Basis_Is_Generator()) →
  apply(Linearly_Independent_Size_Bound()) →
  
  conclude(|H| ≤ n)
}