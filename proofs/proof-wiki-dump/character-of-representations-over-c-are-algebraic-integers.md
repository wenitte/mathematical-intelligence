theorem Characters_Are_Algebraic_Integers() {
  assert(
    ∀G(isFiniteGroup(G) ∧
    ∀χ(isCharacter(χ, G) ∧
    ∀g ∈ G ⇒ isAlgebraicInteger(χ(g))))
  )
} ↔

proof Characters_Are_Algebraic_Integers() {
  setVar(G: FiniteGroup) →
  setVar(χ: Character(G)) →
  setVar(V, ρ: CModule(G)) →
  setVar(g: G) →

  assert(χ(g) = Tr(ρ_g)) →
  
  lemma Eigenvalues_Properties() {
    assert(
      ∀λ(isEigenvalue(λ, ρ_g) ⇒ 
      (isRootOfUnity(λ, |g|) ∧
      satisfies(λ, x^|g| - 1) ∧
      isAlgebraicInteger(λ)))
    )
  } →

  apply(Eigenvalues_Properties()) →
  
  lemma Sum_Of_Algebraic_Integers() {
    assert(
      ∀S(isFiniteSet(S) ∧ 
      ∀x∈S(isAlgebraicInteger(x)) ⇒
      isAlgebraicInteger(∑S))
    )
  } →

  assert(χ(g) = ∑{λ: isEigenvalue(λ, ρ_g)}) →
  apply(Sum_Of_Algebraic_Integers()) →
  assert(isAlgebraicInteger(χ(g)))
}