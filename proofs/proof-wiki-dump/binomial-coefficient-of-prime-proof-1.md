theorem Binomial_Coefficient_Prime() {
  assert(
    ∀p ∈ ℙ ∧ ∀k ∈ ℤ ∧ (0 < k < p) ⇒ 
    (binom(p,k) ≡ 0 mod p)
  )
} ↔

proof Binomial_Coefficient_Prime() {
  setVar(p: ℙ) →
  setVar(k: ℤ) →
  assume(0 < k < p) →
  
  assert(
    binom(p,k) = (p(p-1)(p-2)...)(p-k+1))/(k!)
  ) →

  lemma Integer_Division() {
    assert(
      k! | (p(p-1)(p-2)...(p-k+1))
    )
  } →

  lemma Coprime_Property() {
    assert(
      k < p ⇒ gcd(k!, p) = 1
    )
  } →

  apply(Euclid_Lemma) →
  assert(
    k! | ((p-1)(p-2)...(p-k+1))
  ) →

  assert(
    binom(p,k) = p * ((p-1)(p-2)...(p-k+1))/(k!)
  ) →

  assert(
    ∃m ∈ ℤ: binom(p,k) = p * m
  ) →

  conclude(
    binom(p,k) ≡ 0 mod p
  )
}