theorem Padic_Unit_Square_Root() {
  assert(
    ∀p ∈ ℙ\{2}, ∀u ∈ Zp× (
      (∃y ∈ Zp: y² ≡ u (mod pZp)) →
      (∃x ∈ Zp×: x² = u)
    )
  )
}

proof Padic_Unit_Square_Root() {
  setVar(p: ℙ\{2}, u: Zp×) →
  assume(∃y ∈ Zp: y² ≡ u (mod pZp)) →
  
  lemma Padic_Expansion() {
    assert(y = y₀ + y₁p + y₂p² + y₃p³ + ...) ∧
    assert(y₀ ∈ {1,...,p-1}) →
    assert(p ∤ y₀)
  } →
  
  lemma Partial_Sum_Congruence() {
    assert(y ≡ y₀ (mod pZp)) →
    assert(y₀² ≡ y² ≡ u (mod pZp))
  } →
  
  setVar(F: Z[X], F(X) = X² - u) →
  setVar(F': Z[X], F'(X) = 2X) →
  
  assert(F(y₀) ≡ 0 (mod p)) ∧
  assert(F'(y₀) = 2y₀) →
  
  lemma Prime_NonDivisor() {
    assert(p ∤ 2) ∧
    assert(p ∤ y₀) →
    assert(p ∤ 2y₀) →
    assert(F'(y₀) ≢ 0 (mod p))
  } →
  
  apply(Hensels_Lemma) {
    assert(F(y₀) ≡ 0 (mod pZ)) ∧
    assert(F'(y₀) ≢ 0 (mod pZ)) →
    assert(∃x ∈ Zp: F(x) = 0)
  } →
  
  lemma Unit_Norm() {
    assert(‖x‖p² = ‖x²‖p) →
    assert(‖x²‖p = ‖u‖p = 1) →
    assert(‖x‖p = 1) →
    assert(x ∈ Zp×)
  } →
  
  conclude(∃x ∈ Zp×: x² = u)
}