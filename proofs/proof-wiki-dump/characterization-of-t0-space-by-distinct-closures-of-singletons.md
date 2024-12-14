theorem T0_Space_Characterization() {
  assert(
    ∀T(TopologicalSpace(T) ∧ T = (S,τ)) ↔
    (T0_Space(T) ↔ (∀x,y ∈ S: x ≠ y → {x}⁻ ≠ {y}⁻))
  )
}

proof T0_Space_Characterization() {
  // Sufficient Condition (→)
  assert(T0_Space(T)) →
  setVar(x,y: S) →
  assume(x ≠ y) →
  apply(T0_Definition()) →
  assert(∃U ∈ τ: (x ∈ U ∧ y ∉ U) ∨ (x ∉ U ∧ y ∈ U)) →
  assume(∃U ∈ τ: x ∈ U ∧ y ∉ U) →
  assert(x ∈ {x}) →
  apply(Set_Subset_Closure()) →
  assert({x} ⊆ {x}⁻) →
  assert(x ∈ {x}⁻) →
  assert({x}⁻ ∩ U ≠ ∅) →
  assert(∀z: z ∈ {y} → z = y) →
  assert({y} ∩ U = ∅) →
  apply(Open_Disjoint_Closure_Lemma()) →
  assert({y}⁻ ∩ U = ∅) →
  conclude({x}⁻ ≠ {y}⁻) →

  // Necessary Condition (←)
  assume(∀x,y ∈ S: x ≠ y → {x}⁻ ≠ {y}⁻) →
  lemma Contradiction_Proof() {
    assume(∀F ⊆ S: (Closed(F) ∧ x ∈ F → y ∈ F)) →
    setVar(F := {y}⁻) →
    assert(Closed(F)) →
    assume(x ∈ F) →
    assert({x} ⊆ F) →
    apply(Closure_Subset_Properties()) →
    assert({x}⁻ ⊆ F) →
    assert(x ∈ {x}⁻) →
    apply(initial_assumption) →
    assert(y ∈ {x}⁻) →
    assert({y} ⊆ {x}⁻) →
    assert(F ⊆ {x}⁻) →
    assert(F = {x}⁻) →
    contradiction()
  } →
  assert(x ∉ F) →
  assert(y ∈ {y} ⊆ {y}⁻ = F) →
  conclude(∃F ⊆ S: Closed(F) ∧ x ∉ F ∧ y ∈ F)
}