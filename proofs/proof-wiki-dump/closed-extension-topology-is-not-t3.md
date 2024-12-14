theorem Closed_Extension_Not_T3(T: TopologicalSpace) {
  let(S = T.underlyingSet, τ = T.topology) →
  let(T_p_star = ClosedExtensionSpace(T)) →
  let(S_p_star = T_p_star.underlyingSet, τ_p_star = T_p_star.topology) →
  assert(
    ¬isT3Space(T_p_star)
  )
} ↔

proof Closed_Extension_Not_T3(T: TopologicalSpace) {
  lemma UnderlyingSetClosed() {
    assert(isClosed(S, T))
  } →
  
  lemma ClosedSetsExtend() {
    assert(isClosed(S, T_p_star))
  } →
  
  apply(ClosedExtensionSpaceDefinition()) →
  assert(p ∉ S) ∧
  assert(∀U ∈ τ_p_star → (U = ∅ ∨ p ∈ U)) →
  
  lemma NoDisjointOpen() {
    assert(∀U ∈ τ_p_star → (S ⊆ U → p ∈ U)) →
    assert(¬∃U,V ∈ τ_p_star → 
      (S ⊆ U ∧ p ∈ V ∧ U ∩ V = ∅))
  } →
  
  apply(T3SpaceDefinition()) →
  assert(¬isT3Space(T_p_star))
}