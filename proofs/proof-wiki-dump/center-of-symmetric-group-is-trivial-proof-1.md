theorem Center_Symmetric_Group_Trivial() {
  assert(
    ∀n ∈ ℕ ∧ n ≥ 3 ⇒ Z(Sₙ) = {e}
  )
} ↔

proof Center_Symmetric_Group_Trivial() {
  setVar(n: ℕ, n ≥ 3) →
  assert(e ∈ Z(Sₙ)) →
  assert(Z(Sₙ) = {τ ∈ Sₙ : ∀σ ∈ Sₙ, τσ = στ}) →
  
  lemma NonIdentity_Not_Central() {
    setVar(π ∈ Sₙ: π ≠ e) →
    setVar(i,j ∈ ℕₙ: π(i) = j ∧ i ≠ j) →
    setVar(k ∈ ℕₙ: k ≠ i ∧ k ≠ j) →
    setVar(ρ ∈ Sₙ: ρ swaps j,k ∧ fixes(ρ,i)) →
    
    assert(ρπρ⁻¹(i) = ρπ(i)) →
    assert(ρπ(i) = ρ(j)) →
    assert(ρ(j) = k) →
    assert(ρπρ⁻¹(i) = k ≠ j = π(i)) →
    
    lemma Conjugate_Commuting() {
      assert(
        ∀g,h ∈ G: gh = hg ⇒ ghg⁻¹ = h
      )
    } →
    
    apply(Conjugate_Commuting()) →
    assert(π ∉ Z(Sₙ))
  } →
  
  apply(NonIdentity_Not_Central()) →
  assert(Z(Sₙ) = {e})
}