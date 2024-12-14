theorem CoherentSequenceConvergesPadic() {
  let(p: Prime)
  let(Qp: {ℚ_p, ‖·‖_p})
  let(α_n: Sequence)
  let(ℤ_p: PadicIntegers)
  assert(
    isCoherent(α_n) → ∃x ∈ ℤ_p: lim_{n→∞} α_n = x
  )
} ↔

proof CoherentSequenceConvergesPadic() {
  lemma PadicExpansion() {
    assert(
      ∃!(Σ_{n=0}^∞ d_n p^n) ∧
      ∀n ∈ ℕ: α_n = Σ_{i=0}^n d_i p^i
    )
  } →
  
  lemma ExpansionConvergence() {
    assert(∃x ∈ ℚ_p: lim_{n→∞} α_n = x)
  } →
  
  assert(∀n ∈ ℕ: α_n ∈ ℤ ⊆ ℤ_p) →
  
  lemma PadicIntegersClosed() {
    assert(
      ℤ_p = B_1^-(0) ∧
      isClosed(ℤ_p, ‖·‖_p)
    )
  } →
  
  apply(PadicIntegersClosed()) →
  apply(SequenceLimitInClosed(ℤ_p)) →
  assert(x ∈ ℤ_p) →
  
  conclude(∃x ∈ ℤ_p: lim_{n→∞} α_n = x)
}