theorem Closed_Ball_Path_Connected() {
  assert(
    ∀V: NormedVectorSpace ∧
    ∀norm: V → ℝ ∧
    ∀B: ClosedBall(V, norm) ⇒
    isPathConnected(B)
  )
} ↔

proof Closed_Ball_Path_Connected() {
  setVar(V: NormedVectorSpace) →
  setVar(norm: V → ℝ) →
  setVar(B: ClosedBall(V, norm)) →
  
  lemma L1_Closed_Ball_Convex() {
    assert(isConvex(B))
  } →
  
  lemma L2_Normed_Space_Hausdorff() {
    assert(isHausdorff(V))
  } →
  
  lemma L3_Convex_Path_Connected() {
    assert(
      ∀S: Set ∧ isConvex(S) ∧ 
      isHausdorff(containingSpace(S)) ⇒
      isPathConnected(S)
    )
  } →
  
  apply(L1_Closed_Ball_Convex()) →
  apply(L2_Normed_Space_Hausdorff()) →
  apply(L3_Convex_Path_Connected(), {S ↦ B}) →
  
  assert(isPathConnected(B))
}