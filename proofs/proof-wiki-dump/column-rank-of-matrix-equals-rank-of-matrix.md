theorem Column_Rank_Equals_Matrix_Rank() {
  assert(
    ∀A ∈ Matrices ⇒ 
    col_rank(A) = rank(A)
  )
} ↔

proof Column_Rank_Equals_Matrix_Rank() {
  setVar(A: Matrix) →
  assert(rank(A) ≝ dim(col_space(A))) →
  assert(col_rank(A) ≝ dim(col_space(A))) →
  apply(transitivity) →
  assert(col_rank(A) = rank(A))
}