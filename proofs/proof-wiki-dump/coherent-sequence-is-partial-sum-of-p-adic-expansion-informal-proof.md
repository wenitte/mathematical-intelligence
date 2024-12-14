theorem Coherent_Sequence_Padic_Expansion() {
  setVar(p: Prime) ∧
  setVar(α_n: Sequence) ∧
  assert(coherent(α_n)) →
  assert(∃!(Σ_{n=0}^∞ d_n p^n) ∧
         ∀n∈ℕ: α_n = Σ_{i=0}^n d_i p^i)
} ↔

proof Coherent_Sequence_Padic_Expansion() {
  setVar(α_n: Sequence) →
  assert(base_p_representation(α_n)) →
  
  lemma Coherence_Condition() {
    assert(∀n∈ℕ: α_{n+1} ≡ α_n (mod p^{n+1})) →
    assert(last_n_digits(α_{n+1}, n+1) = last_n_digits(α_n, n+1))
  } →

  lemma Digit_Expansion() {
    assert(α_0 = d_0 ∧ 0 ≤ d_0 < p) ∧
    assert(α_1 = d_0 + d_1p ∧ 0 ≤ d_1 < p) ∧
    assert(α_2 = d_0 + d_1p + d_2p^2 ∧ 0 ≤ d_2 < p) ∧
    assert(α_3 = d_0 + d_1p + d_2p^2 + d_3p^3 ∧ 0 ≤ d_3 < p) ∧
    assert(∀n∈ℕ: 0 ≤ d_n < p)
  } →

  apply(Coherence_Condition()) →
  apply(Digit_Expansion()) →
  
  assert(∃!(Σ_{n=0}^∞ d_n p^n)) →
  assert(∀n∈ℕ: α_n = Σ_{i=0}^n d_i p^i)
}