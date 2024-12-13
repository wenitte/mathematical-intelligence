theorem Abs_Conv_Gen_Sum_Union() {
  assert(
    let V: BanachSpace ∧
    let I,J: IndexSet ∧
    I ∩ J = ∅ ∧
    let K = I ∪ J ∧
    let {v_k}_{k∈K}: Family(V) →
    (∑_{k∈K} v_k) converges_absolutely ↔
    ((∑_{i∈I} v_i) converges_absolutely ∧ 
     (∑_{j∈J} v_j) converges_absolutely) ∧
    ∑_{k∈K} ||v_k|| = (∑_{i∈I} ||v_i||) + (∑_{j∈J} ||v_j||)
  )
}

proof Abs_Conv_Gen_Sum_Union() {
  # Necessary Condition
  lemma Forward() {
    assume(∑_{k∈K} v_k converges_absolutely) →
    assert(∑_{k∈K} ||v_k|| converges) by def_absolute_convergence →
    apply(Gen_Sum_Subset_Abs_Conv) →
    assert((∑_{i∈I} ||v_i||) converges ∧ 
           (∑_{j∈J} ||v_j||) converges) →
    assert((∑_{i∈I} v_i) converges_absolutely ∧ 
           (∑_{j∈J} v_j) converges_absolutely) by def_absolute_convergence →
    apply(Gen_Sum_Union_Disjoint) →
    assert(∑_{k∈K} ||v_k|| = (∑_{i∈I} ||v_i||) + (∑_{j∈J} ||v_j||))
  }

  # Sufficient Condition
  lemma Backward() {
    assume((∑_{i∈I} v_i) converges_absolutely ∧ 
           (∑_{j∈J} v_j) converges_absolutely) →
    assert((∑_{i∈I} ||v_i||) converges ∧ 
           (∑_{j∈J} ||v_j||) converges) by def_absolute_convergence →
    apply(Gen_Sum_Union_Disjoint) →
    assert(∑_{k∈K} ||v_k|| = (∑_{i∈I} ||v_i||) + (∑_{j∈J} ||v_j||)) →
    assert(∑_{k∈K} v_k converges_absolutely) by def_absolute_convergence
  }

  apply(Forward()) ∧ apply(Backward())
}