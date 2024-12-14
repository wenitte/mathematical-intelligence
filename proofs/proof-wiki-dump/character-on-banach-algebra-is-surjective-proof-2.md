theorem Character_is_Surjective() {
  let(A: BanachAlgebra(ℂ), φ: Function(A → ℂ)) →
  assume(isCharacter(φ, A)) →
  assert(isSurjective(φ))
} ↔

proof Character_is_Surjective() {
  let(x₀: A) →
  assume(φ(x₀) ∈ ℂ ∖ {0}) →
  assert(∃x₀ ∈ A: φ(x₀) ≠ 0) ∵ isNonZero(φ) →

  let(a: ℂ) →
  setExpr(y = (a/φ(x₀))x₀) →
  assert(y ∈ A) ∵ isComplexAlgebra(A) →
  
  calc {
    φ(y)
    = φ((a/φ(x₀))x₀) →
    = (a/φ(x₀))φ(x₀) ∵ isHomomorphism(φ) →
    = a
  } →

  conclude(∀a ∈ ℂ ∃y ∈ A: φ(y) = a) →
  assert(isSurjective(φ))
}