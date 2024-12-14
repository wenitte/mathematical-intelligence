theorem ChangeOfBasisMatrixCorollary() {
  require(
    R: CommutativeRing ∧ hasUnity(R) ∧
    G: FreeUnitaryModule(R) ∧ dim(G) = n ∧
    {a_i}: OrderedBasis(G) ∧
    A,B: Matrix(R,n,n) ∧
    ∃P: Matrix(R,n,n) ∧ isNonsingular(P) ∧
    B = P^(-1)AP
  )
  assert(
    ∃u: LinearOperator(G) ∧
    ∃{a_i'}: OrderedBasis(G) →
    ([u;{a_i}] = A ∧ [u;{a_i'}] = B)
  )
}

proof ChangeOfBasisMatrixCorollary() {
  reference(
    theorem: ChangeOfBasisMatrixConverse()
  ) →
  apply(
    ChangeOfBasisMatrixConverse(),
    {
      R: R,
      G: G,
      A: A,
      B: B,
      P: P
    }
  ) →
  assert(
    ∃u: LinearOperator(G) ∧
    ∃{a_i'}: OrderedBasis(G) →
    [u;{a_i}] = A ∧ [u;{a_i'}] = B
  )
}