theorem Ring_Integers_Modulo_Prime_Characteristic() {
  let(p: Prime) →
  let(Zp: Ring(ℤ_p, +, ×)) →
  assert(
    characteristic(Zp) = p
  )
} ↔

proof Ring_Integers_Modulo_Prime_Characteristic() {
  let(p: Prime) →
  let(Zp: Ring(ℤ_p, +, ×)) →
  
  lemma Ring_Is_Field() {
    assert(
      isField(Zp)
    )
  } →
  
  lemma Finite_Ring_No_Zero_Divisors() {
    assert(
      isFinite(Zp) ∧ hasNoZeroDivisors(Zp) →
      isPrime(characteristic(Zp))
    )
  } →
  
  apply(Ring_Is_Field()) →
  apply(Finite_Ring_No_Zero_Divisors()) →
  
  assert(
    isPrime(characteristic(Zp)) ∧
    ¬∃q(isPrime(q) ∧ q ≠ p ∧ characteristic(Zp) = q) →
    characteristic(Zp) = p
  )
}