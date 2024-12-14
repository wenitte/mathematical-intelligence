theorem ComplexNumbersCannotBeOrdered() {
  assert(
    ∀C ∈ Field(ℂ) ⇒ ¬∃TotalOrder(C) 
    where Compatible(TotalOrder, RingStructure(C))
  )
} ↔

proof ComplexNumbersCannotBeOrdered() {
  setVar(C: Field(ℂ)) →
  
  lemma IntegralDomain() {
    assert(IsIntegralDomain(C))
  } →

  proof_by_contradiction() {
    assume(∃TotalOrder(C)) →
    assert(∃P: StrictPositivity(C)) →
    setVar(≤: TotalOrder(C)) →
    assert(Induces(P, ≤)) →
    
    lemma UnityPositive() {
      assert(StrictlyPositive(1))
    } →
    
    assert(¬StrictlyPositive(-1)) →
    
    setVar(i: ℂ) →
    assert(StrictlyPositive(i) ∨ StrictlyPositive(-i)) →
    
    case_analysis() {
      case StrictlyPositive(i) {
        assert(StrictlyPositive(i²)) →
        assert(i² = -1) →
        assert(StrictlyPositive(-1))
      }
      
      case StrictlyPositive(-i) {
        assert(StrictlyPositive((-i)²)) →
        assert((-i)² = -1) →
        assert(StrictlyPositive(-1))
      }
    } →
    
    assert(StrictlyPositive(-1) ∧ ¬StrictlyPositive(-1)) →
    assert(Contradiction())
  }
}