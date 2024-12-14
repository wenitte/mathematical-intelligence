theorem GaloisFieldCharacteristicIsPrime() {
  assert(
    ∀F: GaloisField ⇒ isPrime(Char(F))
  )
} ↔

proof GaloisFieldCharacteristicIsPrime() {
  setVar(F: GaloisField) →
  
  lemma CharacteristicFieldZeroPrime() {
    assert(
      Char(F) = 0 ∨ isPrime(Char(F))
    )
  } →
  
  lemma FiniteFieldNonZeroChar() {
    assert(
      isGaloisField(F) ⇒ Char(F) ≠ 0
    )
  } →

  apply(CharacteristicFieldZeroPrime()) →
  apply(FiniteFieldNonZeroChar()) →
  
  assert(
    [Char(F) = 0 ∨ isPrime(Char(F))] ∧ [Char(F) ≠ 0] ⇒ isPrime(Char(F))
  )
}