theorem Column_Operation_Matrix_Multiplication() {
  let(K: Field, M[m,n]: MetricSpace(K)) →
  setVar(A, B ∈ M[m,n]) →
  setVar(Γ: ColumnOperation) →
  assert(
    Γ(A) = B ⇒ ∃!K ∈ M[n,n] [
      (A·K = B) ∧ 
      isNonsingular(K) ∧
      isProductOfElementaryColumnMatrices(K)
    ]
  )
}

proof Column_Operation_Matrix_Multiplication() {
  lemma Induction_Statement(k: ℤ₊) {
    assert(
      ∀Γₖ [
        Γₖ = (e₁,...,eₖ) ⇒ 
        ∃!Kₖ ∈ M[n,n] [
          (A·Kₖ = Bₖ) ∧
          Kₖ = E₁·E₂·...·Eₖ ∧
          isNonsingular(Kₖ)
        ]
      ]
    )
  }

  // Base case
  proof Base_Case() {
    setVar(e₁: ElementaryColumnOperation) →
    setVar(E₁: ElementaryColumnMatrix) →
    assert(e₁(I[n]) = E₁) →
    assert(A·E₁ = B₁) →
    apply(ElementaryColumnMatrix_isNonsingular()) →
    conclude(Induction_Statement(1))
  }

  // Inductive step
  proof Inductive_Step(k: ℤ₊) {
    assume(Induction_Statement(k)) →
    setVar(eₖ₊₁: ElementaryColumnOperation) →
    setVar(Eₖ₊₁: ElementaryColumnMatrix) →
    assert(Bₖ₊₁ = Bₖ·Eₖ₊₁) →
    assert(Bₖ₊₁ = (A·Kₖ)·Eₖ₊₁) →
    apply(Matrix_Multiplication_Associative()) →
    assert(Bₖ₊₁ = A·(Kₖ·Eₖ₊₁)) →
    apply(Product_Nonsingular_iff_Factors_Nonsingular()) →
    conclude(Induction_Statement(k+1))
  }

  apply(Mathematical_Induction(Induction_Statement)) →
  conclude(∃!K[A·K = B ∧ isNonsingular(K) ∧ isProductOfElementaryColumnMatrices(K)])
}