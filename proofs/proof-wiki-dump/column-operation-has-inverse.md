theorem Column_Operation_Inverse() {
  let(K: Field, M[m,n]: MetricSpace(K)) →
  let(A: Matrix ∈ M[m,n]) →
  let(B: Matrix ∈ M[m,n]) →
  let(Γ: ColumnOperation) →
  assert(
    Γ(A) = B ⇒ ∃Γ'[ColumnOperation](Γ'(B) = A)
  )
}

proof Column_Operation_Inverse() {
  let({e_i}[i∈1..k]: Sequence[ElementaryColumnOp]) →
  let({E_i}[i∈1..k]: Sequence[ElementaryColumnMatrix]) →
  
  lemma Matrix_Product() {
    assert(∃K[Matrix](
      K = ∏[i=1..k](E_i) ∧
      A·K = B
    ))
  } →

  lemma Nonsingular_Elements() {
    assert(∀i∈[1..k](
      isNonsingular(E_i)
    ))
  } →

  lemma Nonsingular_Product() {
    apply(Nonsingular_Elements()) →
    assert(isNonsingular(K))
  } →

  let(K⁻¹: Matrix = inverse(K)) →
  
  assert(
    A·K = B →
    A·K·K⁻¹ = B·K⁻¹ →
    A = B·K⁻¹
  ) →

  assert(
    K⁻¹ = (E₁·E₂·...·Eₖ)⁻¹ =
    Eₖ⁻¹·Eₖ₋₁⁻¹·...·E₂⁻¹·E₁⁻¹
  ) →

  let({e'_i}[i∈1..k]: Sequence[ElementaryColumnOp]) →
  assert(∀i∈[1..k](
    e'_i = inverse(e_i)
  )) →

  let(Γ': ColumnOperation = compose({e'_k,...,e'_1})) →
  
  assert(Γ'(B) = A)
}