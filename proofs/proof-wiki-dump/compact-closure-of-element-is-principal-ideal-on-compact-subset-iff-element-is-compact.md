theorem CompactClosurePrincipalIdeal() {
  let(L: BoundedBelowAlgebraicJoinSemilattice) →
  let(P: OrderedSubset(KL)) where KL = CompactSubset(L) →
  let(x ∈ S) →
  assert(
    CompactClosure(x).isPrincipalIdeal(P) ↔ x.isCompact()
  )
}

proof CompactClosurePrincipalIdeal() {
  // Sufficient Condition
  assume(CompactClosure(x).isPrincipalIdeal(P)) →
  assert(CompactClosure(x) ⊆ KL) →
  assert(∃y ∈ CompactClosure(x): y.isUpperBound(CompactClosure(x), P)) →
  assert(y.isUpperBound(CompactClosure(x), L)) →
  assert(sup_L(CompactClosure(x)) ⪯ y) →
  assert(L.satisfies(KApproximationAxiom)) →
  assert(x ⪯ y) →
  assert(y ⪯ x ∧ y.isCompact()) →
  assert(x.isCompact()) →

  // Necessary Condition
  assume(x.isCompact()) →
  assert(x ∈ KL) →
  
  lemma CompactClosureEqualsDownset() {
    let(y ∈ KL) →
    assert(
      y ∈ CompactClosure(x) ↔
      y ⪯ x ↔
      y ⪯_P x ↔
      y ∈ DownSet(x)
    )
  } →
  
  apply(CompactClosureEqualsDownset()) →
  assert(CompactClosure(x) = DownSet(x)) →
  assert(CompactClosure(x).isPrincipalIdeal(P))
}