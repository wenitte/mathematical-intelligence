theorem Matrix_Positive_Definite() {
  assert(
    ∀A ∈ ℝ^{n×n}, ∀C ∈ ℝ^{n×n} ⇒
    (A = A^T ∧ ∃C[nonsingular(C) ∧ A = C^T C]) →
    positive_definite(A)
  )
}

proof Matrix_Positive_Definite() {
  setVar(A: ℝ^{n×n}, C: ℝ^{n×n}) →
  assume(A = A^T ∧ nonsingular(C) ∧ A = C^T C) →
  setVar(v: ℝ^n, v ≠ 0) →
  
  assert(v^T A v = v^T C^T C v) {
    substitute(A = C^T C)
  } →
  
  assert(v^T C^T C v = (Cv)^T Cv) {
    apply(Matrix_Transpose_Product)
  } →
  
  assert((Cv)^T Cv = (Cv)·(Cv)) {
    apply(Dot_Product_Definition)
  } →
  
  assert((Cv)·(Cv) = ||Cv||^2) {
    apply(Vector_Self_Dot_Product)
  } →
  
  assert(||Cv||^2 > 0) {
    apply(Nonsingular_Matrix_Vector_Product) ∧
    apply(Euclidean_Norm_Positive)
  } →
  
  conclude(positive_definite(A))
}