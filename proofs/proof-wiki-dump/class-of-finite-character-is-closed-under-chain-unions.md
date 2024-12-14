theorem FiniteCharacterClassChainUnion() {
  assert(
    ∀A(FiniteCharacter(A) → ClosedUnderChainUnions(A))
  )
} ↔

proof FiniteCharacterClassChainUnion() {
  setVar(A: Class, C: Chain) →
  assume(FiniteCharacter(A) ∧ C ⊆ A) →
  assert(∀F(F ⊆ ⋃C ∧ Finite(F) → ∃c ∈ C(F ⊆ c))) →
  
  lemma FiniteSubsetInA() {
    setVar(y₁,...,yₙ: Element) →
    assume({y₁,...,yₙ} ⊆ ⋃C) →
    assert(∀i ≤ n ∃cᵢ ∈ C(yᵢ ∈ cᵢ)) →
    setVar(c: Element) →
    assert(c = max({c₁,...,cₙ}, ⊆)) →
    assert(∀i ≤ n(yᵢ ∈ c)) →
    conclude({y₁,...,yₙ} ⊆ c ∧ c ∈ A)
  } →

  apply(FiniteSubsetInA()) →
  apply(FiniteCharacterSwelled) →
  assert(∀F(F ⊆ ⋃C ∧ Finite(F) → F ∈ A)) →
  apply(FiniteCharacter(A)) →
  conclude(⋃C ∈ A)
}