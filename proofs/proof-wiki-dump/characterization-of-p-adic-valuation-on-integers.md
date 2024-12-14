theorem PadicValuationCharacterization() {
  assert(
    ∀p ∈ ℙ,
    ∀n ∈ ℤ\{0},
    let νₚ: ℤ → ℕ ∪ {+∞} →
    ∃!r ∈ ℕ: (∃k ∈ ℤ: n = pʳk ∧ p ∤ k)
  )
} ↔

proof PadicValuationCharacterization() {
  // Uniqueness part
  lemma Uniqueness() {
    setVar(r₁,r₂: ℕ) →
    assume(∃k₁ ∈ ℤ: n = pʳ¹k₁ ∧ p ∤ k₁) →
    assume(∃k₂ ∈ ℤ: n = pʳ²k₂ ∧ p ∤ k₂) →
    assume(r₁ ≥ r₂) →
    assert(pʳ¹k₁ = pʳ²k₂) →
    assert(pʳ²(pʳ¹⁻ʳ²k₁ - k₂) = 0) →
    assert(pʳ¹⁻ʳ²k₁ = k₂) →
    assert(p ∤ k₂) →
    conclude(r₁ - r₂ = 0)
  } →

  // Existence part
  setVar(n: ℤ\{0}) →
  let S = {v ∈ ℕ: pᵛ|n} →
  assert(0 ∈ S) →
  assert(S ⊆ [0,⌊log_p(n)⌋]) →
  assert(S is finite and non-empty) →
  assert(νₚ(n) = sup(S)) →
  assert(νₚ(n) ∈ S) →
  assert(∀v > νₚ(n): v ∉ S) →
  assert(p^νₚ(n)|n) →
  assert(p^(νₚ(n)+1) ∤ n) →
  let k = n/p^νₚ(n) →
  assert(n = p^νₚ(n)k) →
  assert(p ∤ k)
}