theorem HausdorffClosureCondition() {
  assert(
    ∀S,τ (isTopologicalSpace(S,τ)) ↔
    (isHausdorff(S,τ) ↔ 
      (∀x,y ∈ S: x ≠ y → ∃U ∈ τ: (x ∈ U ∧ y ∉ U⁻)))
  )
}

proof HausdorffClosureCondition() {
  // Necessary Condition
  part1() {
    assume(isHausdorff(S,τ)) →
    setVar(x,y ∈ S: x ≠ y) →
    byDef(Hausdorff) {
      assert(∃U,V ∈ τ: (x ∈ U ∧ y ∈ V ∧ U ∩ V = ∅))
    } →
    lemma EmptyIntersectionIffSubset() {
      assert(U ∩ V = ∅ ↔ U ⊆ S∖V)
    } →
    apply(EmptyIntersectionIffSubset()) →
    assert(U ⊆ S∖V) →
    byDef(closed) {
      assert(isClosed(S∖V))
    } →
    byDef(closure) {
      assert(U⁻ ⊆ S∖V)
    } →
    assert(y ∈ V) →
    byDef(complement) {
      assert(y ∉ S∖V)
    } →
    byDef(subset) {
      assert(y ∉ U⁻)
    }
  }

  // Sufficient Condition
  part2() {
    assume(∀x,y ∈ S: x ≠ y → ∃U ∈ τ: (x ∈ U ∧ y ∉ U⁻)) →
    setVar(x,y ∈ S: x ≠ y) →
    letVar(U ∈ τ: x ∈ U ∧ y ∉ U⁻) →
    letVar(V = S∖U⁻) →
    assert(y ∈ V) →
    byDef(closure) {
      assert(U ⊆ U⁻)
    } →
    assert(U ∩ V = ∅) →
    byDef(Hausdorff) {
      assert(isHausdorff(S,τ))
    }
  }
}