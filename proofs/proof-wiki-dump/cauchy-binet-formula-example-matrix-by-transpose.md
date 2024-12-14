theorem CauchyBinetExample() {
  assert(
    ∀A ∈ ℳ_{m×n}(ℝ) ∧
    let A^T = transpose(A) ∧
    ∀j₁,j₂,...,j_m ∈ {1,...,n} ∧
    let A_{j₁j₂...j_m} = selectColumns(A, [j₁,j₂,...,j_m]) ∧
    let A^T_{j₁j₂...j_m} = selectRows(A^T, [j₁,j₂,...,j_m]) 
    ⇒
    det(A·A^T) = ∑_{1≤j₁<j₂<...<j_m≤n} (det(A_{j₁j₂...j_m}))²
  )
} ↔

proof CauchyBinetExample() {
  lemma CauchyBinet() {
    assert(
      ∀A ∈ ℳ_{m×n}(ℝ) ∧ ∀B ∈ ℳ_{n×m}(ℝ) ⇒
      det(A·B) = ∑_{1≤j₁<j₂<...<j_m≤n} det(A_{j₁j₂...j_m})·det(B_{j₁j₂...j_m})
    )
  } →

  setVar(A: ℳ_{m×n}(ℝ)) →
  assert(A^T ∈ ℳ_{n×m}(ℝ)) →
  
  apply(CauchyBinet(), [A, A^T]) →
  assert(
    det(A·A^T) = ∑_{1≤j₁<j₂<...<j_m≤n} det(A_{j₁j₂...j_m})·det(A^T_{j₁j₂...j_m})
  ) →
  
  lemma TransposeProperty() {
    assert(
      ∀M ∈ ℳ_{m×m}(ℝ) ⇒ 
      A^T_{j₁j₂...j_m} = (A_{j₁j₂...j_m})^T
    )
  } →
  
  lemma DetTranspose() {
    assert(
      ∀M ∈ ℳ_{m×m}(ℝ) ⇒
      det(M) = det(M^T)
    )
  } →
  
  apply(TransposeProperty()) →
  apply(DetTranspose()) →
  assert(
    det(A·A^T) = ∑_{1≤j₁<j₂<...<j_m≤n} det(A_{j₁j₂...j_m})·det(A_{j₁j₂...j_m})
  ) →
  
  assert(
    det(A·A^T) = ∑_{1≤j₁<j₂<...<j_m≤n} (det(A_{j₁j₂...j_m}))²
  )
}