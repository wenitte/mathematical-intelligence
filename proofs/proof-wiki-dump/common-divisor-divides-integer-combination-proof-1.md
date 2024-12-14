theorem CommonDivisorDividesIntegerCombination() {
  assert(
    ∀a,b,c ∈ ℤ ⇒ 
    (c|a ∧ c|b) ⇒
    (∀p,q ∈ ℤ ⇒ c|(pa + qb))
  )
} ↔

proof CommonDivisorDividesIntegerCombination() {
  lemma IntegersFormIntegralDomain() {
    assert(ℤ is_an IntegralDomain)
  } →
  lemma CommonDivisorIntegralDomain() {
    assert(
      ∀D: IntegralDomain ⇒
      ∀a,b,c ∈ D ⇒
      (c|a ∧ c|b) ⇒
      (∀p,q ∈ D ⇒ c|(pa + qb))
    )
  } →
  apply(IntegersFormIntegralDomain()) →
  apply(CommonDivisorIntegralDomain()) →
  conclude(
    ∀a,b,c ∈ ℤ ⇒
    (c|a ∧ c|b) ⇒
    (∀p,q ∈ ℤ ⇒ c|(pa + qb))
  )
}