theorem Closure_Is_Subspace() {
  assert(
    ∀X: NormedVectorSpace,
    ∀Y ⊆ X,
    let Y⁻ = closure(Y) →
    isSubspace(Y⁻, X)
  )
} ↔

proof Closure_Is_Subspace() {
  lemma Vector_Addition_Closure() {
    assert(
      ∀x,y ∈ Y⁻,
      ∃{xₙ}ₙ∈ℕ,{yₙ}ₙ∈ℕ ∈ Y:
      (lim[n→∞]xₙ = x ∧ lim[n→∞]yₙ = y) →
      (∀n ∈ ℕ: xₙ + yₙ ∈ Y) →
      lim[n→∞](xₙ + yₙ) = x + y →
      x + y ∈ Y⁻
    )
  } →

  lemma Scalar_Multiplication_Closure() {
    assert(
      ∀α ∈ 𝕂,
      ∀y ∈ Y⁻,
      ∃{yₙ}ₙ∈ℕ ∈ Y:
      lim[n→∞]yₙ = y →
      (∀n ∈ ℕ: α·yₙ ∈ Y) →
      lim[n→∞](α·yₙ) = α·y →
      α·y ∈ Y⁻
    )
  } →

  lemma Nonempty() {
    assert(
      isSubspace(Y, X) →
      0 ∈ Y →
      Y ⊆ Y⁻ →
      0 ∈ Y⁻
    )
  } →

  apply(Vector_Addition_Closure()) ∧
  apply(Scalar_Multiplication_Closure()) ∧
  apply(Nonempty()) →
  
  assert(
    isClosed(Y⁻) ∧
    isVectorSpace(Y⁻) →
    isSubspace(Y⁻, X)
  )
}