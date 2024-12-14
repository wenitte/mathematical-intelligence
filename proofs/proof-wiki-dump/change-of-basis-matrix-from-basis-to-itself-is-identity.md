theorem Change_Of_Basis_Matrix_To_Self_Is_Identity() {
  declare(R: Ring) ∧
  assert(R.hasUnity()) ∧
  declare(M: Module) ∧
  assert(M.isFreeModule() ∧ M.over(R)) ∧
  declare(n: ℕ) ∧
  assert(n > 0 ∧ M.dim() = n) ∧
  declare(𝔹: OrderedBasis) ∧
  assert(𝔹.isOrderedBasisOf(M)) →
  assert(
    M_𝔹_𝔹 = I_n
  )
} ↔

proof Change_Of_Basis_Matrix_To_Self_Is_Identity() {
  lemma Change_Of_Basis_Definition() {
    assert(
      ∀v ∈ M →
      [v]_𝔹 = M_𝔹_𝔹[v]_𝔹
    )
  } →
  apply(Change_Of_Basis_Definition()) →
  assert([v]_𝔹 = I_n[v]_𝔹) →
  assert(M_𝔹_𝔹 = I_n)
}