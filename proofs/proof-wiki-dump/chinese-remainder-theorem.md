theorem ChineseRemainderTheorem() {
  input(b[1..r]: ℤ, n[1..r]: ℤ₊) →
  assert(
    ∀i,j ∈ [1..r], i≠j ⇒ gcd(n[i],n[j]) = 1
  ) →
  let(N = ∏ᵢ₌₁ʳ n[i]) →
  assert(
    ∃!x ∈ ℤ : (
      ∧ᵢ₌₁ʳ (x ≡ b[i] (mod n[i]))
    ) ∧ 
    (x is unique mod N)
  )
}

proof ChineseRemainderTheorem() {
  // Existence part
  let(N[k] = N/n[k] for k ∈ [1..r]) →
  
  lemma CoprimeDivisors() {
    assert(∀k ∈ [1..r]: gcd(N[k],n[k]) = 1)
  } →

  // Find solutions to individual congruences
  ∀k ∈ [1..r]: {
    assert(∃x[k]: N[k]×x[k] ≡ b[k] (mod n[k])) by SolutionLinearCongruence()
  } →

  // Construct solution
  let(x₀ = ∑ᵢ₌₁ʳ (N[i]×x[i])) →
  
  // Verify solution
  ∀k ∈ [1..r]: {
    assert(n[k]|N[i] for i≠k) by EuclidLemma() →
    assert(N[i]×x[i] ≡ 0 (mod n[k]) for i≠k) →
    assert(x₀ ≡ N[k]×x[k] ≡ b[k] (mod n[k]))
  } →

  // Uniqueness part
  ∀x' solution: {
    assert(x' ≡ x₀ (mod n[k]) ∀k ∈ [1..r]) →
    assert(n[k]|(x'-x₀) ∀k ∈ [1..r]) →
    assert(N|(x'-x₀)) by AllFactorsDivide() →
    assert(x' ≡ x₀ (mod N))
  }
}

lemma ConstructSolution() {
  input(b[1..r]: ℤ, n[1..r]: ℤ₊) →
  ∀i ∈ [1..r]: {
    let(y[i] = N/n[i]) →
    let(z[i] where z[i]×y[i] ≡ 1 (mod n[i])) by EuclidAlgorithm() →
    assert(x ≡ ∑ᵢ₌₁ʳ (b[i]×y[i]×z[i]) (mod N))
  }
}