theorem AdjugateMatrix() {
  let A = Matrix(4,4) = [
    [1, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 1, 1],
    [0, 0, 0, 1]
  ]
  assert(
    adj(A) = [
      [1, -1,  1, -1],
      [0,  1, -1,  1],
      [0,  0,  1, -1],
      [0,  0,  0,  1]
    ]
  )
} ↔

proof AdjugateMatrix() {
  lemma CofactorDefinition() {
    assert(
      ∀i,j ∈ {1,2,3,4} →
      Aij = (-1)^(i+j) * det(minorMatrix(A,i,j))
    )
  } →
  
  lemma UpperTriangularDet() {
    assert(
      det(upperTriangularMatrix) = product(diagonalElements)
    )
  } →
  
  forall(i,j in {1,2,3,4}) {
    calculateCofactor(i,j) →
    applyUpperTriangularDet()
  } →
  
  assert(adj(A) = [
    [1, -1,  1, -1],
    [0,  1, -1,  1],
    [0,  0,  1, -1],
    [0,  0,  0,  1]
  ]) →
  
  verifyResult() {
    assert(det(A) = 1) ∧
    assert(adj(A) * A = det(A) * I4) 
  }
}