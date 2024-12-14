theorem Rational_P_Adic_Integer_Characterization() {
  assert(
    ∀p ∈ Primes ∧ 
    let(Qp: p-adic_numbers, Zp: p-adic_integers, Q: rationals) ⇒
    (Zp ∩ Q = {a/b ∈ Q : p ∤ b})
  )
} ↔

proof Rational_P_Adic_Integer_Characterization() {
  setDef(||·||p^Q: p-adic_norm_on_rationals) →
  
  lemma Equality_Chain() {
    assert(
      Zp ∩ Q = 
      {a/b ∈ Q : ||a/b||p ≤ 1} →
      {a/b ∈ Q : ||a/b||p^Q ≤ 1} →
      {a/b ∈ Q : p ∤ b}
    )
  } →

  justify(step1) {
    apply(Definition_P_Adic_Integers)
  } →

  justify(step2) {
    apply(Dense_Subfield_Property)
  } →

  justify(step3) {
    apply(Valuation_Ring_P_Adic_Norm)
  } →

  assert(conclusion: Zp ∩ Q = {a/b ∈ Q : p ∤ b})
}