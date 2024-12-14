theorem Closable_Densely_Defined_Operator_Closed_iff_Equal_Closure() {
  let(H: HilbertSpace(ℂ)) →
  let((D_T, T): ClosableDenselyDefinedOperator(H)) →
  let((D_T̄, T̄): Closure(D_T, T)) →
  assert(
    IsClosed(T) ↔ (T = T̄)
  )
} ↔

proof Closable_Densely_Defined_Operator_Closed_iff_Equal_Closure() {
  let(H×H: DirectProduct(H, H)) →
  let(∥·∥_H×H: DirectProductNorm(H×H)) →
  
  // Forward direction
  assume(IsClosed(T)) → {
    lemma Set_Closed_iff_Equals_Topological_Closure() {
      assert(cl(G(T)) = G(T))
    } →
    lemma Closable_Densely_Defined_Linear_Operator_Smallest_Closed_Extension() {
      assert(G(T̄) = cl(G(T)))
    } →
    apply(transitivity) →
    assert(G(T̄) = G(T)) →
    assert(T = T̄)
  } →

  // Reverse direction
  assume(T = T̄) → {
    assert(G(T) = G(T̄)) →
    assert(IsClosed(G(T̄))) →
    assert(IsClosed(G(T))) →
    assert(IsClosed(T))
  }
}