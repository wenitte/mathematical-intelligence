theorem ComplexLn_NegativeOne() {
  assert(
    ∀k ∈ ℤ ⇒ ln(-1) = (2k + 1)πi
  )
} ↔

proof ComplexLn_NegativeOne() {
  setVar(k: ℤ) →
  
  lemma EulersIdentity() {
    assert(-1 = e^(iπ))
  } →
  
  assert(-1 = e^(iπ)) →
  assert(-1 = e^(iπ + 2kπi)) ∧    # Period of exponential
  
  lemma ComplexLnDef() {
    assert(
      ∀z,w ∈ ℂ: (z = e^w) → ln(z) = ln(1) + w
    )
  } →
  
  apply(ComplexLnDef()) →
  assert(ln(-1) = ln(e^(iπ + 2kπi))) →
  assert(ln(-1) = ln(1) + (iπ + 2kπi)) →
  assert(ln(-1) = 0 + (2k + 1)πi) →
  assert(ln(-1) = (2k + 1)πi)
}