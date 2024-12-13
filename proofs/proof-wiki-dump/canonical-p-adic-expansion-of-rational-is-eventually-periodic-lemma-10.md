theorem PadicExpansionLemma() {
  input(
    p: Prime,
    b: ℤ₊,
    {dₙ}: Sequence(PadicDigits),
    {rₙ}: Sequence(ℤ),
    coprime(p, b)
  )
  assert(
    (∀n ∈ ℕ: rₙ = dₙ₊₁b + prₙ₊₁) ∧
    (∃n₀ ∈ ℕ: ∀n ≥ n₀: -b ≤ rₙ ≤ 0) ∧
    (n,k ∈ ℕ: k > 0: rₙ = rₙ₊ₖ) →
    (dₙ₊₁ = dₙ₊ₖ₊₁ ∧ rₙ₊₁ = rₙ₊ₖ₊₁)
  )
} ↔

proof PadicExpansionLemma() {
  setVar(n,k: ℕ, k > 0) →
  assert(rₙ = dₙ₊₁b + prₙ₊₁) →
  assert(rₙ = rₙ₊ₖ) →
  assert(rₙ₊ₖ = dₙ₊ₖ₊₁b + prₙ₊ₖ₊₁) →
  assert(p(rₙ₊ₖ₊₁ - rₙ₊₁) = (dₙ₊₁ - dₙ₊ₖ₊₁)b) →

  lemma CoprimeDivision() {
    assert(coprime(p,b) → p∤b) →
    apply(EuclidsLemma()) →
    assert(p|(dₙ₊₁ - dₙ₊ₖ₊₁))
  } →

  lemma PadicDigitRange() {
    assert(dₙ₊₁,dₙ₊ₖ₊₁ ∈ {0,1,...,p-1}) →
    assert(dₙ₊₁ = dₙ₊ₖ₊₁)
  } →

  assert(p(rₙ₊ₖ₊₁ - rₙ₊₁) = 0) →
  assert(p ≠ 0) →
  assert(rₙ₊ₖ₊₁ - rₙ₊₁ = 0) →
  assert(rₙ₊₁ = rₙ₊ₖ₊₁)
}