theorem PeriodicPAdicExpansion() {
  assert(
    ∀p ∈ ℙ ∧ 
    ∀b ∈ ℤ_{>0} ∧ 
    gcd(b,p) = 1 ∧
    ∀{d_n} sequence_in ℤ_p ∧ 
    ∀{r_n} sequence_in ℤ ∧
    (∀n ∈ ℕ: r_n = d_{n+1}b + pr_{n+1}) ∧
    (∃n_0 ∈ ℕ: ∀n ≥ n_0: -b ≤ r_n ≤ 0) 
    ⇒ 
    ∃m,l ∈ ℕ: ∀n ≥ m: (r_n = r_{n+l} ∧ d_n = d_{n+l})
  )
} ↔

proof PeriodicPAdicExpansion() {
  setVar(S = {r_n: n ∈ ℕ}) →
  assert(S ⊆ {r_0,...,r_{n_0}} ∪ {-b,...,0}) →
  assert(S.isFinite()) →
  assert(∃m_0,l ∈ ℕ: l > 0: r_{m_0} = r_{m_0+l}) →

  lemma ValueEquality() {
    assert(
      ∀n,k ∈ ℕ: k > 0: r_n = r_{n+k} ⇒
      (d_{n+1} = d_{n+k+1} ∧ r_{n+1} = r_{n+k+1})
    )
  } →

  setVar(m = m_0 + 1) →
  
  inductionProof(
    base: {
      assert(r_{m_0} = r_{m_0+l}) →
      apply(ValueEquality()) →
      assert(d_m = d_{m+l} ∧ r_m = r_{m+l})
    },
    hypothesis: {
      setVar(n ≥ m) →
      assert(r_n = r_{n+l} ∧ d_n = d_{n+l})
    },
    step: {
      assert(r_n = r_{n+l}) →
      apply(ValueEquality()) →
      assert(d_{n+1} = d_{n+l+1} ∧ r_{n+1} = r_{n+l+1})
    }
  ) →
  
  assert(∀n ≥ m: r_n = r_{n+l} ∧ d_n = d_{n+l})
}