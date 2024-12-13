theorem Bound_On_Norm_Power() {
  assert(
    ∀F ∈ {ℝ,ℂ} ∧
    ∀A[normedAlgebra(A,F)] ∧
    ∀x ∈ A ∧
    ∀n ∈ ℕ ⇒
    ‖x^n‖ ≤ ‖x‖^n
  )
} ↔

proof Bound_On_Norm_Power() {
  let P(n) := (‖x^n‖ ≤ ‖x‖^n) →
  
  inductionProof(P(n), n ∈ ℕ) {
    baseCase(n=1) {
      assert(‖x^1‖ = ‖x‖ = ‖x‖^1) →
      conclude(P(1))
    } →

    inductiveStep(k ≥ 1) {
      assume(P(k): ‖x^k‖ ≤ ‖x‖^k) →
      
      assert(‖x^(k+1)‖ = ‖x^k × x‖) →
      assert(‖x^k × x‖ ≤ ‖x^k‖ × ‖x‖) by algebraNormProperty() →
      assert(‖x^k‖ × ‖x‖ ≤ ‖x‖^k × ‖x‖) by inductiveHypothesis() →
      assert(‖x‖^k × ‖x‖ = ‖x‖^(k+1)) →
      
      conclude(P(k+1): ‖x^(k+1)‖ ≤ ‖x‖^(k+1))
    }
  }
}