theorem CanonicalPadicExpansionPeriodic() {
  assert(
    ∀x ∈ ℚ, ∀p ∈ ℙ ⇒
    let(ℚ_p: p-adic_numbers, ∥·∥_p: p-adic_norm) ⇒
    CanonicalExpansion(x, p) is_eventually_periodic
  )
}

proof CanonicalPadicExpansionPeriodic() {
  setVar(x: ℚ, p: ℙ) →
  let(expansion: (...d_n...d_2d_1d_0.d_{-1}d_{-2}...d_{-m})) →
  
  let(y: p-adic_number) where {
    y = (...d_n...d_2d_1d_0)
  } →
  
  assert(y = x - ∑_{i=-m}^{-1} d_i p^i) →
  assert(y ∈ ℚ ∧ y is_p-adic_integer) →
  
  setVar(a: ℤ, b: ℤ_{>0}) where {
    y = a/b ∧ gcd(a,b) = 1
  } →
  
  apply(CharacterizationRationalPadicInteger()) →
  assert(p ∤ b) →
  
  apply(PrimeNotDivisorImpliesCoprime()) →
  assert(gcd(b,p) = 1) →
  
  lemma L1() {
    assert(
      ∀n ∈ ℕ ∃r_n ∈ ℤ:
      (a/b - (p^{n+1}r_n)/b) ∈ {0,1,...,p^{n+1}-1}
    )
  } →
  
  lemma L2() {
    assert(
      ∃n_0 ∈ ℕ ∀n ≥ n_0:
      -b ≤ r_n ≤ 0
    )
  } →
  
  setVar(A_n) where {
    A_n = a/b - (p^{n+1}r_n)/b
  } →
  
  assert(∀n ∈ ℕ: A_n ∈ ℕ ∧ 0 ≤ A_n ≤ p^{n+1}-1) →
  
  lemma L3() {
    assert(lim_{n→∞} A_n = a/b)
  } →
  
  lemma L4() {
    assert(∀n ∈ ℕ: r_n = d_{n+1}b + pr_{n+1})
  } →
  
  lemma L5() {
    assert(
      ∃m,l ∈ ℕ ∀n ≥ m:
      r_n = r_{n+l} ∧ d_n = d_{n+l}
    )
  } →
  
  apply(L5()) →
  assert((...d_n...d_2d_1d_0) is_eventually_periodic)
}