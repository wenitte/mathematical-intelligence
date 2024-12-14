theorem PolynomialCoefficientSum() {
  assert(
    ∀E(x): Polynomial, 
    let E(x) = ∑[j=0..n](aj * x^j) = 0 →
    (x = 1 is_root_of E(x)) ↔ (∑[j=0..n](aj) = 0)
  )
}

proof PolynomialCoefficientSum() {
  setVar(E(x): Polynomial) →
  setVar(x: Variable) →
  
  assert(
    x is_root_of E(x) ↔ E(x) = 0
  ) →
  
  assert(
    x = 1 is_root_of E(x) ↔ 
    ∑[j=0..n](aj * 1^j) = 0
  ) →
  
  lemma PowerOfOne() {
    assert(
      ∀k ∈ ℕ: 1^k = 1
    )
  } →
  
  apply(PowerOfOne()) →
  
  assert(
    ∑[j=0..n](aj * 1^j) = 0 ↔
    ∑[j=0..n](aj) = 0
  ) →
  
  conclude(
    (x = 1 is_root_of E(x)) ↔ (∑[j=0..n](aj) = 0)
  )
}