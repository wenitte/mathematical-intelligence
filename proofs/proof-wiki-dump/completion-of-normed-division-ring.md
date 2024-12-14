theorem Normed_Division_Ring_Completion() {
  let R: NormedDivisionRing
  let ||·||_R: R → ℝ_≥0
  let C: RingOfCauchySequences(R)
  let N: NullSequences(R)
  let Q := C/N
  let ||·||_Q: Q → ℝ_≥0
  
  assert(
    ∀(x_n + N ∈ Q) ⇒ ||x_n + N||_Q = lim[n→∞](||x_n||_R)
  ) →
  
  assert(
    ⟨Q, ||·||_Q⟩ isCompletionOf ⟨R, ||·||_R⟩
  )
} ↔

proof Normed_Division_Ring_Completion() {
  lemma L1() {
    assert(⟨Q, ||·||_Q⟩ isNormedDivisionRing)
  } →
  
  setVar(d_R: MetricFrom(||·||_R)) →
  setVar(d_Q: MetricFrom(||·||_Q)) →
  
  lemma L2() {
    assert(⟨Q, d_Q⟩ isMetricCompletionOf ⟨R, d_R⟩)
  } →
  
  defineMap(φ: R → Q) {
    ∀(a ∈ R) ⇒ φ(a) = (a, a, a, ...) + N
  } →
  
  lemma L3() {
    assert(φ(R) isDenseIn ⟨Q, d_Q⟩)
  } →
  
  lemma L4() {
    assert(φ isDistancePreservingRingMonomorphism)
  } →
  
  apply(completionDefinition) →
  assert(⟨Q, ||·||_Q⟩ isCompletionOf ⟨R, ||·||_R⟩)
}