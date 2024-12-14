theorem Complex_Natural_Log_i() {
  assert(
    ∀k ∈ ℤ ⇒ ln(i) = (4k + 1)(πi/2)
  )
} ↔

proof Complex_Natural_Log_i() {
  setVar(k: ℤ) →
  
  lemma PolarForm_i() {
    assert(i = exp(iπ/2))
  } →
  
  assert(ln(i) = ln(exp(iπ/2 + 2kπi))) →
  
  lemma ComplexLog_Definition() {
    assert(
      ∀z ∈ ℂ, ∀k ∈ ℤ ⇒
      ln(exp(z + 2kπi)) = z + 2kπi
    )
  } →
  
  apply(ComplexLog_Definition()) →
  
  assert(ln(i) = (iπ/2 + 2kπi)) →
  assert(ln(i) = (iπ + 4kπi)/2) →
  assert(ln(i) = (4k + 1)(πi/2)) →
  
  conclude(ln(i) = (4k + 1)(πi/2))
}