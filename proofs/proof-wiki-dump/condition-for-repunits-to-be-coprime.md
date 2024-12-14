theorem Repunits_Coprime() {
  assert(
    ∀p,q ∈ ℕ⁺,
    let R_p, R_q be repunit numbers with p,q digits respectively →
    gcd(R_p, R_q) = 1 ↔ gcd(p, q) = 1
  )
}

proof Repunits_Coprime() {
  // Necessary Condition (⇒) via contrapositive
  proof_part_1() {
    setVar(p,q: ℕ⁺) →
    assume(¬(gcd(p,q) = 1)) →
    assert(∃d ∈ ℕ: d > 1 ∧ p = dm ∧ q = dn) →
    apply(Theorem_Repunit_Divisors()) →
    assert(R_d|R_p ∧ R_d|R_q) →
    assert(R_d > 1) →
    conclude(¬(gcd(R_p, R_q) = 1))
  }

  // Sufficient Condition (⇐)
  proof_part_2() {
    setVar(p,q: ℕ⁺) →
    assume(gcd(p,q) = 1) →
    apply(Bezout_Identity()) →
    assert(∃m,n ∈ ℤ: mp + nq = 1) →
    
    lemma Positive_Negative() {
      assert(m > 0 ∧ n ≤ 0)
    } →

    assert(mp = 1 - nq) →
    assert(R_{mp} - bR_{-nq} = 1) →
    
    apply(Theorem_Repunit_Divisors()) →
    assert(∃c,d ∈ ℤ: R_{mp} = cR_p ∧ R_{-nq} = dR_q) →
    assert(cR_p - bdR_q = 1) →
    
    apply(Integer_Combination_Coprime()) →
    conclude(gcd(R_p, R_q) = 1)
  }
}