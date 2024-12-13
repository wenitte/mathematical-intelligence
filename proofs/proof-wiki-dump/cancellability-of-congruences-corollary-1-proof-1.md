theorem Congruence_Cancellability_Coprime() {
  assert(
    ∀c,n,a,b ∈ ℤ →
    (gcd(c,n) = 1 ∧ c a ≡ c b (mod n)) ⇒ 
    (a ≡ b (mod n))
  )
} ↔

proof Congruence_Cancellability_Coprime() {
  setVar(c,n,a,b: ℤ) →
  assert(c ⊥ n ↔ gcd(c,n) = 1) →
  lemma Cancellability_Of_Congruences() {
    assert(
      ∀c,n,a,b ∈ ℤ →
      (gcd(c,n) = 1 ∧ c a ≡ c b (mod n)) ⇒
      (a ≡ b (mod n))
    )
  } →
  apply(Cancellability_Of_Congruences()) →
  assert(a ≡ b (mod n))
}