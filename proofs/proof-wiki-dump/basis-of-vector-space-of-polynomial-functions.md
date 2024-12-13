theorem Polynomial_Function_Basis() {
  assert(
    let B = {Iⁿ | n ∈ ℕ*} where Iⁿ(x) = xⁿ ∧
    B is_basis_of ℙ(ℝ)
  )
} ↔

proof Polynomial_Function_Basis() {
  // Step 1: Spanning property
  assert(∀p ∈ ℙ(ℝ) ∃{αₖ}ₖ₌₀ᵐ ∈ ℝ: p = ∑ₖ₌₀ᵐ αₖIᵏ) →

  // Step 2: Linear independence by contradiction
  setVar(m ∈ ℕ) →
  assume(∃{αₖ}ₖ₌₀ᵐ ∈ ℝ: ∑ₖ₌₀ᵐ αₖIᵏ = 0 ∧ αₘ ≠ 0) →
  
  lemma Nth_Derivative_Power() {
    assert(
      dᵐ/dxᵐ(∑ₖ₌₀ᵐ αₖxᵏ) = m!αₘ
    )
  } →
  
  apply(Nth_Derivative_Power()) →
  assert(m!αₘ = 0) →
  assert(αₘ = 0) →
  assert(contradiction(αₘ ≠ 0 ∧ αₘ = 0)) →
  
  // Step 3: Conclusion
  assert(B is_linearly_independent) →
  assert(B is_spanning_set) →
  conclude(B is_basis_of ℙ(ℝ))
}