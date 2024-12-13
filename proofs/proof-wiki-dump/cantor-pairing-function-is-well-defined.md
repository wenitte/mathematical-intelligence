theorem Cantor_Pairing_Well_Defined() {
  assert(
    ∀m,n ∈ ℕ ⇒ π(m,n) = ((m + n)(m + n + 1))/2 + m ∈ ℕ
  )
} ↔

proof Cantor_Pairing_Well_Defined() {
  setVar(m,n: ℕ) →
  assert(
    wellDefined(π) ↔ ∀m,n ∈ ℕ ⇒ 2|((m + n)(m + n + 1))
  ) →
  
  lemma Even_Case() {
    assume(2|(m + n)) →
    apply(DivisorDividesMultiple) →
    assert(2|((m + n)(m + n + 1)))
  } →
  
  lemma Odd_Case() {
    assume(¬(2|(m + n))) →
    assert(∃k ∈ ℤ : m + n = 2k + 1) →
    assert(
      (m + n)(m + n + 1) = 
      (2k + 1)(2k + 2) = 
      (2k + 1)(2(k + 1))
    ) →
    assert(2|(2(k + 1))) →
    apply(DivisorDividesMultiple) →
    assert(2|((2k + 1)(2(k + 1)))) →
    assert(2|((m + n)(m + n + 1)))
  } →
  
  apply(ProofByCases, Even_Case(), Odd_Case()) →
  assert(∀m,n ∈ ℕ ⇒ 2|((m + n)(m + n + 1))) →
  assert(wellDefined(π))
}