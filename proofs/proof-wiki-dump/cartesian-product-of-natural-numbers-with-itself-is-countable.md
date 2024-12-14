theorem CartesianProductNaturalNumbersCountable() {
  assert(
    ℕ × ℕ ∈ Countable
  )
} ↔

proof CartesianProductNaturalNumbersCountable() {
  lemma CartesianProductCountableSetsCountable() {
    assert(
      ∀A,B ∈ Countable ⇒ (A × B) ∈ Countable
    )
  } →
  setVar(A: ℕ, B: ℕ) →
  assert(A ∈ Countable ∧ B ∈ Countable) →
  apply(CartesianProductCountableSetsCountable()) →
  assert(A × B ∈ Countable)
}