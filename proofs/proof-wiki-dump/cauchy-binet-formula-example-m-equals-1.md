theorem CauchyBinet_RowColumn() {
  assert(
    ∀A,B: Matrix ∧ 
    A = [a_{1n}] ∧ isRowMatrix(A) ∧
    B = [b_{n1}] ∧ isColumnMatrix(B) →
    det(A⋅B) = ∑_{j=1}^n a_j b_j
  )
  where(
    a_j := a_{1j},
    b_j := b_{j1}
  )
} ↔

proof CauchyBinet_RowColumn() {
  apply(CauchyBinetFormula()) →
  assert(
    det(A⋅B) = ∑_{1≤j_1<j_2<...<j_m≤n} det(A_{j_1...j_m})⋅det(B_{j_1...j_m})
  ) →
  
  lemma SimplifyForM1() {
    assert(m = 1) →
    assert(1 ≤ j_1 < j_2 < ... < j_m ≤ n ↔ 1 ≤ j ≤ n)
  } →
  
  lemma Order1Determinant() {
    assert(
      ∀x: Scalar →
      det([x]) = x
    )
  } →
  
  apply(SimplifyForM1()) →
  apply(Order1Determinant()) →
  assert(
    det(A_{j}) = a_j ∧
    det(B_{j}) = b_j
  ) →
  
  conclude(
    det(A⋅B) = ∑_{j=1}^n a_j b_j
  )
}