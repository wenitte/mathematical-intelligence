theorem Compact_Subspace_Is_Closed() {
  assert(
    ∀H(H ∈ HausdorffSpace ∧
    ∀C(C ⊆ H ∧ isCompact(C)) →
    isClosed(C, H))
  )
} ↔

proof Compact_Subspace_Is_Closed() {
  setVar(H: HausdorffSpace) →
  setVar(C: Subset(H)) →
  setVar(x: Element(H∖C)) →
  
  define(O: Collection) {
    O = {V ∈ τ(H) | ∃U ∈ τ(H): x ∈ U ⊆ V^c}
  } →
  
  lemma Empty_Intersection_Subset() {
    assert(∀U,V(U ⊆ V^c ↔ U ∩ V = ∅))
  } →
  
  assert(isOpenCover(O, C)) by HausdorffProperty(H) →
  
  exists(F: FiniteSubcover(O, C)) by Compactness(C) →
  
  exists(U_V: Family(τ(H))) {
    assert(∀V ∈ F: x ∈ U_V ⊆ V^c)
  } by FiniteChoice() →
  
  define(U: Set) {
    U = ⋂{U_V | V ∈ F}
  } →
  
  assert(U ∈ τ(H)) by TopologyIntersectionProperty() →
  assert(x ∈ U) →
  
  chain(
    U ⊆ ⋂{V^c | V ∈ F} by SetIntersectionProperty() →
    = (⋃F)^c by DeMorganLaws() →
    ⊆ C^c by CoverDefinition()
  ) →
  
  assert(isNeighborhood(C^c, x)) →
  assert(C^c ∈ τ(H)) by OpenNeighborhoodEquiv() →
  assert(isClosed(C, H))
}