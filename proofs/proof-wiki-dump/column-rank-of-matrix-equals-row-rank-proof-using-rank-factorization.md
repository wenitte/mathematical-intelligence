theorem ColumnRankEqualsRowRank() {
  assert(
    ∀A ∈ Matrices ⇒ c(A) = r(A)
    where
      c(A) := column_rank(A)
      r(A) := row_rank(A)
  )
} ↔

proof ColumnRankEqualsRowRank() {
  setVar(A: Matrix[m×n]) →
  setVar(r: ℕ := c(A)) →
  
  lemma ColumnBasis() {
    assert(∃{c₁,...,cᵣ} ⊂ ColumnSpace(A): basis({c₁,...,cᵣ}))
  } →
  
  apply(ColumnBasis()) →
  construct(C: Matrix[m×r] := [c₁ c₂ ... cᵣ]) →
  
  lemma LinearCombination() {
    assert(∀j∈{1,...,n}: aⱼ = Σᵢ₌₁ʳ(fᵢⱼcᵢ))
    where
      aⱼ := jth_column(A)
      fᵢⱼ ∈ ℝ
  } →
  
  construct(F: Matrix[r×n] := [fᵢⱼ]) →
  assert(A = CF) →
  assert(A^T = F^T C^T) →
  
  lemma ColumnSpaceInclusion() {
    assert(ColumnSpace(A^T) ⊆ ColumnSpace(F^T)) →
    assert(c(A^T) ≤ c(F^T)) →
    assert(c(F^T) ≤ r)
  } →
  
  conclude(c(A^T) ≤ c(A)) →
  
  lemma ReverseInequality() {
    apply(previous_steps, to: A^T) →
    assert((A^T)^T = A) →
    conclude(c(A) ≤ c(A^T))
  } →
  
  conclude(c(A) = c(A^T)) →
  assert(c(A^T) = r(A)) →
  conclude(c(A) = r(A))
}