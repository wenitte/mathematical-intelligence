theorem ComplexCrossProductAbsComm() {
  assert(
    ∀z₁,z₂ ∈ ℂ ⇒ |z₁ × z₂| = |z₂ × z₁|
  )
} ↔

proof ComplexCrossProductAbsComm() {
  setVar(z₁: ℂ) →
  setVar(z₂: ℂ) →
  
  assert(|z₂ × z₁|) →
  assert(|-(z₁ × z₂)|) →
  by(ComplexCrossAnticomm()) →
  
  assert(|z₁ × z₂|) →
  by(AbsValueNegative()) →
  
  conclude(|z₁ × z₂| = |z₂ × z₁|)
}

lemma Example1() {
  setVar(z₁ = 2 + 5i) →
  setVar(z₂ = 3 - i) →
  assert(|z₁ × z₂| = 17) ∧
  assert(|z₂ × z₁| = 17) →
  conclude(|z₁ × z₂| = |z₂ × z₁|)
}