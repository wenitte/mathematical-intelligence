theorem AdjugateMatrix3x3() {
  assert(
    ∃A ∈ ℳ(3,3) [
      A = [
        [1, 2, 0],
        [0, -1, 2],
        [-1, 2, 0]
      ] →
      adj(A) = [
        [-4, 0, 4],
        [-2, 0, -2],
        [-1, -4, -1]
      ]
    ]
  )
} ↔

proof AdjugateMatrix3x3() {
  setVar(A: ℳ(3,3)) →
  
  function calcCofactor(i: ℕ, j: ℕ) {
    return((-1)^(i+j) * det(minorMatrix(A, i, j)))
  } →

  lemma Cofactors() {
    assert(
      A₁₁ = calcCofactor(1,1) = 1 * det([[-1,2],[2,0]]) = -4 ∧
      A₁₂ = calcCofactor(1,2) = -1 * det([[0,2],[-1,0]]) = -2 ∧
      A₁₃ = calcCofactor(1,3) = 1 * det([[0,-1],[-1,2]]) = -1 ∧
      A₂₁ = calcCofactor(2,1) = -1 * det([[2,0],[2,0]]) = 0 ∧
      A₂₂ = calcCofactor(2,2) = 1 * det([[1,0],[-1,0]]) = 0 ∧
      A₂₃ = calcCofactor(2,3) = -1 * det([[1,2],[-1,2]]) = -4 ∧
      A₃₁ = calcCofactor(3,1) = 1 * det([[2,0],[-1,2]]) = 4 ∧
      A₃₂ = calcCofactor(3,2) = -1 * det([[1,0],[0,2]]) = -2 ∧
      A₃₃ = calcCofactor(3,3) = 1 * det([[1,2],[0,-1]]) = -1
    )
  } →

  lemma Verification() {
    assert(
      det(A) = -8 ∧
      adj(A) * A = det(A) * I₃
    )
  } →

  apply(Cofactors()) →
  apply(Verification()) →
  assert(
    adj(A) = [
      [-4, 0, 4],
      [-2, 0, -2],
      [-1, -4, -1]
    ]
  )
}