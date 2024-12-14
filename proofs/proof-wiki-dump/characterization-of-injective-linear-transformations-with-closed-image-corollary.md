theorem InjectiveLinearTransformCharacterization() {
  assert(
    ∀X,Y: BanachSpace, ∀T: LinearTransformation(X → Y) →
    (isInjective(T) ∧ isClosed(Img(T))) ↔
    ¬(∃{xₙ}ₙ∈ℕ: Sequence(X) | (∀n∈ℕ: ‖xₙ‖ = 1) ∧ lim(Txₙ) = 0Y)
  )
}

proof InjectiveLinearTransformCharacterization() {
  // Proof by Contraposition
  lemma SufficientCondition() {
    assert(¬(isInjective(T) ∧ isClosed(Img(T)))) →
    apply(CharacterizationTheorem()) →
    assert(¬(∃c>0: ∀x∈X: ‖Tx‖Y ≥ c‖x‖X)) →
    setVar(n: ℕ) →
    assert(∃uₙ∈X: ‖Tuₙ‖Y < n⁻¹‖uₙ‖X) →
    assert(‖uₙ‖X > 0) →
    setVar(xₙ = uₙ/‖uₙ‖X) →
    assert(‖Txₙ‖Y < n⁻¹) →
    assert(‖xₙ‖X = 1) →
    assert(lim(Txₙ) = 0Y)
  }

  lemma NecessaryCondition() {
    assert(∃{xₙ}ₙ∈ℕ: (∀n∈ℕ: ‖xₙ‖ = 1) ∧ lim(Txₙ) = 0Y) →
    assume(∃c>0: ∀x∈X: ‖Tx‖Y ≥ c‖x‖X) →
    assert(∀n∈ℕ: ‖Txₙ‖Y ≥ c‖xₙ‖X = c) →
    assert(lim(‖Txₙ‖Y) = 0) →
    derive(contradiction()) →
    apply(CharacterizationTheorem()) →
    assert(¬(isInjective(T) ∧ isClosed(Img(T))))
  }

  apply(SufficientCondition()) ∧
  apply(NecessaryCondition()) →
  assert(biconditionalProven())
}