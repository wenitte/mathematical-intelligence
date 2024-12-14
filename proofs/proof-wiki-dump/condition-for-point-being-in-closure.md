theorem Closure_Point_Condition() {
  assert(
    ∀T(T: TopologicalSpace) ∧
    ∀H(H ⊆ T.S) ∧
    ∀x(x ∈ T.S) →
    (x ∈ H⁻ ↔ ∀U(U: OpenNeighborhood(x) → U ∩ H ≠ ∅))
  )
} ↔

proof Closure_Point_Condition() {
  setDef(H⁻ := H ∪ LimitPoints(H)) →
  setDef(OpenNeighborhood(x) := {U ∈ T.τ | x ∈ U}) →
  
  // Necessary condition
  lemma Necessary() {
    assert(x ∈ H⁻) →
    assert(x ∈ H ∨ x ∈ LimitPoints(H)) →
    case x ∈ H:
      assert(∀U(U: OpenNeighborhood(x) → x ∈ (U ∩ H)))
    case x ∈ LimitPoints(H):
      assert(∀U(U: OpenNeighborhood(x) → ∃y(y ∈ (U ∩ H) ∧ y ≠ x)))
  } →

  // Sufficient condition
  lemma Sufficient() {
    assert(∀U(U: OpenNeighborhood(x) → U ∩ H ≠ ∅)) →
    case x ∈ H:
      assert(x ∈ H⁻)
    case x ∉ H:
      assert(x ∈ LimitPoints(H)) →
      assert(x ∈ H⁻)
  } →

  // Alternative proof using complements
  lemma ComplementProof() {
    setDef(U: OpenNeighborhood(x)) →
    assert(H ∩ U = ∅ ↔ H ⊆ U^c) →
    assert(H ⊆ U^c ↔ H⁻ ⊆ U^c) →
    assert(H⁻ ⊆ U^c ↔ U ⊆ (H⁻)^c) →
    assert(U ⊆ (H⁻)^c ↔ H⁻ ∩ U = ∅) →
    assert(x ∈ U ↔ x ∉ H⁻) →
    apply(Contrapositive())
  }
}

theorem Closure_Point_Condition_Metric() {
  assert(
    ∀M(M: MetricSpace) ∧
    ∀H(H ⊆ M.S) ∧
    ∀x(x ∈ M.S) →
    (x ∈ cl(H) ↔ ∀ε(ε > 0 → Bₑ(x) ∩ H ≠ ∅))
  )
}

theorem Closure_Point_Condition_TVS() {
  assert(
    ∀X(X: TopologicalVectorSpace) ∧
    ∀A(A ⊆ X) ∧
    ∀x(x ∈ X) →
    (x ∈ A⁻ ↔ ∀V(V: OpenNeighborhood(0_X) → (x + V) ∩ A ≠ ∅))
  )
}