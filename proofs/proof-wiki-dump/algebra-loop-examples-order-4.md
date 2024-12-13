theorem AlgebraLoop_Order4() {
  assert(
    ∃S = {e,a,b,c} ∧
    ∃(∘: S × S → S) ∧
    (S,∘) is_algebra_loop ∧
    e is_identity
  )
} ↔

proof AlgebraLoop_Order4() {
  setVar(CayleyTable: matrix[4,4]) →
  
  lemma InitialTable() {
    assert(
      CayleyTable[1,*] = [e,a,b,c] ∧
      CayleyTable[*,1] = [e,a,b,c]
    )
  } →

  lemma Case1_aa_e() {
    assert(a ∘ a ≠ a) →
    setVar(a ∘ a = e) →
    assert(
      forces(a ∘ b = c) ∧
      forces(a ∘ c = b)
    ) →
    branch(
      case1: {
        assert(b ∘ b = e) →
        result(Klein4Group)
      },
      case2: {
        assert(b ∘ b = a) →
        result(CyclicGroup4)
      }
    )
  } →

  lemma Case2_aa_b() {
    setVar(a ∘ a = b) →
    assert(
      a ∘ b ≠ e ∧
      forces(a ∘ b = c) ∧
      forces(CyclicGroup4)
    )
  } →

  lemma Case3_aa_c() {
    setVar(a ∘ a = c) →
    assert(
      forces(unique_completion) ∧
      isomorphic_to(CyclicGroup4)
    )
  } →

  lemma IsomorphismProof() {
    assert(
      ∀table3,table4 ∈ results →
      ∃permutation(rows,columns) →
      permuted_table ≅ CyclicGroup4
    )
  } →

  conclude(
    possible_tables = {
      CyclicGroup4,
      Klein4Group,
      IsomorphicToCyclic4_1,
      IsomorphicToCyclic4_2
    }
  )
}