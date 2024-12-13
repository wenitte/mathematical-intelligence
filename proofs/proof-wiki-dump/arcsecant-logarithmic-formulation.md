theorem ArcsecantLogarithmic() {
  assert(
    ∀x ∈ ℝ ∧ x ∈ ((-∞,-1] ∪ [1,∞)) ⇒
    arcsec(x) = -i⋅ln(i⋅√(1-1/x²) + 1/x)
  )
  where(
    arcsec: ℝ → ℂ,
    ln: Principal branch of complex logarithm with Im(ln) ∈ (-π,π)
  )
} ↔

proof ArcsecantLogarithmic() {
  setVar(x: ℝ) →
  
  lemma ArcsecRecipCos() {
    assert(arcsec(x) = arccos(1/x))
  } →
  apply(ArcsecRecipCos()) →
  
  lemma ArccosLogForm() {
    assert(
      arccos(z) = -i⋅ln(i⋅√(1-z²) + z)
    )
  } →
  
  assert(
    arcsec(x) = arccos(1/x)
  ) →
  apply(ArccosLogForm(), z ← 1/x) →
  assert(
    arcsec(x) = -i⋅ln(i⋅√(1-(1/x)²) + 1/x)
  ) →
  assert(
    arcsec(x) = -i⋅ln(i⋅√(1-1/x²) + 1/x)
  )
}