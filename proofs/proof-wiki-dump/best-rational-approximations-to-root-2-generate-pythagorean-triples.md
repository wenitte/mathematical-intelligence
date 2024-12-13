theorem Best_Rational_Approx_Root2() {
  let S := {1/1, 3/2, 7/5, 17/12, 41/29, 99/70, 239/169, 577/408, ...}
  assert(
    ∀k ∈ ℕ where k is odd ⇒
    ∃a,b ∈ ℕ [S_k = (2a + 1)/b ∧ a² + (a+1)² = b²]
  )
}

proof Best_Rational_Approx_Root2() {
  lemma Parity() {
    assert(
      ∀n ∈ ℕ [
        isOdd(numerator(S_n)) ∧
        (isOdd(denominator(S_n)) ↔ isOdd(n))
      ]
    )
  } →

  // Base case
  assert(S₁ = 1/1 = (2(0) + 1)/1) ∧
  verify(0² + (0+1)² = 1²) →

  // Induction
  setVar(k: ℕ) →
  assume(
    ∃a,b [S_k = (2a + 1)/b ∧ a² + (a+1)² = b²]
  ) →
  
  let p_k := numerator(S_k) →
  let q_k := denominator(S_k) →
  assert(a = (p_k - 1)/2 ∧ b = q_k) →
  assert((p_k²/2 + 1/2) = q_k²) →

  // Recurrence relations
  assert(p_{k+1} = p_k + 2q_k) ∧
  assert(q_{k+1} = p_k + q_k) →
  assert(p_{k+2} = 3p_k + 4q_k) ∧
  assert(q_{k+2} = 2p_k + 3q_k) →

  // Verify next odd term
  let a' := (p_{k+2} - 1)/2 →
  let b' := q_{k+2} →
  verify(
    (p_{k+2}²/2 + 1/2) = 
    ((3p_k + 4q_k)²/2 + 1/2) =
    (9p_k² + 24p_kq_k + 16q_k²)/2 + 1/2 =
    4p_k² + 12p_kq_k + 9q_k² =
    (2p_k + 3q_k)² =
    q_{k+2}²
  ) →
  
  conclude(∀k [S_{k+2} = (2a' + 1)/b' ∧ a'² + (a'+1)² = b'²])
}