theorem Commutativity_Hadamard_Product() {
  assert(
    ∀S[AlgebraicStructure(S, ·)] ∧
    ∀M[MatrixSpace(M_S(m,n))] ∧
    ∀A,B ∈ M_S(m,n) ∧
    let(A∘B := HadamardProduct(A,B)) ⇒
    (Commutative(∘, M_S(m,n)) ↔ Commutative(·, S))
  )
}

proof Commutativity_Hadamard_Product() {
  // Necessary Condition
  block NecessaryCondition() {
    assume(Commutative(·, S)) →
    setVar(A := [a_ij], B := [b_ij] ∈ M_S(m,n)) →
    assert(
      A∘B = 
      [a_ij]∘[b_ij] →           // By definition of A,B
      [a_ij·b_ij] →             // By Hadamard product definition
      [b_ij·a_ij] →             // By commutativity of ·
      [b_ij]∘[a_ij] →           // By Hadamard product definition
      B∘A                        // By definition of A,B
    ) →
    conclude(Commutative(∘, M_S(m,n)))
  }

  // Sufficient Condition
  block SufficientCondition() {
    assume(¬Commutative(·, S)) →
    assert(∃a,b ∈ S: a·b ≠ b·a) →
    construct(
      A,B ∈ M_S(m,n) where
      ∀i,j: a_ij = a ∧ b_ij = b
    ) →
    assert(
      a_ij·b_ij ≠ b_ij·a_ij →    // By choice of a,b
      A∘B ≠ B∘A                   // By Hadamard product definition
    ) →
    conclude(¬Commutative(∘, M_S(m,n)))
  }

  combine(NecessaryCondition(), SufficientCondition()) →
  conclude(Commutative(∘, M_S(m,n)) ↔ Commutative(·, S))
}