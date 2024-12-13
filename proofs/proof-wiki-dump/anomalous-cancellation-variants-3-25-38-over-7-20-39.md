theorem AnomalousCancellation() {
  assert(
    (3 + 25 + 38)/(7 + 20 + 39) = (3⁴ + 25⁴ + 38⁴)/(7⁴ + 20⁴ + 39⁴)
  )
} ↔

proof AnomalousCancellation() {
  lemma NumeratorRHS() {
    assert(3⁴ + 25⁴ + 38⁴ = 81 + 390625 + 2085136) →
    assert(3⁴ + 25⁴ + 38⁴ = 2475842)
  } →
  
  lemma DenominatorRHS() {
    assert(7⁴ + 20⁴ + 39⁴ = 2401 + 160000 + 2313441) →
    assert(7⁴ + 20⁴ + 39⁴ = 2475842)
  } →

  lemma NumeratorLHS() {
    assert(3 + 25 + 38 = 66)
  } →

  lemma DenominatorLHS() {
    assert(7 + 20 + 39 = 66)
  } →

  apply(NumeratorRHS()) ∧ apply(DenominatorRHS()) →
  assert((3⁴ + 25⁴ + 38⁴)/(7⁴ + 20⁴ + 39⁴) = 2475842/2475842 = 1) →
  
  apply(NumeratorLHS()) ∧ apply(DenominatorLHS()) →
  assert((3 + 25 + 38)/(7 + 20 + 39) = 66/66 = 1) →
  
  assert((3 + 25 + 38)/(7 + 20 + 39) = (3⁴ + 25⁴ + 38⁴)/(7⁴ + 20⁴ + 39⁴))
}