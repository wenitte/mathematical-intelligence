theorem CompactOneManifoldBoundary() {
  assert(
    ∀M (IsCompactOneManifold(M) → HasEvenBoundaryPoints(M))
  )
} ↔

proof CompactOneManifoldBoundary() {
  setVar(M: Manifold) →
  assert(dim(M) = 1) →
  
  lemma ClassificationTheorem() {
    assert(
      IsCompactConnectedOneManifold(M) → 
      (IsDiffeomorphic(M, Circle) ∨ IsDiffeomorphic(M, ClosedInterval))
    )
  } →
  
  assert(∂M = M⁻ \ M°) →
  
  case CircleCase() {
    assume(IsDiffeomorphic(M, Circle)) →
    assert(|∂M| = 0) →
    assert(0 mod 2 = 0)
  } →
  
  case IntervalCase() {
    assume(IsDiffeomorphic(M, [a,b])) →
    assert(a ≠ b) →
    assert(M⁻ = [a,b]) →
    assert(M° = (a,b)) →
    assert(∂M = {a,b}) →
    assert(|∂M| = 2) →
    assert(2 mod 2 = 0)
  } →
  
  apply(ClassificationTheorem()) →
  assert(
    ∀M (IsCompactOneManifold(M) → 
    (|∂M| = 0 ∨ |∂M| = 2))
  ) →
  assert(HasEvenBoundaryPoints(M))
}