theorem Closure_Of_Subalgebra_Is_Subalgebra() {
  assert(
    let(GF ∈ {ℝ, ℂ}) ∧
    let(A: NormedAlgebra[GF]) ∧
    let(B ⊆ A | isSubalgebra(B, A)) →
    isSubalgebra(B⁻, A)
  )
} ↔

proof Closure_Of_Subalgebra_Is_Subalgebra() {
  apply(Closure_Of_Subspace_Is_Subspace()) →
  assert(isVectorSubspace(B⁻, A)) →
  
  setVar(x, y ∈ B⁻) →
  
  lemma Sequence_Existence() {
    assert(∃{xₙ}_{n∈ℕ}, {yₙ}_{n∈ℕ} ⊆ B |
      (xₙ → x) ∧ (yₙ → y)
    )
  } →
  
  apply(Product_Rule_For_Sequence()) →
  assert((xₙ → x) ∧ (yₙ → y) → (xₙyₙ → xy)) →
  
  apply(Definition_Of_Closure()) →
  assert(xy ∈ B⁻) →
  
  assert(
    isVectorSubspace(B⁻, A) ∧
    ∀a,b ∈ B⁻ → (ab ∈ B⁻)
  ) →
  
  conclude(isSubalgebra(B⁻, A))
}