theorem B_Algebra_Left_Cancellable() {
  assert(
    ∀X[B_algebra(X) ⇒ left_cancellable(X.operation)]
  )
} ↔

proof B_Algebra_Left_Cancellable() {
  setVar(X: B_algebra) →
  setVar(x,y,z: X) →
  
  assert(x ∘ y = x ∘ z) →
  
  equivalence_chain() {
    x ∘ y = x ∘ z ↔
    0 ∘ (x ∘ y) = 0 ∘ (x ∘ z) ↔ 
    (0 ∘ (0 ∘ y)) ∘ x = (0 ∘ (0 ∘ z)) ∘ x ↔
    (0 ∘ y) ∘ x = (0 ∘ z) ∘ x ↔
    y ∘ x = z ∘ x ↔
    y = z
  } →

  lemma_applications() {
    apply(zero_left_cancellable) →
    apply(b_algebra_identity) →
    apply(zero_left_cancellable) →
    apply(zero_left_cancellable) →
    apply(right_cancellable)
  } →

  conclude(left_cancellable(X.operation))
}