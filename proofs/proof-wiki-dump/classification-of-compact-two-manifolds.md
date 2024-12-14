theorem CompactTwoManifolds() {
  assert(
    ∀M[M is_smooth ∧ M is_compact ∧ M is_pathConnected ∧ dim(M)=2] ⇒
    [M ≅ S² ∨ M ≅ #ᵢ(T²) ∨ M ≅ #ᵢ(RP²)] ∧
    [M has_boundary ⇒ M ≅ S² ∨ M ≅ #ᵢ(T²) ∨ M ≅ #ᵢ(RP²) - ∪ᵢD²]
  )
} ↔

lemma PolyhedralRepresentation() {
  assert(
    ∀S[S is_compact_2manifold ∧ ∂S = ∅] ⇒
    ∃P,∼[P is_polyhedralDisk ∧ S ≅ P/∼]
  )
}

proof CompactTwoManifolds() {
  apply(PolyhedralRepresentation()) →
  setVar(P: polyhedralDisk, ∼: equivalenceRelation) →
  
  case1() {
    assert(adjacentEdges(e₁,e₂) ∧ opposite_orientation(e₁,e₂)) →
    assert(reduces_to_fewer_edges)
  } →
  
  case2() {
    assert(adjacentEdges(e₁,e₂) ∧ same_orientation(e₁,e₂)) →
    assert(∃C[C is_simpleClosed ∧ bounds(Δ)]) →
    assert(Δ ≅ RP² - D²) →
    assert((P-Δ)/∼ # RP² ≅ S)
  } →
  
  case3() {
    assert(nonAdjacentEdges(e₁,e₂) ∧ same_orientation(e₁,e₂)) →
    assert(∃C,P′,∼′[reduces_to_case2])
  } →
  
  case4() {
    assert(nonAdjacentEdges(e₁,e₂) ∧ opposite_orientation(e₁,e₂) ∧ no_interlacing) →
    assert(∃Y,C[Y is_cylinder ∧ split_along(C) ⇒ connected_sum])
  } →
  
  case5() {
    assert(nonAdjacentEdges(e₁,e₂) ∧ opposite_orientation(e₁,e₂) ∧ has_interlacing) →
    assert(T² # (P-edges)/∼ ≅ S)
  } →
  
  assert(T² # RP² ≅ RP² # RP² # RP²) →
  conclude(∀M[M ≅ S² ∨ M ≅ #ᵢ(T²) ∨ M ≅ #ᵢ(RP²)])
}