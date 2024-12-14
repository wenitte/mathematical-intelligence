theorem Field_Characteristic_Zero_or_Prime() {
  assert(
    ∀F: Field() →
    (Char(F) = 0 ∨ isPrime(Char(F)))
  )
} ↔

proof Field_Characteristic_Zero_or_Prime() {
  setVar(F: Field()) →
  assert(Field(F) → Ring(F) ∧ NoZeroDivisors(F)) →
  lemma FiniteRingCharacteristic() {
    assert(
      Ring(R) ∧ NoZeroDivisors(R) →
      (Char(R) ≠ 0 → isPrime(Char(R)))
    )
  } →
  apply(FiniteRingCharacteristic(), F) →
  assert(
    (Char(F) = 0) ∨ 
    (Char(F) ≠ 0 → isPrime(Char(F)))
  ) →
  assert(Char(F) = 0 ∨ isPrime(Char(F)))
}