theorem Banach_Steinhaus_Normed() {
  let(X: BanachSpace, Y: NormedVectorSpace) →
  let(T_α: BoundedLinearMap(X → Y), α ∈ A) →
  assert(
    (∀x ∈ X: sup{‖T_α(x)‖_Y: α ∈ A} < ∞) →
    (sup{‖T_α‖: α ∈ A} < ∞)
  )
} ↔

proof Banach_Steinhaus_Normed() {
  setVar(X: BanachSpace) →
  setVar(Y: NormedVectorSpace) →
  let(Γ = {T_α: α ∈ A}) →
  let(Γ(x) = {T_α(x): α ∈ A}) →
  
  lemma Banach_Is_FSpace() {
    assert(X is FSpace)
  } →
  
  lemma Normed_Is_Hausdorff() {
    assert(Y is HausdorffTopologicalVectorSpace)
  } →
  
  assert(∀x ∈ X: sup{‖T_α(x)‖_Y: α ∈ A} < ∞) →
  
  lemma vonNeumann_Bounded() {
    assert(∀x ∈ X: Γ(x) is vonNeumannBounded in Y)
  } →
  
  apply(Banach_Steinhaus_FSpace) →
  assert(Γ is equicontinuous) →
  
  ∃(U: OpenNeighborhood(0_X)) →
  assert(∀α ∈ A: T_α[U] ⊆ B¹_Y(0_Y) ⊆ B⁻_Y) →
  
  ∃(δ > 0) →
  assert(B^X_δ(0_X) ⊆ U) →
  assert(∀α ∈ A: T_α[B^X_δ(0_X)] ⊆ B¹_Y(0_Y)) →
  
  assert((δ/2)B⁻_X ⊆ B^X_δ(0_X)) →
  assert(B¹_Y(0_Y) ⊆ B⁻_Y) →
  
  apply(Linear_Transform_Dilation) →
  assert(∀α ∈ A: T_α[B⁻_X] ⊆ (2/δ)B⁻_Y) →
  
  apply(Norm_Bounded_Linear_Transform) →
  assert(∀α ∈ A: ‖T_α‖ ≤ 2/δ) →
  
  conclude(sup{‖T_α‖: α ∈ A} ≤ 2/δ < ∞)
}