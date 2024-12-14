theorem ComplexSineUnbounded() {
  assert(
    sin: ℂ → ℂ ⇒ isUnbounded(sin)
  )
} ↔

proof ComplexSineUnbounded() {
  assert(isEntire(sin)) →
  
  lemma Contradiction() {
    assume(isBounded(sin)) →
    apply(LiouvillesTheorem()) →
    assert(isConstant(sin)) →
    
    lemma SineValues() {
      assert(sin(0) = 0) ∧
      assert(sin(π/2) = 1)
    } →
    
    apply(SineValues()) →
    assert(sin(0) ≠ sin(π/2)) →
    assert(¬isConstant(sin))
  } →
  
  apply(Contradiction()) →
  assert(contradiction()) →
  assert(¬isBounded(sin)) →
  assert(isUnbounded(sin))
}