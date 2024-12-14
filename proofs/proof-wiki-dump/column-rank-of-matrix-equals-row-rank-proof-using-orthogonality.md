theorem MatrixRankEquality() {
  assert(
    ∀A ∈ ℳ(m,n) ⇒ col_rank(A) = row_rank(A)
  )
} ↔

proof MatrixRankEquality() {
  setVar(A: ℳ(m,n)) →
  setVar(r: ℕ = row_rank(A)) →
  let(B = {x₁,...,xᵣ}: basis(row_space(A))) →

  lemma VectorsIndependent() {
    assert(
      ∀c₁,...,cᵣ ∈ ℝ: [
        c₁(Ax₁) + ... + cᵣ(Axᵣ) = 0 ⇒
        let(v = c₁x₁ + ... + cᵣxᵣ) →
        (v ∈ row_space(A)) ∧
        (∀w ∈ row_space(A): v⊥w) →
        v⊥v ⇒ v = 0 →
        c₁x₁ + ... + cᵣxᵣ = 0 →
        c₁ = ... = cᵣ = 0
      ]
    )
  } →

  apply(VectorsIndependent()) →
  assert(dim(span{Ax₁,...,Axᵣ}) = r) →
  assert(col_rank(A) ≥ row_rank(A)) →

  lemma TransposeInequality() {
    assert(row_rank(Aᵀ) ≤ col_rank(Aᵀ)) →
    assert(col_rank(A) = row_rank(Aᵀ)) ∧
    assert(col_rank(Aᵀ) = row_rank(A))
  } →

  apply(TransposeInequality()) →
  assert(
    row_rank(A) ≤ col_rank(A) = row_rank(Aᵀ) ≤ col_rank(Aᵀ) = row_rank(A)
  ) →
  assert(col_rank(A) = row_rank(A))
}