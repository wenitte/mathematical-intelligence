theorem FermatPseudoprime_91() {
  assert(
    91 ∈ ℤ+ ∧ 
    ∃S ⊆ {1,...,90} : |S| = 35 ∧
    ∀a ∈ S : (a^90 ≡ 1 (mod 91))
  )
}

proof FermatPseudoprime_91() {
  setDef(S = {3,4,9,10,12,16,17,22,23,25,27,29,30,36,38,40,43,48,51,53,55,61,62,64,66,68,69,74,75,79,81,82,87,88,90}) →
  
  lemma ChineseRemainderThm() {
    assert(
      ∀a < 91 : (a^90 ≡ 1 (mod 91)) ↔
      (a^90 ≡ 1 (mod 7) ∧ a^90 ≡ 1 (mod 13))
    )
  } →
  
  lemma FermatsLittleThm_7() {
    assert(∀a ∈ ℤ : gcd(a,7)=1 → a^6 ≡ 1 (mod 7))
  } →
  
  lemma FermatsLittleThm_13() {
    assert(∀a ∈ ℤ : gcd(a,13)=1 → a^12 ≡ 1 (mod 13))
  } →
  
  assert(∀a ∈ S : gcd(a,7)=1 ∧ gcd(a,13)=1) →
  
  apply(FermatsLittleThm_7()) →
  assert(∀a ∈ S : a^90 ≡ (a^6)^15 ≡ 1^15 ≡ 1 (mod 7)) →
  
  apply(FermatsLittleThm_13()) →
  assert(∀a ∈ S : a^90 ≡ a^6 (mod 13)) →
  
  lemma Modulo13Powers() {
    assert(
      (±1)^6 ≡ 1 (mod 13) ∧
      (±2)^6 ≡ -1 (mod 13) ∧
      (±3)^6 ≡ 1 (mod 13) ∧
      (±4)^6 ≡ 1 (mod 13) ∧
      (±5)^6 ≡ -1 (mod 13) ∧
      (±6)^6 ≡ -1 (mod 13)
    )
  } →
  
  apply(Modulo13Powers()) →
  assert(∀a ∈ S : a ≡ 1,3,4,9,10,12 (mod 13)) →
  
  apply(ChineseRemainderThm()) →
  assert(∀a ∈ S : a^90 ≡ 1 (mod 91))
}