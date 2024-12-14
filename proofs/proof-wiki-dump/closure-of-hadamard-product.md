theorem Hadamard_Product_Closure() {
  assert(
    let S be algebraic_structure ∧
    let MM_S(m,n) be matrix_space_over(S) ∧
    ∀A,B ∈ MM_S(m,n): A∘B := Hadamard_Product(A,B) →
    (closed(∘, MM_S(m,n)) ↔ closed(·, S))
  )
}

proof Hadamard_Product_Closure() {
  // Necessary Condition
  lemma Necessary_Direction() {
    assume(closed(·, S)) →
    setVar(A[a_ij], B[b_ij] ∈ MM_S(m,n)) →
    define(C[c_ij] := A[a_ij]·B[b_ij]) →
    assert(
      ∀i∈[1,m], ∀j∈[1,n]: c_ij = a_ij·b_ij
    ) →
    assert(closed(·, S) ↔ c_ij ∈ S) →
    assert(dim(C) = dim(A) = dim(B)) →
    conclude(C ∈ MM_S(m,n)) →
    conclude(closed(∘, MM_S(m,n)))
  }

  // Sufficient Condition
  lemma Sufficient_Direction() {
    assume(¬closed(·, S)) →
    assert(∃a,b ∈ S: a·b ∉ S) →
    construct(
      A,B ∈ MM_S(m,n):
      ∀i,j: a_ij = a ∧ b_ij = b
    ) →
    assert(∀i,j: a_ij·b_ij ∉ S) →
    conclude(A∘B ∉ MM_S(m,n)) →
    conclude(¬closed(∘, MM_S(m,n)))
  }

  apply(Necessary_Direction()) →
  apply(Sufficient_Direction()) →
  conclude(closed(∘, MM_S(m,n)) ↔ closed(·, S))
}