theorem Complex_Log_Bounds() {
  assert(
    ∀z ∈ ℂ, |z| ≤ 1/2 ⇒
    (1/2)|z| ≤ |ln(1 + z)| ≤ (3/2)|z|
  )
}

proof Complex_Log_Bounds() {
  setVar(z: ℂ) →
  assert(-ln(1 + z) = ∑_{n=1}^∞ (-z)^n/n) →
  
  lemma Series_Transform() {
    assert(|1 - ln(1 + z)/z| = |∑_{n=2}^∞ (-1)^n z^{n-1}/n|)
  } →

  lemma Triangle_Inequality() {
    assert(|∑_{n=2}^∞ (-1)^n z^{n-1}/n| ≤ ∑_{n=2}^∞ |z^{n-1}|/n)
  } →

  lemma Bound_Terms() {
    assert(∀n ≥ 2: 1/n ≤ 1/2)
  } →
  
  apply(Bound_Terms()) →
  assert(∑_{n=2}^∞ |z^{n-1}|/n ≤ ∑_{n=2}^∞ |z|^{n-1}/2) →
  
  lemma Geometric_Series() {
    assert(∑_{n=2}^∞ |z|^{n-1}/2 = (|z|/2)/(1-|z|))
  } →
  
  apply(|z| ≤ 1/2) →
  assert((|z|/2)/(1-|z|) ≤ 1/2) →
  
  lemma Final_Bounds() {
    assert(|ln(1 + z)/z - 1| ≤ 1/2 ⇒
           1/2 ≤ |ln(1 + z)/z| ≤ 3/2)
  } →
  
  apply(Final_Bounds()) →
  assert((1/2)|z| ≤ |ln(1 + z)| ≤ (3/2)|z|)
}