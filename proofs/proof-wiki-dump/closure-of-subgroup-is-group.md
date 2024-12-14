theorem Closure_Subgroup_Is_Group() {
  assert(
    ∀G: TopologicalGroup,
    ∀H ⊆ G where H.isSubgroup(),
    let H̄ = H.closure() ⇒
    H̄.isSubgroup(G)
  )
} ↔

proof Closure_Subgroup_Is_Group() {
  setVar(G: TopologicalGroup) →
  setVar(H: Subgroup(G)) →
  setVar(H̄: Set = H.closure()) →
  
  lemma NonEmpty() {
    assert(H ⊆ H̄) →
    assert(H ≠ ∅) →
    assert(H̄ ≠ ∅)
  } →

  lemma InverseClosedProperty() {
    setVar(a,b ∈ H̄) →
    setVar(U: Neighborhood(ab⁻¹)) →
    setVar(f: G×G → G, f(x,y) = xy⁻¹) →
    
    assert(f.isContinuous()) →
    
    assert(∃A: Neighborhood(a),
           ∃B: Neighborhood(b) |
           A×B ⊆ f⁻¹(U)) →
           
    assert(∃x ∈ (A∩H),
           ∃y ∈ (B∩H)) →
           
    assert(xy⁻¹ ∈ (U∩H)) →
    
    assert(∀U: Neighborhood(ab⁻¹) ⇒
           U∩H ≠ ∅) →
           
    assert(ab⁻¹ ∈ H̄)
  } →
  
  apply(OneStepSubgroupTest(H̄)) →
  assert(H̄.isSubgroup(G))
}