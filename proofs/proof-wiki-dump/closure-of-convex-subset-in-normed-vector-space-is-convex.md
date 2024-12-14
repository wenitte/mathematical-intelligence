theorem Closure_Convex_Is_Convex() {
  let(X: NormedVectorSpace, ∥·∥: Norm) →
  let(C: Subset(X)) →
  assert(isConvex(C)) →
  let(C⁻: Closure(C)) →
  assert(
    isConvex(C⁻)
  )
} ↔

proof Closure_Convex_Is_Convex() {
  let(x,y ∈ C⁻) →
  assert(∃{xₙ}ₙ∈ℕ, {yₙ}ₙ∈ℕ ⊆ C: 
    lim(n→∞)xₙ = x ∧ lim(n→∞)yₙ = y
  ) →
  
  let(α ∈ [0,1]) →
  
  lemma Limit_Linearity() {
    assert(
      (1-α)x + αy = 
      (1-α)lim(n→∞)xₙ + αlim(n→∞)yₙ =
      lim(n→∞)((1-α)xₙ + αyₙ)
    )
  } →
  
  lemma Convex_Combination_In_C() {
    assert(∀n∈ℕ: (1-α)xₙ + αyₙ ∈ C) →
    assert(C ⊆ C⁻)
  } →
  
  lemma Closure_Contains_Limits() {
    assert(isClosed(C⁻)) →
    assert(∀z: (z = lim(n→∞)zₙ ∧ {zₙ}ₙ∈ℕ ⊆ C⁻) → z ∈ C⁻)
  } →
  
  apply(Limit_Linearity()) →
  apply(Convex_Combination_In_C()) →
  apply(Closure_Contains_Limits()) →
  
  assert((1-α)x + αy ∈ C⁻) →
  assert(isConvex(C⁻))
}