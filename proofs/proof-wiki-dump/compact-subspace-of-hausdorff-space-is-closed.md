theorem Compact_Subspace_Is_Closed() {
  assert(
    ∀H[TopSpace] ∧ IsHausdorff(H) ∧
    ∀C[Set] ∧ IsCompact(C) ∧ IsSubspace(C,H) →
    IsClosed(C,H)
  )
}

proof Compact_Subspace_Is_Closed() {
  setVar(H: TopSpace, C: Set) →
  assume(IsHausdorff(H) ∧ IsCompact(C) ∧ IsSubspace(C,H)) →
  
  lemma For_Each_Point_Outside() {
    assert(
      ∀a ∈ (H.A \ C) →
      ∃U_a[OpenSet] : a ∈ U_a ∧ U_a ⊆ (H.A \ C)
    )
  } →
  
  proof For_Each_Point_Outside() {
    setVar(a: Point) →
    assume(a ∈ (H.A \ C)) →
    
    assert(∀x ∈ C → 
      ∃U_x,V_x[OpenSet] : 
      a ∈ U_x ∧ x ∈ V_x ∧ U_x ∩ V_x = ∅
    ) by HausdorffProperty(H) →
    
    apply(CompactnessProperty(C)) →
    obtain({x_1,...,x_r}: Points, 
           {V_x1,...,V_xr}: OpenSets) :
      C ⊆ ∪{V_x1,...,V_xr} →
    
    define(U_a := ∩{U_x1,...,U_xr}) →
    assert(IsOpen(U_a)) →
    assert(a ∈ U_a) →
    assert(U_a ∩ C = ∅)
  } →
  
  assert(H.A \ C = ∪{U_a : a ∈ (H.A \ C)}) →
  assert(IsOpen(H.A \ C)) →
  conclude(IsClosed(C,H))
}

theorem Finite_Subspace_Is_Closed() {
  assert(
    ∀H[TopSpace] ∧ IsHausdorff(H) ∧
    ∀F[Set] ∧ IsFinite(F) ∧ IsSubspace(F,H) →
    IsClosed(F,H)
  )
}

proof Finite_Subspace_Is_Closed() {
  apply(Compact_Subspace_Is_Closed()) →
  assert(IsFinite(F) → IsCompact(F)) →
  conclude(IsClosed(F,H))
}