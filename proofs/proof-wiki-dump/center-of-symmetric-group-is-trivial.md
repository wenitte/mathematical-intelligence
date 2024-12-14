theorem Center_Symmetric_Group_Trivial() {
  assert(
    ∀n ∈ ℕ, n ≥ 3 ⇒ Z(Sₙ) = {e}
  )
} ↔

proof Center_Symmetric_Group_Trivial() {
  setVar(n: ℕ, n ≥ 3) →
  assert(e ∈ Z(Sₙ)) →
  assert(Z(Sₙ) = {τ ∈ Sₙ | ∀σ ∈ Sₙ: τσ = στ}) →
  
  lemma NonIdentity_Not_Central() {
    setVar(π: Sₙ, π ≠ e) →
    setVar(i,j: ℕ, π(i) = j ∧ i ≠ j) →
    setVar(k: ℕ, k ≠ i ∧ k ≠ j) →
    setVar(ρ: Sₙ) →
    assert(ρ swaps j,k ∧ ∀x ∉ {j,k}: ρ(x) = x) →
    assert(ρ⁻¹(i) = i) →
    
    calc {
      (ρπρ⁻¹)(i)
      = (ρπ)(i)    // ρ⁻¹(i) = i
      = ρ(j)       // π(i) = j
      = k          // ρ swaps j,k
    } →
    
    assert(k ≠ j = π(i)) →
    assert(ρπρ⁻¹ ≠ π) →
    assert(π ∉ Z(Sₙ))
  } →
  
  apply(NonIdentity_Not_Central()) →
  assert(∀π ∈ Sₙ: π ≠ e ⇒ π ∉ Z(Sₙ)) →
  assert(Z(Sₙ) = {e})
}