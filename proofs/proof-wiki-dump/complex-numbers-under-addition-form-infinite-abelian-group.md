theorem Complex_Numbers_Addition_Group() {
  assert(
    ∀C[Complex Numbers] → 
    isInfiniteAbelianGroup(⟨C,+⟩)
  )
} ↔

proof Complex_Numbers_Addition_Group() {
  reference(Complex_Numbers_Under_Addition_form_Group) →
  assert(isGroup(⟨C,+⟩)) ∧

  lemma Complex_Addition_Commutative() {
    assert(
      ∀z₁,z₂ ∈ C → z₁ + z₂ = z₂ + z₁
    )
  } →

  lemma Complex_Numbers_Uncountable() {
    assert(
      ¬∃f:ℕ→C[bijective]
    )
  } →

  apply(Complex_Addition_Commutative()) ∧
  apply(Complex_Numbers_Uncountable()) →
  
  assert(
    isGroup(⟨C,+⟩) ∧
    isCommutative(⟨C,+⟩) ∧
    isUncountable(C)
  ) →
  
  conclude(isInfiniteAbelianGroup(⟨C,+⟩))
}