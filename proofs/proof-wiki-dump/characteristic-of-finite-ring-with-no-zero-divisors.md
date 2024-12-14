theorem Ring_Characteristic_Properties() {
  let R = struct(R, +, ∘) ∧ 
  assert(
    isFiniteRing(R) ∧
    hasUnity(R) ∧
    noProperZeroDivisors(R) ∧
    n = characteristic(R) ∧ 
    n ≠ 0
  ) ⇒
  assert(
    isPrime(n) ∧
    ∀x ∈ R\{0_R}: order(x) = n ∧
    struct(R,+) ≅ C_n
  )
}

proof Ring_Characteristic_Properties() {
  // Proof by contradiction for primality
  assume(¬isPrime(n)) →
  setVar(r,s: ℤ) →
  assert(n = r·s ∧ r > 1 ∧ s > 1) →
  
  // Key equation
  assert((r·1_R) ∘ (s·1_R) = (r·s)·1_R = n·1_R = 0_R) →
  
  // No zero divisors property
  apply(noProperZeroDivisors(R)) →
  assert((r·1_R = 0_R) ∨ (s·1_R = 0_R)) →
  
  // Contradiction with minimality
  assert(r < n ∧ s < n) →
  assert(contradiction(minimalityOf(n))) →
  
  // Therefore n is prime
  conclude(isPrime(n)) →
  
  // Order properties
  setVar(x ∈ R\{0_R}) →
  apply(CharacteristicTimesElement()) →
  assert(n·x = 0_R) →
  
  apply(ElementPowerOrder()) →
  assert(order(x)|n) →
  
  // Since n is prime
  assert(order(x) = 1 ∨ order(x) = n) →
  apply(NullRingCharacteristic()) →
  assert(order(x) ≠ 1) →
  conclude(order(x) = n) →
  
  // Group isomorphism
  assert(struct(R,+) ≅ C_n)
}