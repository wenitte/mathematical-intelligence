theorem Closure_Point_Condition() {
  assert(
    ∀T(T = ⟨S,τ⟩ ∧ T is_topological_space) ∧
    ∀H(H ⊆ S) ∧
    ∀x(x ∈ S) ⇒
    [x ∈ H⁻ ↔ ∀U(U is_open_neighborhood(x) ⇒ ∃y(y ∈ H ∧ y ∈ U))]
  )
}

proof Closure_Point_Condition() {
  setDef(H⁻: H ∪ {p | p is_limit_point(H)}) →
  setDef(open_neighborhood(x): {U | U ∈ τ ∧ x ∈ U}) →
  
  // Necessary condition
  lemma Necessary() {
    assume(x ∈ H⁻) →
    assert(x ∈ H ∨ x is_limit_point(H)) →
    case x ∈ H {
      ∀U(U is_open_neighborhood(x) ⇒ x ∈ U ∧ x ∈ H)
    } →
    case x is_limit_point(H) {
      apply(limit_point_def) →
      ∀U(U is_open_neighborhood(x) ⇒ ∃y(y ∈ H ∧ y ≠ x ∧ y ∈ U))
    }
  } →

  // Sufficient condition
  lemma Sufficient() {
    assume(∀U(U is_open_neighborhood(x) ⇒ ∃y(y ∈ H ∧ y ∈ U))) →
    case x ∈ H {
      assert(x ∈ H⁻) by closure_def
    } →
    case x ∉ H {
      assert(x is_limit_point(H)) by limit_point_def →
      assert(x ∈ H⁻) by closure_def
    }
  } →

  apply(Necessary()) ∧ apply(Sufficient()) →
  conclude(x ∈ H⁻ ↔ ∀U(U is_open_neighborhood(x) ⇒ ∃y(y ∈ H ∧ y ∈ U)))
}