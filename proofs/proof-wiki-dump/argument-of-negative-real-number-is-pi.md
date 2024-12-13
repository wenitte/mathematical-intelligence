theorem Argument_Of_Negative_Real() {
  assert(
    ∀x ∈ ℝ_{>0} ⇒ arg(-x) = π
  )
} ↔

proof Argument_Of_Negative_Real() {
  setVar(x: ℝ_{>0}) →
  assert(-x = -x + 0i) →
  
  lemma Complex_Modulus() {
    assert(|-x| = √((-x)² + 0²)) →
    assert(|-x| = x)
  } →
  
  lemma Argument_Cosine() {
    assert(cos(arg(-x)) = -x/x) →
    assert(cos(arg(-x)) = -1) →
    assert(arg(-x) = π ∨ arg(-x) = -π)
  } →
  
  lemma Argument_Sine() {
    assert(sin(arg(-x)) = 0/x) →
    assert(sin(arg(-x)) = 0) →
    assert(arg(-x) = 0 ∨ arg(-x) = π)
  } →
  
  apply(Argument_Cosine()) →
  apply(Argument_Sine()) →
  
  assert(
    (arg(-x) = π ∨ arg(-x) = -π) ∧
    (arg(-x) = 0 ∨ arg(-x) = π)
  ) →
  
  conclude(arg(-x) = π)
}