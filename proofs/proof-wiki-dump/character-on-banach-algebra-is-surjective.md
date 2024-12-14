theorem Character_Surjective() {
  assert(
    ∀A(isBanachAlgebra(A, ℂ) ∧ ∀φ(isCharacter(φ, A, ℂ) → isSurjective(φ)))
  )
}

proof Character_Surjective_1() {
  setVar(A: BanachAlgebra(ℂ)) →
  setVar(φ: Character(A, ℂ)) →
  assert(isVectorSubspace(φ[A], ℂ)) →
  lemma DimensionProperty() {
    assert(dim(φ[A]) ≤ dim(ℂ) = 1)
  } →
  assert(φ[A] = {0} ∨ φ[A] = ℂ) →
  assert(φ ≠ 0) →
  conclude(φ[A] = ℂ)
}

proof Character_Surjective_2() {
  setVar(A: BanachAlgebra(ℂ)) →
  setVar(φ: Character(A, ℂ)) →
  assert(∃x₀ ∈ A: φ(x₀) ∈ ℂ∖{0}) →
  assert(∀a ∈ ℂ: (a/φ(x₀))x₀ ∈ A) →
  assert(
    ∀a ∈ ℂ: φ((a/φ(x₀))x₀) = (a/φ(x₀))φ(x₀)
  ) →
  assert(
    ∀a ∈ ℂ: φ((a/φ(x₀))x₀) = a
  ) →
  conclude(isSurjective(φ))
}