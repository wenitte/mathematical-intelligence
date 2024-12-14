theorem Change_Of_Basis_Matrix_Nonsingular() {
  given(
    R: Ring,
    R.hasUnity(),
    M: FreeModule(R),
    n: ℕ,
    n > 0,
    dim(M) = n,
    A: OrderedBasis(M),
    B: OrderedBasis(M),
    P: Matrix = ChangeOfBasisMatrix(A, B)
  ) ⇒
  assert(
    isNonsingular(P) ∧
    P⁻¹ = ChangeOfBasisMatrix(B, A)
  )
} ↔

proof Change_Of_Basis_Matrix_Nonsingular() {
  lemma ProductOfChangeOfBasisMatrices() {
    assert(
      ChangeOfBasisMatrix(A, B) × ChangeOfBasisMatrix(B, A) =
      ChangeOfBasisMatrix(A, A) = I_n
    ) ∧
    assert(
      ChangeOfBasisMatrix(B, A) × ChangeOfBasisMatrix(A, B) =
      ChangeOfBasisMatrix(B, B) = I_n
    )
  } →
  
  apply(ProductOfChangeOfBasisMatrices()) →
  
  assert(
    P × ChangeOfBasisMatrix(B, A) = I_n ∧
    ChangeOfBasisMatrix(B, A) × P = I_n
  ) →
  
  conclude(
    isNonsingular(P) ∧
    P⁻¹ = ChangeOfBasisMatrix(B, A)
  )
}