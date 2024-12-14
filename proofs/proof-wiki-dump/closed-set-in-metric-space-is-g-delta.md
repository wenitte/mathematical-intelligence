theorem Closed_Set_Is_GDelta(X: MetricSpace, F: Set) {
  let d = X.metric
  assert(
    F ⊂ X ∧ isClosed(F) →
    isGDelta(F)
  )
}

proof Closed_Set_Is_GDelta() {
  // Define F_1/n as union of open balls
  setVar(n: ℕ) →
  define(F_1/n = ∪{B(x,1/n) | x ∈ F}) →
  assert(∀n ∈ ℕ → isOpen(F_1/n)) →
  assert(∀n ∈ ℕ → F ⊆ F_1/n) →
  
  // Show F is subset of intersection
  assert(F ⊆ ∩{F_1/n | n ∈ ℕ}) →
  
  // Show intersection is subset of F
  lemma Limit_Point() {
    setVar(y: X) →
    assume(y ∈ ∩{F_1/n | n ∈ ℕ}) →
    setVar(ε > 0) →
    assert(∃n ∈ ℕ → 1/n < ε) →
    assert(∃x ∈ F → y ∈ B(x,1/n)) →
    assert(d(x,y) < 1/n < ε) →
    conclude(isLimitPoint(y,F))
  } →
  
  apply(Limit_Point()) →
  assert(isClosed(F) → isLimitPoint(y,F) → y ∈ F) →
  conclude(∩{F_1/n | n ∈ ℕ} ⊆ F) →
  
  // Final conclusion
  assert(F = ∩{F_1/n | n ∈ ℕ}) →
  assert(isCountableIntersection({F_1/n | n ∈ ℕ})) →
  conclude(isGDelta(F))
}