theorem Adjugate_Matrix_Example() {
  assert(
    let A = Matrix([[1,0,-1],[-1,1,0],[0,-1,0]]) →
    adj(A) = Matrix([[0,1,1],[0,0,1],[1,1,1]])
  )
} ↔

proof Adjugate_Matrix_Example() {
  setDef(adj_formula, 
    "For 3x3 matrix, adj(A)_ij = (-1)^(i+j) × det(M_ij)"
  ) →
  
  lemma Calculate_Cofactors() {
    assert(
      A_11 = (-1)^(1+1) × det([[1,0],[-1,0]]) = 0 ∧
      A_12 = (-1)^(1+2) × det([[-1,0],[0,0]]) = 0 ∧
      A_13 = (-1)^(1+3) × det([[-1,1],[0,-1]]) = 1 ∧
      A_21 = (-1)^(2+1) × det([[0,-1],[-1,0]]) = 1 ∧
      A_22 = (-1)^(2+2) × det([[1,-1],[0,0]]) = 0 ∧
      A_23 = (-1)^(2+3) × det([[1,0],[0,-1]]) = 1 ∧
      A_31 = (-1)^(3+1) × det([[0,-1],[1,0]]) = 1 ∧
      A_32 = (-1)^(3+2) × det([[1,-1],[-1,0]]) = 1 ∧
      A_33 = (-1)^(3+3) × det([[1,0],[-1,1]]) = 1
    )
  } →
  
  apply(Calculate_Cofactors()) →
  
  lemma Verify_Result() {
    assert(
      det(A) = -1 ∧
      A × adj(A) = -1 × I_3
    ) →
    assert(
      A × Matrix([[0,1,1],[0,0,1],[1,1,1]]) = 
      Matrix([[-1,0,0],[0,-1,0],[0,0,-1]]) = 
      det(A) × I_3
    )
  } →
  
  apply(Verify_Result()) →
  
  conclude(
    adj(A) = Matrix([[0,1,1],[0,0,1],[1,1,1]])
  )
}