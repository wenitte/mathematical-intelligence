theorem IsAlgebraicNumber_NegativeSeven() {
  assert(
    -7 ∈ 𝔸  // where 𝔸 is the set of algebraic numbers
  )
} ↔

proof IsAlgebraicNumber_NegativeSeven() {
  setVar(p(x): x + 7) →
  assert(p(x) ∈ ℤ[x]) →  // polynomial with integer coefficients
  assert(p(-7) = 0) →     // -7 is a root of p(x)
  lemma AlgebraicNumberDefinition() {
    assert(
      ∀n ∈ ℂ: (∃q(x) ∈ ℤ[x]: q(n) = 0) → n ∈ 𝔸
    )
  } →
  apply(AlgebraicNumberDefinition()) →
  assert(-7 ∈ 𝔸)
}