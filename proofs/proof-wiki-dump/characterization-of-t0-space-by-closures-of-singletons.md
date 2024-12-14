theorem T0_Space_Characterization() {
  assert(
    ∀T(S,τ)[TopologicalSpace] ↔ (
      IsT0Space(T) ↔ 
      ∀x,y ∈ S: (x ≠ y → (x ∉ closure({y}) ∨ y ∉ closure({x})))
    )
  )
}

proof T0_Space_Characterization() {
  // Sufficient Condition
  block Sufficient() {
    assume(IsT0Space(T)) →
    setVar(x,y: S) →
    assume(x ≠ y) →
    
    // Proof by contradiction
    assume(x ∈ closure({y}) ∧ y ∈ closure({x})) →
    assert(x ∈ closure({y}) ∧ {y} ⊆ closure({x})) →
    assert({x} ⊆ closure({y}) ∧ {y} ⊆ closure({x})) →
    assert(closure({x}) ⊆ closure(closure({y})) ∧ closure({y}) ⊆ closure(closure({x}))) →
    assert(closure({x}) ⊆ closure({y}) ∧ closure({y}) ⊆ closure({x})) →
    assert(closure({x}) = closure({y})) →
    
    lemma T0_Distinct_Closures() {
      assert(IsT0Space(T) → closure({x}) ≠ closure({y}))
    } →
    apply(T0_Distinct_Closures()) →
    assert(contradiction())
  }

  // Necessary Condition
  block Necessary() {
    assume(∀x,y ∈ S: (x ≠ y → (x ∉ closure({y}) ∨ y ∉ closure({x})))) →
    setVar(x,y: S) →
    assume(x ≠ y) →
    
    // Proof by contradiction
    assume(closure({x}) = closure({y})) →
    assert(x ∈ {x} ∧ y ∈ {y}) →
    assert({x} ⊆ closure({x}) ∧ {y} ⊆ closure({y})) →
    assert(x ∈ closure({x}) ∧ y ∈ closure({y})) →
    assert(x ∈ closure({y}) ∧ y ∈ closure({x})) →
    assert(contradiction())
  }
}