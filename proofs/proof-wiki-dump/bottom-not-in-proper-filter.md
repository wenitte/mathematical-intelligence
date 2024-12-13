theorem Bottom_Not_In_Proper_Filter() {
  let(L = ⟨S,⪯⟩: BoundedBelowPreorderedSet) →
  let(F: Filter(L)) →
  assert(
    ProperFilter(F) ↔ ⊥ ∉ F
  )
}

proof Bottom_Not_In_Proper_Filter() {
  // Sufficient condition: ProperFilter(F) → ⊥ ∉ F
  branch Sufficient() {
    assume(ProperFilter(F)) →
    assert(F ⊆ S ∧ F ≠ S) by defn(ProperSubset) →
    assert(∃x ∈ S: x ∉ F) by defn(SetEquality, Subset) →
    assert(⊥ ⪯ x) by defn(SmallestElement) →
    conclude(⊥ ∉ F) by defn(UpperSection)
  }

  // Necessary condition: ⊥ ∉ F → ProperFilter(F)
  branch Necessary() {
    assume(⊥ ∉ F) →
    assert(F ≠ S) by defn(SetEquality) →
    conclude(ProperFilter(F)) by defn(ProperFilter)
  }

  // Combine both directions
  combine(Sufficient(), Necessary()) →
  conclude(ProperFilter(F) ↔ ⊥ ∉ F)
}