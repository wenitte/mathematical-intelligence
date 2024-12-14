theorem Terminal_Padic_Expansion_Necessary() {
  assert(
    ∀x ∈ ℚ_p, ∀p ∈ ℙ ⇒
    (x has_terminating_padic_expansion) →
    ∃a ∈ ℕ, ∃k ∈ ℤ : x = a/(p^k)
  )
}

proof Terminal_Padic_Expansion_Necessary() {
  setVar(x: ℚ_p) →
  setVar(p: ℙ) →
  
  assert(x = ∑_{n=m}^∞ d_n p^n) ∧
  assert(m ∈ ℤ_≤0) ∧
  assert(∀n ≥ m: d_n is_padic_digit) ∧
  assert(m < 0 → d_m ≠ 0) →

  lemma Termination_Property() {
    assert(∃n_0 ∈ ℕ: n_0 ≥ m ∧ ∀n ≥ n_0: d_n = 0)
  } →

  apply(Termination_Property()) →
  
  assert(x = ∑_{n=m}^{n_0} d_n p^n) →
  assert(x = p^m(∑_{n=m}^{n_0} d_n p^{n-m})) →
  assert(x = p^m(∑_{n=0}^{n_0-m} d_{n+m} p^n)) →

  setVar(k: -m) →
  setVar(a: ∑_{n=0}^{n_0-m} d_{n+m} p^n) →
  
  assert(x = a/(p^k)) →
  assert(a ∈ ℕ ∧ k ∈ ℤ) →
  conclude(∃a ∈ ℕ, ∃k ∈ ℤ: x = a/(p^k))
}