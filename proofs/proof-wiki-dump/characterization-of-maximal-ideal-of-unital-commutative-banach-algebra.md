theorem MaximalIdealChar() {
  assert(
    let A: BanachAlgebra(commutative, unital, ℂ) ∧
    let M ⊆ A →
    M.isMaximal() ↔ (∃φ: Character(A) → M = ker(φ))
  )
}

proof MaximalIdealChar() {
  // Forward direction
  lemma NecessaryCondition() {
    assert(
      M.isMaximal() → ∃φ: Character(A) → M = ker(φ)
    ) →
    refer(MaximalIdealIsKernel())
  } →

  // Reverse direction
  lemma SufficientCondition() {
    assert(
      ∃φ: Character(A) → M = ker(φ) → M.isMaximal()
    ) →
    refer(KernelIsMaximalIdeal())
  } →

  // Combine both directions
  assert(
    NecessaryCondition() ∧ SufficientCondition() →
    M.isMaximal() ↔ (∃φ: Character(A) → M = ker(φ))
  )
}