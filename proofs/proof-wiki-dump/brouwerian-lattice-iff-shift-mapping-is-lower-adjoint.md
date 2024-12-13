theorem Brouwerian_Lattice_Shift_Mapping() {
  let(S: Lattice, ≤: PreorderRelation) →
  assert(
    (S, ≤) is_BrouwerianLattice ↔
    ∀x ∈ S, f: S → S (
      (∀s ∈ S: f(s) = x ∧ s) → 
      f is_LowerAdjoint
    )
  )
}

proof Brouwerian_Lattice_Shift_Mapping() {
  let(S: Lattice, ≤: PreorderRelation) →
  
  equivalence_chain {
    assert((S, ≤) is_BrouwerianLattice) ↔
    
    assert(
      ∀x,y ∈ S (
        x has_RelativePseudocomplement(wrt: y)
      )
    ) by(def: BrouwerianLattice) ↔
    
    assert(
      ∀x,y ∈ S (
        ∃max{s ∈ S: x ∧ s ≤ y}
      )
    ) by(def: RelativePseudocomplement) ↔
    
    assert(
      ∀x ∈ S, f: S → S (
        (∀s ∈ S: f(s) = x ∧ s) →
        f is_LowerAdjoint
      )
    ) by(theorem: Shift_Mapping_Lower_Adjoint_iff_Maxima)
  }
}