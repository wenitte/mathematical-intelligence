theorem AntiperiodicElementIsMultipleOfAntiperiod() {
  assert(
    ∀f: ℝ → ℝ, ∀A,L ∈ ℝ ⇒
    (isAntiPeriodic(f) ∧ isAntiPeriod(f,A) ∧ isAntiPeriodicElement(f,L)) →
    A|L
  )
}

proof AntiperiodicElementIsMultipleOfAntiperiod() {
  assumeContradiction(A∤L) →
  applyDivisionTheorem() → 
  assert(∃!q ∈ ℤ, r ∈ ℝ: L = qA + r ∧ 0 < r < A) →
  assert(q ∈ Even ∨ q ∈ Odd) →

  case(q ∈ Even) {
    assert(f(x + L) = f(x + (qA + r))) →
    assert(f((x + r) + qA) = f(x + r)) →
    assert(f(x + r) = -f(x)) →
    assert(isAntiPeriodicElement(f,r) ∧ r < A) →
    contradiction(isMinimalAntiPeriod(f,A))
  } →

  case(q ∈ Odd) {
    assert(-f(x) = f(x + L)) →
    assert(f(x + (qA + r)) = f((x + r) + qA)) →
    assert(-f(x + r) = -f(x)) →
    assert(f(x) = f(x + r)) →
    assert(isPeriodicElement(f,r) ∧ 0 < r < A) →
    
    setVar(s = A - r) →
    assert(0 < s < A) →
    assert(f(x + s) = f(x + A - r)) →
    assert(f((x + A) - r) = f(x + A)) →
    assert(-f(x)) →
    contradiction(isMinimalAntiPeriod(f,A))
  } →
  
  conclude(A|L)
}