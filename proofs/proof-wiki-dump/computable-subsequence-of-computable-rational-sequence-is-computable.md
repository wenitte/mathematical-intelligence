theorem ComputableSubsequence() {
  assert(
    ∀(xₙ: ℚ-sequence)(φ: ℕ→ℕ) ⇒ 
    (isComputable(xₙ) ∧ isTotalRecursive(φ)) →
    isComputable(xᵩ(ₙ))
  )
} ↔

proof ComputableSubsequence() {
  setVar(xₙ: ℚ-sequence, φ: ℕ→ℕ) →
  assume(isComputable(xₙ) ∧ isTotalRecursive(φ)) →
  
  lemma ComputabilityDefinition() {
    assert(∃(N,D: ℕ→ℕ)(
      isTotalRecursive(N) ∧ isTotalRecursive(D) ∧
      ∀n∈ℕ: xₙ = kₙ/(D(n)+1) where kₙ = decode(N(n))
    ))
  } →
  
  define(N': ℕ→ℕ, n ↦ N(φ(n))) →
  define(D': ℕ→ℕ, n ↦ D(φ(n))) →
  
  assert(
    isTotalRecursive(N') ∧ isTotalRecursive(D') by CompositionOfRecursive()
  ) →
  
  assert(∀n∈ℕ:
    xᵩ(ₙ) = kᵩ(ₙ)/(D(φ(n))+1) by ComputabilityDefinition()
  ) →
  
  assert(∀n∈ℕ:
    xᵩ(ₙ) = k'ₙ/(D'(n)+1) where k'ₙ = decode(N'(n))
  ) →
  
  conclude(isComputable(xᵩ(ₙ)))
}

theorem ComputableSubsequenceCorollary() {
  assert(
    ∀(xₖ: ℚ-sequence)(φ: ℕ²→ℕ)(π: ℕ²→ℕ) ⇒
    (isComputable(xₖ) ∧ isTotalRecursive(φ) ∧ isCartorPairing(π)) →
    ∃(yₖ: ℚ-sequence)(
      isComputable(yₖ) ∧
      ∀n,m∈ℕ: yₚᵢ(ₙ,ₘ) = xᵩ(ₙ,ₘ)
    )
  )
}