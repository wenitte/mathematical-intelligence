theorem Euclidean_Space_Is_Banach() {
  assert(
    let E = ℝⁿ ∧
    let ‖·‖₂ be_the Euclidean_norm ⇒
    (E, ‖·‖₂) is_a Banach_space
  )
} ↔

proof Euclidean_Space_Is_Banach() {
  setRef(Reference: Euclidean_Space_is_Banach_Space) →
  assert(
    ∀(xₙ)ₙ∈ℕ Cauchy_sequence_in (E, ‖·‖₂) ⇒
    ∃x ∈ E: limₙ→∞ xₙ = x
  ) →
  assert(E is_complete) →
  assert(E is_normed_vector_space) ∧
  assert(E is_complete) →
  conclude(E is_Banach_space)
}