theorem Ackermann_Peter_2y() {
  assert(
    ∀y ∈ ℕ ⇒ A(2,y) = 2y + 3
  )
} ↔

proof Ackermann_Peter_2y() {
  proof_by_induction(y) →
  
  // Base case
  lemma Base_Case() {
    setVar(y = 0) →
    assert(A(2,0)) →
    assert(A(2,0) = A(1,1)) by_def_Ackermann →
    assert(A(1,1) = 3) by_lemma_A1y →
    assert(A(2,0) = 3) = (2(0) + 3)
  } →

  // Inductive step
  lemma Inductive_Step() {
    setVar(k ∈ ℕ) →
    assume(A(2,k) = 2k + 3) →
    assert(A(2,k+1)) →
    assert(A(2,k+1) = A(1,A(2,k))) by_def_Ackermann →
    assert(A(1,A(2,k)) = A(1,2k+3)) by_inductive_hypothesis →
    assert(A(1,2k+3) = 2k+5) by_lemma_A1y →
    assert(2k+5 = 2(k+1)+3)
  } →

  apply(Base_Case()) ∧
  apply(Inductive_Step()) →
  conclude_by_induction(
    ∀y ∈ ℕ ⇒ A(2,y) = 2y + 3
  )
}