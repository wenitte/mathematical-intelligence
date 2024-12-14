theorem ClosureFiniteRelationsOperations() {
  assert(
    ∀R₁...Rₙ: Relations ∧
    ∀S₁...Sₘ: Operations ∧
    ∀T: SmallClass ∧
    (∀x: SmallClass → ∀i∈[1,n]: Image(Rᵢ,x)∈SmallClass) ∧
    (∀x: SmallClass → ∀i∈[1,m]: Image(Sᵢ,x×x)∈SmallClass) →
    ∃X: SmallClass | (
      T ⊆ X ∧
      (∀i: Rᵢ.isClosedOn(X) ∧ Sᵢ.isClosedOn(X×X)) ∧
      ∀Y: (T⊆Y ∧ isClosedOn(Y) → X⊆Y)
    )
  )
} ↔

proof ClosureFiniteRelationsOperations() {
  define(G(x) ≔ x ∪ ⋃ᵢ₌₁ⁿ Rᵢ[x] ∪ ⋃ᵢ₌₁ᵐ Sᵢ[x]) →
  define(F: ℕ→SmallClass, {
    F(0) = T,
    F(n+1) = G(F(n))
  }) →
  define(X ≔ ⋃ₙ∈ω F(n)) →

  lemma SubsetProof() {
    assert(T = F(0)) →
    assert(F(0) ⊆ ⋃ₙ∈ω F(n)) →
    assert(T ⊆ X)
  } →

  lemma ClosureProof() {
    ∀i,x,y: (xRᵢy ∧ x∈F(n) → y∈F(n+1)) →
    ∀i,x,y,z: ((xSᵢy=z ∧ x,y∈F(n)) → z∈F(n+1)) →
    assert(∀i: Rᵢ.isClosedOn(X) ∧ Sᵢ.isClosedOn(X×X))
  } →

  lemma SmallestClosureProof() {
    ∀n∈ω: induct(P(n) ≔ F(n)⊆Y) {
      base: assert(F(0)⊆Y),
      step: assert(
        F(k)⊆Y →
        Rᵢ[F(k)]⊆Y ∧ Sᵢ[F(k)×F(k)]⊆Y →
        G(F(k))⊆Y →
        F(k+1)⊆Y
      )
    } →
    assert(∀n∈ω: F(n)⊆Y) →
    assert(X⊆Y)
  } →

  apply(SubsetProof()) →
  apply(ClosureProof()) →
  apply(SmallestClosureProof()) →
  assert(conclusion)
}