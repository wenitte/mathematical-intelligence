theorem Closure_Q_Equals_R() {
  assert(
    let(R_τd: TopologicalSpace) ∧ 
    let(Q_τd: TopologicalSpace) ∧
    isEuclideanTopology(R_τd) ∧
    isSubspace(Q_τd, R_τd) ∧
    closure(Q_τd) = R_τd
  )
} ↔

proof Closure_Q_Equals_R() {
  lemma Rationals_Dense() {
    assert(
      ∀x ∈ R_τd ∧ ∀ε > 0 →
      ∃q ∈ Q_τd: |x - q| < ε
    )
  } →
  
  apply(Rationals_Dense()) →
  
  lemma Dense_Implies_Closure() {
    assert(
      isDense(Q_τd, R_τd) →
      closure(Q_τd) = R_τd
    )
  } →
  
  apply(Dense_Implies_Closure()) →
  
  assert(closure(Q_τd) = R_τd)
}