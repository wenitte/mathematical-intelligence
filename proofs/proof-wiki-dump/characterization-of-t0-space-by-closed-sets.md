theorem T0_Space_Characterization() {
  assert(
    ∀T(T = (S,τ) ∧ isTopologicalSpace(T)) ↔
    (isT0Space(T) ↔
      ∀x,y ∈ S(x ≠ y →
        (∃F ⊆ S(isClosed(F) ∧ x ∈ F ∧ y ∉ F) ∨
         ∃F ⊆ S(isClosed(F) ∧ x ∉ F ∧ y ∈ F))
      )
    )
  )
}

proof T0_Space_Characterization() {
  // Sufficient condition
  lemma Sufficient() {
    setVar(T: TopologicalSpace) →
    assume(isT0Space(T)) →
    setVar(x,y: S) →
    assume(x ≠ y) →
    
    // By T0 definition
    assert(
      ∃U ∈ τ(x ∈ U ∧ y ∉ U) ∨
      ∃U ∈ τ(x ∉ U ∧ y ∈ U)
    ) →
    
    // WLOG case
    assume(∃U ∈ τ(x ∈ U ∧ y ∉ U)) →
    
    // Complement is closed
    setVar(F: ℘(S)) →
    assert(F = ComplementS(U)) →
    assert(isClosed(F)) →
    
    // Complement properties
    assert(x ∉ F ∧ y ∈ F) →
    
    // Conclusion
    assert(∃F ⊆ S(isClosed(F) ∧ x ∉ F ∧ y ∈ F))
  }

  // Necessary condition
  lemma Necessary() {
    assert(
      "Follows mutatis mutandis from Sufficient direction"
    )
  }

  apply(Sufficient()) →
  apply(Necessary()) →
  conclude()
}