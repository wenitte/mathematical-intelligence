theorem Coherent_Sequence_Padic_Expansion() {
  setVar(p: Prime)
  setVar(α: Sequence)
  assert(
    isCoherent(α) ∧
    ∃!{d_n: ℕ→ℕ} (
      (∀n∈ℕ: 0 ≤ d_n < p) ∧
      (∀n∈ℕ: α_n = ∑_{i=0}^n d_i p^i)
    )
  )
} ↔

proof Coherent_Sequence_Padic_Expansion() {
  setVar(p: Prime) →
  setVar(α: Sequence) →
  
  // Coherent sequence definition
  assert(∀n∈ℕ: 0 ≤ α_n < p^{n+1}) →
  
  // Zero Padded Basis representation
  lemma Base_Representation() {
    assert(
      ∀n∈ℕ ∃{b_{j,n}: 0≤j≤n} (
        α_n = ∑_{j=0}^n b_{j,n} p^j ∧
        ∀j∈[0,n]: 0 ≤ b_{j,n} < p
      )
    )
  } →

  // Key lemma for sequence construction
  lemma Sequence_Construction() {
    assert(∀n∈ℕ: α_n = ∑_{i=0}^n b_{i,i} p^i)
  } →

  // Define d_n sequence
  setVar(d_n: ℕ→ℕ) →
  assert(∀n∈ℕ: d_n = b_{n,n}) →
  
  // Verify bounds
  assert(∀n∈ℕ: 0 ≤ d_n < p) →
  
  // Verify p-adic expansion
  assert(
    ∃!{d_n}(
      ∑_{n=0}^∞ d_n p^n
    ) ∧
    ∀n∈ℕ: α_n = ∑_{i=0}^n d_i p^i
  )
}