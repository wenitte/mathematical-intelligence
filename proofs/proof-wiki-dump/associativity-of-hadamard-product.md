theorem Hadamard_Product_Associativity() {
  assert(
    let S be algebraic_structure ∧
    let MM_S(m,n) be matrix_space_over(S) ∧
    ∀A,B ∈ MM_S(m,n) → 
    (A ∘ B defined_as Hadamard_product(A,B)) →
    (∘ is_associative_on MM_S(m,n) ↔ · is_associative_on S)
  )
}

proof Hadamard_Product_Associativity() {
  // Necessary Condition
  lemma Forward_Direction() {
    assume(· is_associative_on S) →
    setVar(A[m,n], B[m,n], C[m,n] ∈ MM_S(m,n)) →
    assert((A ∘ B) ∘ C
      = ([a_{m,n}] ∘ [b_{m,n}]) ∘ [c_{m,n}]    // Definition of matrices
      = [a·b]_{m,n} ∘ [c_{m,n}]                // Definition of ∘
      = [(a·b)·c]_{m,n}                        // Definition of ∘
      = [a·(b·c)]_{m,n}                        // · is associative
      = [a_{m,n}] ∘ [b·c]_{m,n}                // Definition of ∘
      = [a_{m,n}] ∘ ([b_{m,n}] ∘ [c_{m,n}])    // Definition of ∘
      = A ∘ (B ∘ C)                            // Definition of matrices
    )
  }

  // Sufficient Condition
  lemma Reverse_Direction() {
    assume(¬(· is_associative_on S)) →
    assert(∃a,b,c ∈ S → a·(b·c) ≠ (a·b)·c) →
    construct(
      A[m,n] with a_{i,j} = a,
      B[m,n] with b_{i,j} = b,
      C[m,n] with c_{i,j} = c
    ) →
    assert(
      a_{i,j}·(b_{i,j}·c_{i,j}) ≠ (a_{i,j}·b_{i,j})·c_{i,j} →
      (A ∘ B) ∘ C ≠ A ∘ (B ∘ C)
    )
  }

  apply(Forward_Direction()) ∧
  apply(Reverse_Direction()) →
  assert(∘ is_associative_on MM_S(m,n) ↔ · is_associative_on S)
}