theorem Cancellability_Of_Congruences_Corollary_2() {
  assert(
    ∀a,b,c ∈ ℤ, ∀p ∈ ℙ ⇒
    (p ∤ c ∧ ca ≡ cb (mod p)) → (a ≡ b (mod p))
  )
} ↔

proof Cancellability_Of_Congruences_Corollary_2() {
  setVar(a,b,c: ℤ) →
  setVar(p: ℙ) →
  assume(p ∤ c) →
  assume(ca ≡ cb (mod p)) →
  
  lemma Prime_Not_Divisor_Implies_Coprime() {
    assert(p ∤ c → p ⊥ c)
  } →
  
  apply(Prime_Not_Divisor_Implies_Coprime()) →
  assert(p ⊥ c) →
  
  lemma Cancellability_Of_Congruences_Corollary_1() {
    assert(
      (p ⊥ c ∧ ca ≡ cb (mod p)) → (a ≡ b (mod p))
    )
  } →
  
  apply(Cancellability_Of_Congruences_Corollary_1()) →
  assert(a ≡ b (mod p))
}