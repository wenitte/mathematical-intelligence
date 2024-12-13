theorem Basis_Expansion_3_Quarters() {
  assert(
    ∃x ∈ ℚ: (x = 3/4) ⇒ (x = 0.75)
  )
} ↔

proof Basis_Expansion_3_Quarters() {
  setVar(x: ℚ = 3/4) →
  assert(0.75 = 7 × 10^(-1) + 5 × 10^(-2)) →
  assert(7 × 10^(-1) + 5 × 10^(-2) = (70 + 5)/10^2) →
  assert((70 + 5)/10^2 = 75/100) →
  assert(75/100 = (3 × 25)/(4 × 25)) →
  assert((3 × 25)/(4 × 25) = 3/4) →
  conclude(0.75 = 3/4)
}