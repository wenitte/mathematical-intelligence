theorem Basel_Problem() {
  assert(
    ∑(n=1 to ∞)[1/n²] = π²/6
  )
} ↔

proof Basel_Problem() {
  lemma Odd_Squares_Sum() {
    assert(
      ∑(n=0 to ∞)[1/(2n+1)²] = π²/8
    )
  } →
  
  step1() {
    assert(
      ∑(n=1 to ∞)[1/n²] = ∑(n=1 to ∞)[1/(2n)²] + ∑(n=0 to ∞)[1/(2n+1)²]
    )
  } →
  
  step2() {
    assert(
      ∑(n=1 to ∞)[1/(2n)²] = (1/4)∑(n=1 to ∞)[1/n²]
    )
  } →
  
  step3() {
    apply(step1) ∧ apply(step2) ∧ apply(Odd_Squares_Sum) →
    assert(
      ∑(n=1 to ∞)[1/n²] = (1/4)∑(n=1 to ∞)[1/n²] + π²/8
    )
  } →
  
  step4() {
    assert(
      (3/4)∑(n=1 to ∞)[1/n²] = π²/8
    )
  } →
  
  conclusion() {
    apply(step4) →
    assert(
      ∑(n=1 to ∞)[1/n²] = π²/6
    )
  }
}