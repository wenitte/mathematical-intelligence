theorem Complex_Plane_Is_Banach_Space() {
  assert(
    ∃(C, |·|) | (C: VectorSpace(C)) ∧ (|·|: C → ℝ) ∧ isBanachSpace(C, |·|)
  )
} ↔

proof Complex_Plane_Is_Banach_Space() {
  assert(C: VectorSpace(C)) →
  
  lemma Complex_Modulus_Is_Norm() {
    assert(
      ∀z ∈ C ⇒ (
        |z| ≥ 0 ∧
        |z| = 0 ↔ z = 0 ∧
        ∀α ∈ C ⇒ |αz| = |α||z| ∧
        ∀w ∈ C ⇒ |z + w| ≤ |z| + |w|
      )
    )
  } →
  
  lemma Complex_Plane_Is_Complete() {
    assert(
      ∀(zₙ)ₙ∈ℕ ∈ C | isCauchy(zₙ) ⇒ ∃z ∈ C | limₙ→∞ zₙ = z
    )
  } →
  
  apply(Complex_Modulus_Is_Norm()) →
  apply(Complex_Plane_Is_Complete()) →
  
  assert(isBanachSpace(C, |·|))
}