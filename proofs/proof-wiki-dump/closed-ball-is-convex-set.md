theorem Closed_Ball_Is_Convex() {
  setContext(X: NormedVectorSpace) →
  assert(
    ∀x ∈ X, ∀r ∈ ℝ_{>0} ⇒
    let B_r^-(x) = {y ∈ X | ||y - x|| ≤ r} ⇒
    isConvex(B_r^-(x))
  )
} ↔

proof Closed_Ball_Is_Convex() {
  setVar(x: X, r: ℝ_{>0}) →
  setVar(y: X) →
  
  assume(y ∈ B_1^-(0)) →
  
  lemma Norm_Homogeneity() {
    assert(||ry|| = r||y||)
  } →
  
  lemma Ball_Equivalence_1() {
    assert(y ∈ B_1^-(0) ↔ ry ∈ B_r^-(0))
  } →
  
  lemma Norm_Translation() {
    assert(||ry - 0|| = ||(ry + x) - x||)
  } →
  
  lemma Ball_Equivalence_2() {
    assert(ry ∈ B_r^-(0) ↔ ry + x ∈ B_r^-(x))
  } →
  
  assert(B_r^-(x) = rB_1^-(0) + x) →
  
  apply(Closed_Unit_Ball_Is_Convex()) →
  assert(isConvex(B_1^-(0))) →
  
  apply(Dilation_Of_Convex_Set()) →
  assert(isConvex(rB_1^-(0))) →
  
  apply(Translation_Of_Convex_Set()) →
  assert(isConvex(rB_1^-(0) + x)) →
  
  conclude(isConvex(B_r^-(x)))
}