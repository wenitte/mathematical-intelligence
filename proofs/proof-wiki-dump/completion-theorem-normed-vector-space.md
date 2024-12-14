theorem Completion_Theorem() {
  assert(
    let(GF ∈ {ℝ,ℂ}) ∧
    let((X, ∥·∥) be_normed_vector_space) →
    ∃((X̃, ∥̃·∥) be_banach_space ∧ 
       ∃φ(linear_isometry(φ: X → X̃) ∧ 
          dense(φ[X], X̃) ∧
          unique_up_to_isometric_isomorphism(X̃)))
  )
} ↔

proof Completion_Theorem() {
  proof_existence() {
    let((X**, ∥·∥_X**) = second_normed_dual(X, ∥·∥)) →
    assert(is_banach_space(X**)) by(Normed_Dual_Space_Is_Banach) →
    let(φ = evaluation_transformation(X → X**)) →
    assert(linear_isometry(φ)) by(Evaluation_Linear_Transformation_Is_Isometry) →
    let(X̃ = cl(φ[X])) →
    let(∥̃·∥ = restrict(∥·∥_X**, cl(φ[X]))) →
    assert(is_banach_space(X̃, ∥̃·∥)) by(Subspace_Complete_Metric_Space_Closed_Iff_Complete) →
    assert(dense(φ[X], X̃)) by(Closure_Definition)
  } →

  proof_uniqueness() {
    let(X₁,X₂ be_banach_spaces) ∧
    let(φ₁: X → X₁, φ₂: X → X₂ be_linear_isometries) ∧
    assert(dense(φ₁[X], X₁) ∧ dense(φ₂[X], X₂)) →
    assert(isometric_isomorphism(φ₁⁻¹: φ₁[X] → X)) by(Inverse_Linear_Isometry) →
    assert(isometric_isomorphism(φ₂∘φ₁⁻¹: φ₁[X] → φ₂[X])) by(
      Composition_Linear_Isometries,
      Composite_Bijections
    ) →
    lemma Extension_Existence() {
      assert(∃!ψ(
        bounded_linear_transformation(ψ: X₁ → X₂) ∧
        extends(ψ, φ₂∘φ₁⁻¹)
      )) by(Uniformly_Continuous_Function_Extension)
    } →
    apply(Extension_Existence()) →
    assert(isometric_isomorphism(ψ)) by(Completion_Theorem_Metric_Space_Lemma_4)
  }
}