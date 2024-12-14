theorem ClosedBallPAdicNumber() {
  assert(
    ∀p∈ℙ, 
    ∀a∈ℚp, 
    ∀n∈ℤ ⇒
    B⁻p^(-n)(a) = a + p^n·ℤp
  )
  where(
    B⁻ε(a) := {x∈ℚp : ||x-a||p ≤ ε}
  )
} ↔

proof ClosedBallPAdicNumber() {
  setVar(n: ℤ) →
  assert(
    x ∈ B⁻p^(-n)(a) ↔ ||x-a||p ≤ p^(-n)
  ) →
  assert(
    ||x-a||p ≤ p^(-n) ↔ p^n·||x-a||p ≤ 1
  ) →
  assert(
    p^n·||x-a||p ≤ 1 ↔ ||p^(-n)||p·||x-a||p ≤ 1
  ) →
  lemma NonArchimedeanNorm() {
    assert(||p^(-n)(x-a)||p = ||p^(-n)||p·||x-a||p)
  } →
  apply(NonArchimedeanNorm()) →
  assert(
    ||p^(-n)(x-a)||p ≤ 1 ↔ p^(-n)(x-a) ∈ ℤp
  ) →
  assert(
    p^(-n)(x-a) ∈ ℤp ↔ x-a ∈ p^n·ℤp
  ) →
  assert(
    x-a ∈ p^n·ℤp ↔ x ∈ a + p^n·ℤp
  ) →
  conclude(
    B⁻p^(-n)(a) = a + p^n·ℤp
  )
}