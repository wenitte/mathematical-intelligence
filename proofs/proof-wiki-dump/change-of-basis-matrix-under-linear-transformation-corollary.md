theorem Change_Of_Basis_Matrix_Corollary() {
  letVar(R: CommutativeRingWithUnity) ∧
  letVar(G: FreeUnitaryRModule) ∧
  letVar(n: ℕ) ∧
  letVar(a_n: OrderedBasis(G)) ∧
  letVar(a_n': OrderedBasis(G)) ∧
  letVar(u: LinearOperator(G → G)) ∧
  letVar(A: Matrix) ∧
  letVar(B: Matrix) ∧
  letVar(P: ChangeOfBasisMatrix(a_n → a_n')) →
  
  assert(
    dim(G) = n ∧
    A = [u; a_n] ∧
    B = [u; a_n'] ∧
    P = getChangeOfBasisMatrix(a_n, a_n')
  ) →
  
  assert(
    B = P⁻¹AP
  )
} ↔

proof Change_Of_Basis_Matrix_Corollary() {
  reference(
    theorem: Change_Of_Basis_Matrix_Under_Linear_Transformation,
    specialCase: {
      source: G,
      target: G,
      operator: u,
      basis1: a_n,
      basis2: a_n'
    }
  ) →
  
  assert(B = P⁻¹AP)
}