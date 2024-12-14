theorem Central_Subgroup_Is_Normal() {
  assert(
    ∀G: Group ∧ ∀H: Subgroup(G) ∧ 
    (H ⊆ Z(G)) →
    (H ⊴ G)
  )
}

proof Central_Subgroup_Is_Normal() {
  setVar(G: Group) →
  setVar(H: Subgroup(G)) →
  assume(H ⊆ Z(G)) →
  
  lemma Conjugate_Element() {
    assert(
      ∀x ∈ G ∧ ∀h ∈ H →
      (x·h·x⁻¹ = h)
    ) {
      setVar(x: G) →
      setVar(h: H) →
      assert(h ∈ Z(G)) by(H ⊆ Z(G)) →
      assert(x·h·x⁻¹ = x·x⁻¹·h) by(h ∈ Z(G)) →
      assert(x·x⁻¹·h = h) by(GroupAxioms.Inverse) 
    }
  } →

  assert(
    ∀x ∈ G ∧ ∀h ∈ H →
    (x·h·x⁻¹ ∈ H)
  ) by(Conjugate_Element()) →

  conclude(H ⊴ G) by(Normal_Subgroup_Definition)
}