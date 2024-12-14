theorem Closed_Convex_Hull_Is_Convex() {
  let(X: NormedVectorSpace, ∥·∥: Norm) →
  let(U: Subset(X)) →
  let(C: ClosedConvexHull(U)) →
  assert(
    IsConvex(C)
  )
} ↔

proof Closed_Convex_Hull_Is_Convex() {
  let(C = Closure(conv(U))) →
  
  lemma ConvexHull_Properties() {
    assert(
      IsConvex(conv(U)) ∧
      IsSmallestConvexSet(conv(U), U)
    )
  } →
  
  lemma Closure_Preserves_Convexity() {
    assert(
      ∀S ∈ X, IsConvex(S) → IsConvex(Closure(S))
    )
  } →
  
  apply(ConvexHull_Properties()) →
  apply(Closure_Preserves_Convexity(), S := conv(U)) →
  assert(IsConvex(C))
}