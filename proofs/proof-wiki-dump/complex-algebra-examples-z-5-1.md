theorem ComplexFactorization() {
  assert(
    ∀z ∈ ℂ ⇒ 
    z^5 + 1 = (z + 1)(z^2 - 2z cos(π/5) + 1)(z^2 - 2z cos(3π/5) + 1)
  )
} ↔

proof ComplexFactorization() {
  setVar(z: ℂ) →
  lemma GeneralFactorization() {
    assert(
      ∀n ∈ ℕ, ∀z ∈ ℂ ⇒
      z^(2n+1) + 1 = (z + 1)∏_{k=0}^{n-1}(z^2 - 2z cos((2k+1)π/(2n+1)) + 1)
    )
  } →
  apply(GeneralFactorization(), n = 2) →
  assert(
    z^5 + 1 = (z + 1)∏_{k=0}^1(z^2 - 2z cos((2k+1)π/5) + 1)
  ) →
  compute(
    ∏_{k=0}^1(z^2 - 2z cos((2k+1)π/5) + 1) =
    (z^2 - 2z cos(π/5) + 1)(z^2 - 2z cos(3π/5) + 1)
  ) →
  assert(
    z^5 + 1 = (z + 1)(z^2 - 2z cos(π/5) + 1)(z^2 - 2z cos(3π/5) + 1)
  )
}