theorem Terminal_P_adic_Expansion() {
  assert(
    ∀x ∈ ℚp ⇒ (
      (is_terminal_expansion(x) ↔ 
      ∃a ∈ ℕ, ∃k ∈ ℤ: x = a/p^k)
    )
  )
} ↔

proof Terminal_P_adic_Expansion() {
  // Necessary Condition
  section Forward() {
    setVar(x: ℚp) →
    assert(x = ∑_{n=m}^∞ d_n p^n) ∧
    assert(m ∈ ℤ_≤0) ∧
    assert(∀n ≥ m: d_n ∈ {0,1,...,p-1}) ∧
    assert(m < 0 → d_m ≠ 0) →
    
    assume(is_terminal_expansion(x)) →
    assert(∃n_0 ∈ ℕ: (n_0 ≥ m ∧ ∀n ≥ n_0: d_n = 0)) →
    
    derive(x = ∑_{n=m}^{n_0} d_n p^n) →
    derive(x = p^m(∑_{n=m}^{n_0} d_n p^{n-m})) →
    derive(x = p^m(∑_{n=0}^{n_0-m} d_{n+m} p^n)) →
    
    setVar(k = -m) →
    setVar(a = ∑_{n=0}^{n_0-m} d_{n+m} p^n) →
    conclude(x = a/p^k)
  }

  // Sufficient Condition
  section Backward() {
    assume(∃a ∈ ℕ, ∃k ∈ ℤ: x = a/p^k) →
    apply(Basis_Representation_Theorem(a)) →
    assert(a = ∑_{j=0}^n d_j p^j) ∧
    assert(p^n ≤ a < p^{n+1}) ∧
    assert(∀j: 0 ≤ d_j < p) →
    
    derive(x = ∑_{j=0}^n d_j p^{j-k}) →
    derive(x = ∑_{i=-k}^{n-k} d_{i+k} p^i) →
    
    setVar(m = max(-k, 0)) →
    defineFunction(e_i = {
      d_{i+k} if -k ≤ i ≤ n-k,
      0 if m ≤ i < -k ∨ i > n-k
    }) →
    
    assert(x = ∑_{i=m}^∞ e_i p^i) ∧
    assert(∀i ≥ m: 0 ≤ e_i < p) ∧
    assert(∀i > n-k: e_i = 0) →
    
    apply(P_adic_Expansion_Uniqueness()) →
    conclude(is_terminal_expansion(x))
  }
}