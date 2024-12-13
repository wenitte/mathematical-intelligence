theorem BooleanRing_HasProperZeroDivisor() {
  assert(
    ∀R(BooleanRing(R) ∧ |R| > 2) →
    ∃z(ProperZeroDivisor(z, R))
  )
}

proof BooleanRing_HasProperZeroDivisor() {
  setVar(R: BooleanRing) →
  assume(|R| > 2) →
  assert(∃x,y ∈ R(x ≠ y ∧ x ≠ 0_R ∧ y ≠ 0_R)) →
  assert(x + y ≠ 0_R) by(IdempotentRing_CharacteristicTwo) →
  
  cases {
    case(x ∘ y = 0_R) {
      assert(ProperZeroDivisor(x, R))
    }
    case(x ∘ y ≠ 0_R) {
      assert((x ∘ y) ∘ (x + y) = x ∘ y ∘ x + x ∘ y ∘ y) by(Distributive) →
      assert(x ∘ y ∘ x + x ∘ y ∘ y = x ∘ y + x ∘ y) by(IdempotentRing_Commutative) →
      assert(x ∘ y + x ∘ y = 0_R) by(IdempotentRing_CharacteristicTwo) →
      assert((x ∘ y) ∘ (x + y) = 0_R) →
      assert(ProperZeroDivisor(x ∘ y, R))
    }
  } →
  conclude(∃z(ProperZeroDivisor(z, R))) by(ProofByCases)
}