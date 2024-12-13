theorem AffineGroup1D_Is_Group() {
  let Af₁(ℝ): AffineGroup
  assert(
    IsGroup(Af₁(ℝ))
  )
} ↔

proof AffineGroup1D_Is_Group() {
  lemma Af1_As_Semidirect() {
    assert(
      Af₁(ℝ) ≅ ℝ ⋊ ℝ*
    )
  } →
  lemma Semidirect_Is_Group() {
    assert(
      ∀G,H: Group ⇒ IsGroup(G ⋊ H)
    )
  } →
  apply(Af1_As_Semidirect()) →
  apply(Semidirect_Is_Group()) →
  assert(IsGroup(Af₁(ℝ)))
}