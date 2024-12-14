theorem ComplexNaturalLog_Negative2() {
  assert(
    ∀k ∈ ℤ ⇒ ln(-2) = ln(2) + (2k + 1)πi
  )
} ↔

proof ComplexNaturalLog_Negative2() {
  setVar(k: ℤ) →
  assert(-2 = 2eⁱᵖⁱ) →
  lemma EulersIdentity() {
    assert(eⁱᵖⁱ = -1)
  } →
  apply(EulersIdentity()) →
  assert(-2 = 2e^(iπ + 2kπi)) →
  lemma ComplexLogDefinition() {
    assert(
      ∀z,w ∈ ℂ ∧ ∀r ∈ ℝ⁺ ∧ ∀θ ∈ ℝ ⇒
      [z = reⁱᶿ → ln(z) = ln(r) + iθ]
    )
  } →
  apply(ComplexLogDefinition()) →
  assert(ln(-2) = ln(2e^(iπ + 2kπi))) →
  assert(ln(-2) = ln(2) + iπ + 2kπi) →
  assert(ln(-2) = ln(2) + (2k + 1)πi)
}