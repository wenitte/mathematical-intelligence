theorem NoComplexOrdering() {
  assert(
    ¬∃≤ (TotalOrdering(≤, ℂ) ∧ OrderCompatible(≤, ℂ))
  )
} ↔

proof NoComplexOrdering() {
  byContradiction() {
    assume(∃≤ (TotalOrdering(≤, ℂ) ∧ OrderCompatible(≤, ℂ))) →
    setVar(≤: Relation(ℂ)) →
    
    assert(∀z ∈ ℂ: z ≠ 0 ⇒ (0 < z ∨ 0 < -z) ∧ ¬(0 < z ∧ 0 < -z)) →
    assert(∀z₁,z₂ ∈ ℂ: (0 < z₁ ∧ 0 < z₂) ⇒ (0 < z₁z₂ ∧ 0 < z₁ + z₂)) →
    
    lemma ImaginaryCase() {
      assert(i ≠ 0) →
      assert(0 < i ∨ 0 < -i) →
      
      case(0 < i) {
        assert(0 < i×i) →
        assert(0 < -1)
      } →
      
      case(0 < -i) {
        assert(0 < (-i)×(-i)) →
        assert(0 < -1)
      }
    } →
    
    apply(ImaginaryCase()) →
    assert(0 < -1) →
    assert(0 < (-1)×(-1)) →
    assert(0 < 1) →
    
    contradiction(
      (0 < -1 ∧ 0 < 1),
      ¬(0 < z ∧ 0 < -z)
    )
  }
}

theorem NoComplexOrderingAlt() {
  assert(
    ¬∃≤ (TotalOrdering(≤, ℂ) ∧ OrderCompatible(≤, ℂ))
  )
} ↔

proof NoComplexOrderingAlt() {
  byContradiction() {
    assume(∃≤ (TotalOrdering(≤, ℂ) ∧ OrderCompatible(≤, ℂ))) →
    setVar(≤: Relation(ℂ)) →
    
    assert(IntegralDomain(ℂ)) →
    assert(∀z ∈ ℂ: StrictlyPositive(z) ⇔ 0 < z) →
    
    assert(StrictlyPositive(1)) →
    assert(¬StrictlyPositive(-1)) →
    
    lemma ImaginaryPositivity() {
      assert(StrictlyPositive(i) ∨ StrictlyPositive(-i)) →
      
      case(StrictlyPositive(i)) {
        assert(StrictlyPositive(i²)) →
        assert(StrictlyPositive(-1))
      } →
      
      case(StrictlyPositive(-i)) {
        assert(StrictlyPositive((-i)²)) →
        assert(StrictlyPositive(-1))
      }
    } →
    
    apply(ImaginaryPositivity()) →
    contradiction(
      StrictlyPositive(-1),
      ¬StrictlyPositive(-1)
    )
  }
}