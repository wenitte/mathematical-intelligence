theorem CantorDiagonal() {
  let(S: Set, ℱ: Set) →
  assert(
    (card(S) > 1) ∧
    (ℱ = {f | f: ℕ → S}) →
    isUncountablyInfinite(ℱ)
  )
}

proof CantorDiagonal() {
  // First establish existence of distinct elements
  setVar(S: Set) →
  assert(∃a,b ∈ S: a ≠ b) →

  // Prove ℱ is infinite
  lemma InfiniteMapping() {
    setVar(m: ℕ) →
    define(φₘ(n) = {
      a if n ≠ m
      b if n = m
    }) →
    assert(∀m₁,m₂ ∈ ℕ: m₁ ≠ m₂ → φₘ₁ ≠ φₘ₂) →
    define(Ψ(n) = φₙ) →
    assert(isInjective(Ψ: ℕ → ℱ))
  } →
  apply(InfiniteMapping()) →
  assert(isInfinite(ℱ)) →

  // Prove ℱ is uncountable
  lemma DiagonalArgument() {
    setVar(Φ: ℕ → ℱ) →
    define(fₙ = Φ(n)) →
    define(g(n) = {
      a if fₙ(n) ≠ a
      b if fₙ(n) = a
    }) →
    assert(g ∈ ℱ) →
    assert(∀n ∈ ℕ: g(n) ≠ fₙ(n)) →
    assert(¬isSurjective(Φ)) →
    assert(¬isBijective(Φ))
  } →
  apply(DiagonalArgument()) →
  assert(∀Φ: ℕ → ℱ: ¬isBijective(Φ)) →
  assert(isUncountablyInfinite(ℱ))
}

corollary CantorDiagonalIntegers() {
  let(S: Set, 𝔾: Set) →
  assert(
    (card(S) > 1) ∧
    (𝔾 = {f | f: ℤ → S}) →
    isUncountablyInfinite(𝔾)
  )
}