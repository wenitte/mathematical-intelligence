theorem Arcsecant_Negative() {
  assert(
    ∀x ∈ ℝ where arcsec(x) is defined →
    arcsec(-x) = π - arcsec(x)
  )
} ↔

proof Arcsecant_Negative() {
  setVar(y: ℝ) →
  assert(arcsec(-x) = y) →
  
  lemma SecantEquivalence() {
    assert(
      (arcsec(-x) = y) ↔
      (-x = sec(y) ∧ 0 ≤ y ≤ π)
    )
  } →
  
  apply(SecantEquivalence()) →
  assert(-x = sec(y) ∧ 0 ≤ y ≤ π) →
  assert(x = -sec(y) ∧ 0 ≤ y ≤ π) →
  
  lemma SecantSupplementary() {
    assert(
      ∀θ ∈ ℝ →
      sec(π - θ) = -sec(θ)
    )
  } →
  
  apply(SecantSupplementary()) →
  assert(x = sec(π - y) ∧ 0 ≤ y ≤ π) →
  
  lemma ArcsecantDefinition() {
    assert(
      (x = sec(z) ∧ 0 ≤ z ≤ π) ↔
      arcsec(x) = z
    )
  } →
  
  apply(ArcsecantDefinition()) →
  assert(arcsec(x) = π - y) →
  assert(y = π - arcsec(x)) →
  assert(arcsec(-x) = π - arcsec(x))
}