theorem BoundedSequenceConvergentSubsequence() {
  assert(
    ∀{x_i}_{i∈ℕ} ∈ ℝ^n: (
      isBounded({x_i}_{i∈ℕ}) ⇒
      ∃{x_{i_k}}_{k∈ℕ} ∈ subsequences({x_i}): (
        ∃L ∈ ℝ^n: lim(k→∞)(x_{i_k}) = L
      )
    )
  )
} ↔

proof BoundedSequenceConvergentSubsequence() {
  setVar(S: range({x_i})) →
  
  lemma ClosureBoundedness() {
    assert(
      isBounded(S) ⇒ isBounded(cl(S))
    )
  } →
  
  lemma ClosureIsClosed() {
    assert(
      ∀T ∈ TopologicalSpace: isClosed(cl(T))
    )
  } →
  
  lemma HeineBorel() {
    assert(
      ∀T ⊆ ℝ^n: (
        isClosed(T) ∧ isBounded(T) ⇒ isCompact(T)
      )
    )
  } →
  
  lemma CompactSequentiallyCompact() {
    assert(
      ∀T ∈ MetricSpace: (
        isCompact(T) ⇒ isSequentiallyCompact(T)
      )
    )
  } →
  
  apply(ClosureBoundedness()) ∧
  apply(ClosureIsClosed()) ∧
  apply(HeineBorel()) →
  apply(CompactSequentiallyCompact()) →
  
  assert(
    isSequentiallyCompact(cl(S)) ⇒
    ∃{x_{i_k}}_{k∈ℕ}: converges({x_{i_k}}_{k∈ℕ})
  )
}