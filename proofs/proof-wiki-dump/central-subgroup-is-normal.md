theorem Central_Subgroup_Normal() {
  assert(
    ∀G: Group ∧ ∀H: Subgroup(G) ∧ Central_Subgroup(H,G) ⇒ Normal_Subgroup(H,G)
  )
} ↔

proof Central_Subgroup_Normal() {
  setVar(G: Group) →
  setVar(H: Subgroup(G)) →
  assume(Central_Subgroup(H,G)) →
  assert(H ⊆ Z(G)) by def(Central_Subgroup) →
  
  lemma Conjugation_Identity() {
    assert(
      ∀x ∈ G, ∀h ∈ H: 
      xhx⁻¹ = xx⁻¹h by def(Z(G)) →
      xhx⁻¹ = h
    )
  } →
  
  lemma Normal_Criterion() {
    assert(
      ∀x ∈ G, ∀h ∈ H:
      xhx⁻¹ ∈ H ⇒ Normal_Subgroup(H,G)
    )
  } →
  
  apply(Conjugation_Identity()) →
  apply(Normal_Criterion()) →
  assert(xhx⁻¹ ∈ H) →
  conclude(Normal_Subgroup(H,G)) by def(Normal_Subgroup)
}