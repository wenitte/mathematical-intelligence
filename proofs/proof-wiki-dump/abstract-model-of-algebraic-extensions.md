theorem AlgebraicExtensionModel() {
  assert(
    ∀K: Field, ∀α ∈ K̄ ∧ isAlgebraic(α, K) ∧
    let m_α = minimalPolynomial(α, K) ⇒
    K[α] ≅ K[x]/⟨m_α⟩
  )
} ↔

proof AlgebraicExtensionModel() {
  setVar(K: Field, α ∈ K̄, m_α: Polynomial) →
  assert(isAlgebraic(α, K)) →
  
  lemma HomomorphismConstruction() {
    define(φ: K[x] → K[α]) →
    assert(∀k ∈ K: φ(k) = k) ∧
    assert(φ(x) = α)
  } →
  
  lemma KernelIdentification() {
    assert(ker(φ) = {p ∈ K[x] | p(α) = 0}) →
    assert(ker(φ) = ⟨m_α⟩)
  } →
  
  apply(FirstFundamentalTheoremRingHomomorphisms, {
    f: φ,
    R: K[x],
    I: ⟨m_α⟩
  }) →
  
  assert(K[α] ≅ K[x]/⟨m_α⟩)
}