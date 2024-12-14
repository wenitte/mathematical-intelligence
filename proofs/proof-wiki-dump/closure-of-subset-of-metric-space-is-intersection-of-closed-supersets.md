theorem Closure_Is_Intersection_Of_Closed_Supersets() {
  assert(
    ∀M(M = ⟨A,d⟩: metric_space) ∧
    ∀H(H ⊆ A) ∧
    let H⁻ = closure(H) ⇒
    H⁻ = ⋂{K | K is closed in M ∧ H ⊆ K}
  )
} ↔

proof Closure_Is_Intersection_Of_Closed_Supersets() {
  setVar(𝕂 = {K | K is closed in M ∧ H ⊆ K}) →
  
  lemma Subset_Forward() {
    assert(∀K ∈ 𝕂: H⁻ ⊆ K) →
    apply(Closure_Of_Subset_Of_Closed_Set()) →
    apply(Intersection_Is_Largest_Subset()) →
    conclude(H⁻ ⊆ ⋂𝕂)
  } →

  lemma Subset_Backward() {
    assert(H⁻ is closed) →
    apply(Closure_Of_Subset_Is_Closed()) →
    assert(H ⊆ H⁻) →
    apply(Subset_Of_Its_Closure()) →
    assert(H⁻ ∈ 𝕂) →
    apply(Intersection_Is_Subset()) →
    conclude(⋂𝕂 ⊆ H⁻)
  } →

  apply(Subset_Forward()) →
  apply(Subset_Backward()) →
  assert(H⁻ ⊆ ⋂𝕂 ∧ ⋂𝕂 ⊆ H⁻) →
  apply(Set_Equality_Definition()) →
  conclude(H⁻ = ⋂𝕂)
}