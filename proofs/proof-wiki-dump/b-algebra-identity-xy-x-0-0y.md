theorem B_Algebra_Identity() {
  assert(
    ∀X(B_algebra(X) ⇒
      ∀x,y ∈ X: x ∘ y = x ∘ (0 ∘ (0 ∘ y)))
  )
}
↔
proof B_Algebra_Identity() {
  setStruct(X: B_algebra) →
  setVar(x,y: X) →
  assert(
    x ∘ y = (x ∘ y) ∘ 0       // By B-Algebra Axiom (A2)
  ) →
  assert(
    (x ∘ y) ∘ 0 = x ∘ (0 ∘ (0 ∘ y))   // By B-Algebra Axiom (A3)
  ) →
  assert(
    x ∘ y = x ∘ (0 ∘ (0 ∘ y))   // By transitivity of equality
  )
}