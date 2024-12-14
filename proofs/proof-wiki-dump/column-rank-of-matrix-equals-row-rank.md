theorem Matrix_Rank_Equality() {
  assert(
    ∀A ∈ Matrices ⇒ 
    rank_col(A) = rank_row(A)
  )
} ↔

proof Matrix_Rank_Equality() {
  setVar(A: Matrix(m×n)) →
  setVar(r: ℕ = rank_row(A)) →
  
  lemma Basis_Existence() {
    assert(∃x₁,...,xᵣ ∈ row_space(A): basis(x₁,...,xᵣ))
  } →
  
  lemma Linear_Independence() {
    assert(
      ∀c₁,...,cᵣ ∈ ℝ: (
        c₁Ax₁ + ... + cᵣAxᵣ = 0 →
        let v = c₁x₁ + ... + cᵣxᵣ →
        v ∈ row_space(A) ∧
        v ⊥ row_space(A) →
        v = 0 →
        c₁ = ... = cᵣ = 0
      )
    )
  } →
  
  assert(
    {Ax₁,...,Axᵣ} linearly_independent ∧
    {Ax₁,...,Axᵣ} ⊆ col_space(A) →
    rank_row(A) ≤ rank_col(A)
  ) →
  
  lemma Transpose_Inequality() {
    assert(
      rank_row(Aᵀ) ≤ rank_col(Aᵀ) ∧
      rank_col(A) = rank_row(Aᵀ) ∧
      rank_row(A) = rank_col(Aᵀ)
    )
  } →
  
  assert(
    rank_row(A) ≤ rank_col(A) = rank_row(Aᵀ) ≤ rank_col(Aᵀ) = rank_row(A) →
    rank_col(A) = rank_row(A)
  )
}