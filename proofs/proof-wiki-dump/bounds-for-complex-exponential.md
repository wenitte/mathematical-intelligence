theorem ComplexExponentialBounds() {
  assert(
    ∀z ∈ ℂ ∧ |z| ≤ 1/2 ⇒ 
    (1/2)|z| ≤ |exp(z) - 1| ≤ (3/2)|z|
  )
} ↔

proof ComplexExponentialBounds() {
  setVar(z: ℂ) →
  assume(|z| ≤ 1/2) →
  
  lemma ExpansionForm() {
    assert(exp(z) = ∑_{n=0}^∞ z^n/n!)
  } →
  
  lemma Difference() {
    assert(|exp(z) - 1 - z| = |∑_{n=2}^∞ z^n/n!|)
  } →
  
  assert(|exp(z) - 1 - z| ≤ ∑_{n=2}^∞ |z^n/n!|) by(TriangleInequality) →
  
  lemma FactorialBound() {
    assert(∀n ≥ 2 ⇒ n! ≥ 2) →
    assert(∑_{n=2}^∞ |z^n/n!| ≤ ∑_{n=2}^∞ |z^n|/2)
  } →
  
  lemma GeometricSum() {
    assert(∑_{n=2}^∞ |z^n|/2 = |z|^2/(2(1-|z|)))
  } →
  
  assert(|z|^2/(2(1-|z|)) ≤ (1/2)|z| when |z| ≤ 1/2) →
  
  lemma FinalBound() {
    assert(|exp(z) - 1| ≤ |z| + |exp(z) - 1 - z|) by(TriangleInequality) →
    assert(|exp(z) - 1| ≤ |z| + (1/2)|z|) →
    assert(|exp(z) - 1| ≤ (3/2)|z|)
  } →
  
  conclude((1/2)|z| ≤ |exp(z) - 1| ≤ (3/2)|z|)
}