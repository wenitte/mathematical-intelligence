theorem VN_Boundedness_Characterization() {
  assert(
    (GF ∈ {ℝ, ℂ}) ∧
    (X, ∥·∥) is_normed_vector_space ∧
    U ⊆ X ⇒
    (U is_VN_bounded ↔ ∃M > 0, ∀x ∈ U: ∥x∥ < M)
  )
}

proof VN_Boundedness_Characterization() {
  lemma NVS_to_HLCS() {
    assert(
      (X, ∥·∥) is_normed_vector_space →
      (X, ∥·∥) is_Hausdorff_locally_convex_space
    )
  } →
  
  apply(NVS_to_HLCS()) →
  
  lemma VN_Bounded_HLCS() {
    assert(
      ((X, ∥·∥) is_Hausdorff_locally_convex_space ∧
       U ⊆ X) →
      (U is_VN_bounded ↔ ∃M > 0, ∀x ∈ U: ∥x∥ < M)
    )
  } →
  
  apply(VN_Bounded_HLCS()) →
  assert(U is_VN_bounded ↔ ∃M > 0, ∀x ∈ U: ∥x∥ < M)
}