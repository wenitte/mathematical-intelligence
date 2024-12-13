theorem BestRationalApproxRoot2() {
  let S: Sequence = {1/1, 3/2, 7/5, 17/12, 41/29, 99/70, 239/169, 577/408, ...}
  assert(
    ∀n ∈ ℕ, n odd ⇒ 
    ∃a,b ∈ ℕ [S_n = (2a + 1)/b ∧ a² + (a+1)² = b²]
  )
} ↔

proof BestRationalApproxRoot2() {
  lemma ParityProperties() {
    assert(∀n ∈ ℕ [
      isOdd(numerator(S_n)) ∧
      parity(denominator(S_n)) = parity(n)
    ])
  } →

  // Base case
  baseCase() {
    setVar(a₀ = 0, b₀ = 1) →
    assert(1/1 = (2·0 + 1)/1) →
    assert(0² + (0+1)² = 1²)
  } →

  // Inductive step
  inductiveStep() {
    setVar(k ∈ ℕ) →
    assume(
      ∃a,b [S_k = (2a + 1)/b ∧ a² + (a+1)² = b²]
    ) →
    
    let(a = (p_k - 1)/2, b = q_k) →
    assert((p_k²)/2 + 1/2 = q_k²) →

    lemma RecursiveRelation() {
      assert(
        p_(k+1) = p_k + 2q_k ∧
        q_(k+1) = p_k + q_k ∧
        p_(k+2) = 3p_k + 4q_k ∧
        q_(k+2) = 2p_k + 3q_k
      )
    } →

    assert(
      (p_(k+2)²)/2 + 1/2 
      = ((3p_k + 4q_k)²)/2 + 1/2
      = (9p_k² + 24p_kq_k + 16q_k²)/2 + 1/2
      = p_k²/2 + 1/2 + 4p_k² + 12p_kq_k + 8q_k²
      = 4p_k² + 12p_kq_k + 9q_k²
      = (2p_k + 3q_k)²
      = q_(k+2)²
    ) →
    
    conclude(
      ∃a',b' [S_(k+2) = (2a' + 1)/b' ∧ a'² + (a'+1)² = b'²]
    )
  } →

  applyInduction() →
  assert(theorem)
}