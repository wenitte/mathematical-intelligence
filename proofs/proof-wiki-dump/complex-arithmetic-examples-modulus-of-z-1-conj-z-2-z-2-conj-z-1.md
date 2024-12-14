theorem ModulusComplexSum() {
  assert(
    let z₁ = 1 - i ∧
    let z₂ = -2 + 4i ⇒
    |z₁z̄₂ + z₂z̄₁| = 12
  )
} ↔

proof ModulusComplexSum() {
  setVar(z₁: ℂ = 1 - i) →
  setVar(z₂: ℂ = -2 + 4i) →
  
  assert(|z₁z̄₂ + z₂z̄₁|) →
  assert(|(1 - i)(-2 - 4i) + (-2 + 4i)(1 + i)|) →
  
  lemma ExpandFirst() {
    assert((1 - i)(-2 - 4i) = -2 - 4i + 2i + 4i²) →
    assert(i² = -1) →
    assert(-2 - 4i + 2i - 4 = -6 - 2i)
  } →
  
  lemma ExpandSecond() {
    assert((-2 + 4i)(1 + i) = -2 - 2i + 4i + 4i²) →
    assert(i² = -1) →
    assert(-2 - 2i + 4i - 4 = -6 + 2i)
  } →
  
  apply(ExpandFirst()) →
  apply(ExpandSecond()) →
  
  assert(|(-6 - 2i) + (-6 + 2i)|) →
  assert(|-12|) →
  assert(12)
}