theorem Complex_Conjugate_Difference() {
  assert(
    ∀z₁,z₂ ∈ ℂ ⇒ [
      (z₁ = 4 - 3i ∧ z₂ = -1 + 2i) ⇒
      (conj(z₁) - conj(z₂) = 5 + 5i)
    ]
  )
} ↔

proof Complex_Conjugate_Difference() {
  setVar(z₁: ℂ = 4 - 3i) →
  setVar(z₂: ℂ = -1 + 2i) →
  assert(conj(z₁) = 4 + 3i) →
  assert(conj(z₂) = -1 - 2i) →
  compute(conj(z₁) - conj(z₂)) {
    conj(z₁) - conj(z₂)
    = (4 + 3i) - (-1 - 2i)
    = 4 + 3i + 1 + 2i
    = (4 + 1) + (3 + 2)i
    = 5 + 5i
  } →
  conclude(conj(z₁) - conj(z₂) = 5 + 5i)
}