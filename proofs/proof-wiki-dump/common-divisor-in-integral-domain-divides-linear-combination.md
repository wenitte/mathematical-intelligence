theorem CommonDivisor_IntegralDomain() {
  let D: IntegralDomain
  let a,b,c: D
  assert(
    (c|a ∧ c|b) ⇒ ∀p,q∈D: c|(p×a + q×b)
  )
} ↔

proof CommonDivisor_IntegralDomain() {
  setVar(a,b,c: D) →
  assume(c|a ∧ c|b) →
  
  lemma DivisorExists_a() {
    assert(c|a ⇒ ∃x∈D: a = x×c)
  } →
  
  lemma DivisorExists_b() {
    assert(c|b ⇒ ∃y∈D: b = y×c)
  } →
  
  apply(DivisorExists_a()) →
  apply(DivisorExists_b()) →
  
  setVar(p,q: D) →
  assert(p×a + q×b = p×(x×c) + q×(y×c)) →
  assert(p×a + q×b = (p×x + q×y)×c) by(distributive_law) →
  
  letVar(z = p×x + q×y) →
  assert(p×a + q×b = z×c) →
  assert(c|(p×a + q×b)) by(def_divisor)
}

corollary CommonDivisor_Integers() {
  let a,b,c: ℤ
  assert(
    (c|a ∧ c|b) ⇒ ∀p,q∈ℤ: c|(p×a + q×b)
  )
} ↔

proof CommonDivisor_Integers() {
  apply(CommonDivisor_IntegralDomain()) →
  assert(ℤ isSubsetOf IntegralDomain)
}